import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        privacy: resolve(__dirname, 'privacy.html'),
        terms: resolve(__dirname, 'terms.html'),
        'en-main': resolve(__dirname, 'en/index.html'),
        'en-privacy': resolve(__dirname, 'en/privacy.html'),
        'en-terms': resolve(__dirname, 'en/terms.html'),
        'ja-main': resolve(__dirname, 'ja/index.html'),
        'ja-privacy': resolve(__dirname, 'ja/privacy.html'),
        'ja-terms': resolve(__dirname, 'ja/terms.html'),
        'zh-hans-main': resolve(__dirname, 'zh-Hans/index.html'),
        'zh-hans-privacy': resolve(__dirname, 'zh-Hans/privacy.html'),
        'zh-hans-terms': resolve(__dirname, 'zh-Hans/terms.html'),
      },
    },
  },
})
