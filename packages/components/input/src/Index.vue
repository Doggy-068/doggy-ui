<script lang="ts">
export default {
  name: 'DUInput'
}
</script>

<script setup lang="ts">
import { ComponentSize } from 'packages/constants'
withDefaults(defineProps<{
  modelValue: string
  size?: ComponentSize
  disabled?: boolean
  placeholder?: string
}>(), {
  size: 'default',
  disabled: false,
  placeholder: '请输入'
})
defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()
</script>

<template>
  <div class="du-input" :class="[`du-input-${$props.size}`, $props.disabled ? 'du-input-disabled' : '']">
    <input :value="$props.modelValue" @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)" type="text" :placeholder="$props.placeholder" :disabled="$props.disabled" />
  </div>
</template>

<style lang="scss">
@use "../../../scss/index.scss" as *;

.du-input {
  display: inline-block;
  width: 100%;
  box-sizing: border-box;
  color: var(--du-primary-text-color);

  >input {
    transition: border-color var(--du-transition-duration-long);
    box-sizing: border-box;
    font-size: inherit;
    outline: none;
    height: 100%;
    width: 100%;
    border-color: var(--du-border-color);
    border-style: solid;
    border-width: 1px;
    border-radius: var(--du-border-radius);
    padding: 0 0.5em;
    color: var(--du-primary-text-color);

    &:focus {
      border-color: var(--du-primary-color);
    }

    &::placeholder {
      color: var(--du-placeholder-text-color);
    }

    &:disabled {
      background: var(--du-fill-color);
      cursor: not-allowed;
    }
  }
}

.du-input-disabled {
  cursor: not-allowed;
}

@each $size in $sizes {
  .du-input-#{$size} {
    height: map-get($size2Height, $size);
    font-size: var(--du-font-size-#{$size});
  }
}
</style>
