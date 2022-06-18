import { createVNode, render } from 'vue'
import DUMessageVue from './Index.vue'
import { ComponentType } from '../../../constants'

let id = 1

type DUMessageOption = {
  type: ComponentType
  duration?: number
  message: string
}

export default (option: DUMessageOption) => {
  const vm = createVNode(DUMessageVue, {
    id: id++,
    type: option.type,
    message: option.message
  })
  const container = document.createElement('div')
  render(vm, container)
  document.body.appendChild(vm.component?.proxy?.$el)
  setTimeout(() => {
    vm.component?.proxy?.$el.remove()
  }, option.duration ?? 3000)
}
