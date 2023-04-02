import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
const resolve = (pathname) => path.resolve(__dirname, pathname)
import Components from 'unplugin-vue-components/vite'
import PostcssClamp from 'postcss-px-to-clamp'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      /* options */
    }),
  ],
  resolve: {
    alias: {
      '@': resolve('src'),
    },
  },
  css: {
    postcss: {
      plugins: [
        PostcssClamp({
          viewportWidth: 750,
          minViewportWidth: '400px',
          maxViewportWidth: '1000px',
          viewportUnit: 'vw',
          fontViewportUnit: 'vw',
          exclude: [/\/node_modules\//],
        }),
      ],
    },
  },
})
