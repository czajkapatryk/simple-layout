import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '~': path.resolve(__dirname, 'src'),
      '~/components': '/src/components',
    },
  },
  optimizeDeps: {
    include: ['vue'],
  },
  server: {
    port: 3000,
  },
  build: {
    sourcemap: false,
  },
})
