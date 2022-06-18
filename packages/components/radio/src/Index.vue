<script lang="ts">
export default {
  name: 'DURadio'
}
</script>

<script setup lang="ts">
import { ComponentSize } from 'packages/constants'
withDefaults(defineProps<{
  modelValue: string
  size?: ComponentSize
  options: { label: string, value: string }[]
}>(), {
  size: 'default'
})
const emits = defineEmits<{
  (e: 'update:modelValue', val: string): void
}>()
const onRadioOptionClick = (val: string) => emits('update:modelValue', val)
</script>

<template>
  <div class="du-radio">
    <div @click="onRadioOptionClick(item.value)" v-for="item of $props.options" :key="item.value" class="du-radio-option" :class="[$props.modelValue === item.value ? 'du-radio-option-checked' : '']">
      <div class="du-radio-option-box">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="15" :fill="$props.modelValue === item.value ? '#fff' : 'transparent'" />
        </svg>
      </div>
      <span>{{ item.label }}</span>
    </div>
  </div>
</template>

<style lang="scss">
@use "../../../scss/index.scss" as *;

.du-radio {
  display: flex;
}

.du-radio-option {
  cursor: pointer;
  display: flex;
  align-items: center;

  &:not(:last-of-type) {
    margin-right: var(--du-gap-col);
  }
}

.du-radio-option-box {
  display: flex;
  box-sizing: border-box;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  border: 1px solid var(--du-border-color);
  margin-right: 0.5em;
}

.du-radio-option-checked {
  color: var(--du-primary-color);

  .du-radio-option-box {
    background: var(--du-primary-color);
    border-color: var(--du-primary-color);
  }
}
</style>
