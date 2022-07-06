import { createVNode, render } from 'vue'
import DUNotification from './Index.vue'

let id = 1

type DUNotificationOption = {
  title: string
  content: string
  duration?: number
}

export default (option: DUNotificationOption) => {
  const vm = createVNode(DUNotification, {
    id: id++,
    title: option.title,
    content: option.content
  })
  const container = document.createElement('div')
  render(vm, container)
  document.body.appendChild(vm.component?.proxy?.$el)
  setTimeout(() => {
    vm.component?.proxy?.$el.remove()
  }, option.duration ?? 3000)
}
