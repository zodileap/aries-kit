import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import wasm from 'vite-plugin-wasm'
import topLevelAwait from 'vite-plugin-top-level-await'
import svgr from 'vite-plugin-svgr'
import path from 'path'

export default defineConfig({
  plugins: [react(), wasm(), topLevelAwait(), svgr()],
  server: {
    port: 5174
  },
  base: '/aries-kit/',
  root: 'preview',
  publicDir: 'public', // 修改为 preview 目录下的 public 文件夹
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
  build: {
    outDir: '../preview-dist', // 修改输出目录为上一级
    emptyOutDir: true,
    assetsInclude: ['**/*.wasm'],
    // Preview 站点会内置所有文档、源码映射和 Monaco worker，默认 500k 告警阈值过低。
    chunkSizeWarningLimit: 9000,
  },
  resolve: {
    alias: {
      '@ari': path.resolve(__dirname, 'src'),
      '@aries-kit/react': path.resolve(__dirname, 'src/index')
    }
  },
  define: {
    // 修复 Monaco Editor 在生产环境中的问题
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
  },
  optimizeDeps: {
    include: ['monaco-editor'],
  },
})
