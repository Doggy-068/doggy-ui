/// <reference types="vitest" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  test: {
    environment: 'jsdom'
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'packages/index.ts'),
      name: 'DoggyUI',
      fileName: (format) => `doggy-ui.${format}.js`
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
