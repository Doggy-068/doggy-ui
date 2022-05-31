import { ref, Ref, onMounted } from 'vue'

export const useFocus = (target: Ref<HTMLInputElement | undefined>) => {
  const isFocus = ref<boolean>(false)
  onMounted(() => {
    if (target.value) {
      target.value.onfocus = () => isFocus.value = true
      target.value.onblur = () => isFocus.value = false
    }
  })
  return {
    isFocus
  }
}
