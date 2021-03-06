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
    repo: 'https://github.com/Doggy-068/doggy-ui',
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
        }, {
          text: 'Icon 图标',
          children: [],
          link: '/component/icon'
        }, {
          text: 'Link 链接',
          children: [],
          link: '/component/link'
        }]
      }, {
        text: '表单组件',
        children: [{
          text: 'Checkbox 多选框',
          children: [],
          link: '/component/checkbox'
        }, {
          text: 'Input 输入框',
          children: [],
          link: '/component/input'
        }, {
          text: 'Input Number 数字输入框',
          children: [],
          link: '/component/input-number'
        }, {
          text: 'Radio 单选框',
          children: [],
          link: '/component/radio'
        }, {
          text: 'Switch 开关',
          children: [],
          link: '/component/switch'
        }]
      }, {
        text: '数据组件',
        children: [{
          text: 'Badge 徽章',
          children: [],
          link: '/component/badge'
        }, {
          text: 'Progress 进度条',
          children: [],
          link: '/component/progress'
        }, {
          text: 'Tag 标签',
          children: [],
          link: '/component/tag'
        }]
      }, {
        text: '反馈组件',
        children: [{
          text: 'Message 消息',
          children: [],
          link: '/component/message'
        }, {
          text: 'Notification 通知',
          children: [],
          link: '/component/notification'
        }]
      }]
    }
  }
})
