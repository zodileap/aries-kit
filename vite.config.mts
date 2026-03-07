import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { fileURLToPath } from 'url'
import fs from 'fs-extra'
import dts from 'vite-plugin-dts'
import wasm from "vite-plugin-wasm";
import topLevelAwait from "vite-plugin-top-level-await";
import svgr from 'vite-plugin-svgr'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
  plugins: [
    react(),
    // wasm
    wasm(),
    topLevelAwait(),
    {
      name: 'move-files',
      closeBundle: async () => {

        // 移动 src/theme 下的所有文件到 dist/theme
        await fs.copy(path.resolve(__dirname, 'src/theme'), path.resolve(__dirname, 'dist/theme'))

        // 移动 types 文件
        await fs.copy(
          path.resolve(__dirname, 'src/types'),
          path.resolve(__dirname, 'dist/types/types')
        )

        await fs.copy(path.resolve(__dirname, 'README.md'), path.resolve(__dirname, 'dist/README.md'))
        await fs.copy(path.resolve(__dirname, 'LICENSE'), path.resolve(__dirname, 'dist/LICENSE'))

        // await fs.copy(path.resolve(__dirname, 'src/core'), path.resolve(__dirname, 'dist/core'))
        console.log('Files moved successfully')
      }
    },
    dts({
      insertTypesEntry: true,
      include: ['src'],
      outDir: 'dist/types',
    }),
    svgr({
      svgrOptions: {
        // svgr 配置选项
        icon: true,
        // 保留 svg 的 viewBox
        dimensions: false,
      },
    }),
  ],
  resolve: {
    alias: {
      '@ari': path.resolve(__dirname, './src'),
      '@aries-kit/react': path.resolve(__dirname, 'src/index')
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
        additionalData: `@import "@ari/theme/index.scss";`,
      },
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'AriesKit',
      formats: ['es', 'umd'],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react-router-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react-router-dom': 'ReactRouterDOM',
        },
        assetFileNames: 'assets/[name][extname]',
      },
    },
    assetsInlineLimit: 0, // 这确保所有资源文件都作为单独的文件被输出
    target: 'esnext', // 确保支持 WASM
  },
  define: {
    // 修复 Monaco Editor 在生产环境中的问题
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
  },
  optimizeDeps: {
    include: ['monaco-editor'],
  },
})
