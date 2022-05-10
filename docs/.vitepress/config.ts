import { defineConfig } from 'vitepress'
import packagejson from '../../package.json'

export default defineConfig({
  title: packagejson.name,
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    sidebar: []
  }
})
