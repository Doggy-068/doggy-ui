import { defineConfig } from 'vitepress'
import packagejson from '../../package.json'

export default defineConfig({
  base: '/doggy-ui/',
  title: packagejson.name,
  lang: 'zh-CN',
  head: [
    ['link', { rel: 'icon', type: 'image/x-cion', href: '/doggy-ui/favicon.ico' }]
  ],
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    nav: [
      { text: '指南', link: '/guide/installation', activeMatch: '/guide/' },
      { text: '组件', link: '/component/button', activeMatch: '/component/' }
    ],
    sidebar: {
      '/guide/': [{
        text: '基础',
        children: [{
          text: '安装',
          children: [],
          link: '/guide/installation'
        }, {
          text: '快速开始',
          children: [],
          link: '/guide/quickstart'
        }]
      }],
      '/component/': [{
        text: '基础组件',
        children: [{
          text: 'Button 按钮',
          children: [],
          link: '/component/button'
        }]
      }]
    }
  }
})
