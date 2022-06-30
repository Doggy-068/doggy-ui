<script lang="ts">
export default {
  name: 'DUCheckbox'
}
</script>

<script setup lang="ts">
import { ComponentSize } from 'packages/constants'
import { Select } from '../../icon/src/components'
const props = withDefaults(defineProps<{
  modelValue: boolean
  size?: ComponentSize
  label?: string
}>(), {
  size: 'default',
  label: ''
})
const emits = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()
const onCheckboxClick = () => emits('update:modelValue', !props.modelValue)
</script>

<template>
  <div @click="onCheckboxClick" class="du-checkbox" :class="[`du-checkbox-${$props.size}`, $props.modelValue ? 'du-checkbox-checked' : '']">
    <span class="du-checkbox-box">
      <Select />
    </span>
    <span>{{ $props.label }}</span>
  </div>
</template>

<style lang="scss">
@use "../../../scss/index.scss" as *;

.du-checkbox {
  transition: color var(--du-transition-duration);
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  color: var(--du-regular-text-color);

  &:not(:last-of-type) {
    margin-right: var(--du-gap-col);
  }
}

@each $size in $sizes {
  .du-checkbox-#{$size} {
    height: map-get($size2Height, $size);
    font-size: var(--du-font-size-#{$size});
  }
}

.du-checkbox-checked {
  color: var(--du-primary-color);

  .du-checkbox-box {
    background: var(--du-primary-color);
    border-color: var(--du-primary-color);
    color: #fff;
  }
}

.du-checkbox-box {
  transition: border-color var(--du-transition-duration);
  width: 1em;
  height: 1em;
  display: flex;
  box-sizing: border-box;
  border: 1px solid var(--du-border-color);
  border-radius: var(--du-border-radius-mini);
  margin-right: 0.5em;
  color: transparent;
}
</style>
