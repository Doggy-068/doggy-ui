import './css/index.css'
import { Plugin } from 'vue'
import { components } from './components'
export * from './components/icon/src/components'
export * from './components/message'
export * from './components/notification'

const plugin: Plugin = {
  install(app) {
    components.forEach(item => {
      app.component(item.name, item)
    })
  }
}

export {
  plugin
}
