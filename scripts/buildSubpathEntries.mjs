import path from "path";
import fs from "fs-extra";
import { build } from "vite";
import react from "@vitejs/plugin-react-swc";
import wasm from "vite-plugin-wasm";
import topLevelAwait from "vite-plugin-top-level-await";
import svgr from "vite-plugin-svgr";

const repoRoot = path.resolve(import.meta.dirname, "..");
const externalPackages = ["react", "react-dom", "react-router-dom"];
const externalSubpaths = ["react-dom/client", "react-dom/server"];

const isExternal = (id) =>
  externalPackages.some((pkg) => id === pkg || id.startsWith(`${pkg}/`)) ||
  externalSubpaths.includes(id);

const patchMonacoDynamicImports = async (targetDir) => {
  const target = 'import(`${FileAccess.asBrowserUri(`${e}.js`).toString(!0)}`)';
  const replacement =
    'import(/* @vite-ignore */ `${FileAccess.asBrowserUri(`${e}.js`).toString(!0)}`)';

  if (!(await fs.pathExists(targetDir))) {
    return;
  }

  const entries = await fs.readdir(targetDir);

  await Promise.all(
    entries
      .filter((entry) => /\.(m?js)$/.test(entry))
      .map(async (entry) => {
        const filePath = path.join(targetDir, entry);
        const content = await fs.readFile(filePath, "utf8");

        if (!content.includes(target) || content.includes(replacement)) {
          return;
        }

        await fs.writeFile(filePath, content.replaceAll(target, replacement));
      })
  );
};

const createBaseConfig = () => ({
  configFile: false,
  root: repoRoot,
  plugins: [
    react(),
    wasm(),
    topLevelAwait(),
    svgr({
      svgrOptions: {
        icon: true,
        dimensions: false,
      },
    }),
  ],
  resolve: {
    alias: {
      "@ari": path.resolve(repoRoot, "./src"),
      "@aries-kit/react": path.resolve(repoRoot, "src/index"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
        additionalData: (source, filename) => {
          const normalized = filename.replace(/\\/g, "/");
          if (
            normalized.endsWith("/src/style.scss") ||
            normalized.endsWith("/src/theme/style.scss")
          ) {
            return source;
          }

          return `@import "@ari/theme/index.scss";${source}`;
        },
      },
    },
  },
  define: {
    "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV || "development"),
  },
  build: {
    emptyOutDir: false,
    cssCodeSplit: true,
    assetsInlineLimit: 0,
    target: "esnext",
    rollupOptions: {
      external: isExternal,
      output: {
        assetFileNames: "assets/[name][extname]",
      },
    },
  },
});

const buildCodeSubpath = async () => {
  await build({
    ...createBaseConfig(),
    build: {
      ...createBaseConfig().build,
      outDir: path.resolve(repoRoot, "dist/code"),
      lib: {
        entry: path.resolve(repoRoot, "src/code.ts"),
        formats: ["es"],
        fileName: () => "index.js",
      },
    },
  });

  await patchMonacoDynamicImports(path.resolve(repoRoot, "dist/code"));

  const sourceStylePath = path.resolve(repoRoot, "dist/assets/editor.css");
  const targetStylePath = path.resolve(repoRoot, "dist/code/style.css");

  if (await fs.pathExists(sourceStylePath)) {
    await fs.copy(sourceStylePath, targetStylePath);
  }
};

buildCodeSubpath().catch((error) => {
  console.error(error);
  process.exit(1);
});
