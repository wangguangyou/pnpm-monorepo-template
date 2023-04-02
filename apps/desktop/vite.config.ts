import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import path from 'path'
import fs from 'fs'
const resolve = (pathname) => path.resolve(__dirname, pathname)
const target = resolve('src/pages')
const dirs = fs.readdirSync(target)

const getAlias = () => {
  const res = {
    '@': resolve('src'),
  }
  dirs.forEach((dirName) => {
    res[`@${dirName}`] = path.resolve(__dirname, path.join(target, dirName))
  })
  return res
}

const getPages = () => {
  const res = {
    main: resolve('index.html'),
  }

  dirs.forEach((dirName) => {
    res[dirName] = resolve(`${dirName}.html`)
  })
  console.log(res)
  return res
}
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: getAlias(),
  },
  plugins: [
    vue(),
    Components({
      /* options */
    }),
  ],
  build: {
    rollupOptions: {
      input: getPages(),
    },
  },
})
