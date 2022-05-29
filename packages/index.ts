import './css/index.css'
import { Plugin } from 'vue'
import { components } from './components'

const plugin: Plugin = {
  install(app) {
    components.forEach(item => {
      app.component(item.name, item)
    })
  }
}

export default plugin
