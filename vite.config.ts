// vite.config.ts
import { defineConfig } from 'vite'
import { createHtmlPlugin } from 'vite-plugin-html'
import vueDevTools from 'vite-plugin-vue-devtools'

import vue from '@vitejs/plugin-vue'

export default defineConfig({
  
  plugins: [
    // register vueDevTools before createHtmlPlugin
    vueDevTools(),
    createHtmlPlugin({}),
    vue(),
  ]
})