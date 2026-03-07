import fs from "fs";
import path from "path";

const repoRoot = path.resolve(__dirname, "..");
const workspaceYamlPath = path.resolve(repoRoot, "..", "pnpm-workspace.yaml");
const packageJsonPath = path.resolve(repoRoot, "package.json");
const distPackageJsonPath = path.resolve(repoRoot, "dist", "package.json");

const readJson = (filePath: string) => JSON.parse(fs.readFileSync(filePath, "utf8"));

const parseCatalog = (content: string) => {
  const lines = content.split(/\r?\n/);
  const catalog: Record<string, string> = {};
  let inCatalog = false;

  for (const line of lines) {
    if (!inCatalog) {
      if (/^\s*catalog:\s*$/.test(line)) {
        inCatalog = true;
      }
      continue;
    }

    if (/^\S/.test(line)) {
      break;
    }

    const match = line.match(/^\s+["']?([^"':]+)["']?\s*:\s*["']?([^"']+)["']?\s*$/);
    if (match) {
      catalog[match[1]] = match[2];
    }
  }

  return catalog;
};

const resolveDeps = (deps: Record<string, string> | undefined, catalog: Record<string, string>) => {
  if (!deps) return deps;
  const resolved: Record<string, string> = { ...deps };

  for (const [name, version] of Object.entries(deps)) {
    if (version.startsWith("catalog:")) {
      const catalogVersion = catalog[name];
      if (!catalogVersion) {
        throw new Error(`catalog 中缺少依赖版本: ${name}`);
      }
      resolved[name] = catalogVersion;
    }
  }

  return resolved;
};

const workspaceYaml = fs.readFileSync(workspaceYamlPath, "utf8");
const catalog = parseCatalog(workspaceYaml);
const pkg = readJson(packageJsonPath);

const output = {
  name: pkg.name,
  version: pkg.version,
  description: pkg.description,
  license: pkg.license,
  repository: pkg.repository,
  homepage: pkg.homepage,
  bugs: pkg.bugs,
  keywords: pkg.keywords,
  sideEffects: pkg.sideEffects,
  publishConfig: pkg.publishConfig,
  main: pkg.main,
  module: pkg.module,
  types: pkg.types,
  typings: pkg.typings,
  style: pkg.style,
  exports: pkg.exports,
  files: pkg.files,
  dependencies: resolveDeps(pkg.dependencies, catalog),
  peerDependencies: resolveDeps(pkg.peerDependencies, catalog),
};

fs.mkdirSync(path.dirname(distPackageJsonPath), { recursive: true });
fs.writeFileSync(distPackageJsonPath, JSON.stringify(output, null, 2) + "\n");
