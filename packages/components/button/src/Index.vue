<script lang="ts">
export default {
  name: 'DUButton'
}
</script>

<script setup lang="ts">
import { ComponentType, ComponentSize } from 'packages/constants'
const props = withDefaults(defineProps<{
  type?: ComponentType
  size?: ComponentSize
  round?: boolean
  disabled?: boolean
}>(), {
  type: 'primary',
  size: 'default',
  round: false,
  disabled: false
})
const emits = defineEmits<{
  (e: 'click'): void
}>()
const onClick = () => props.disabled ? null : emits('click')
</script>

<template>
  <button @click="onClick" class="du-button" :class="[`du-button-${$props.type}`, `du-button-${$props.size}`, $props.round ? 'du-button-round' : '', $props.disabled ? 'du-button-disabled' : '']">
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<style lang="scss">
@use "sass:math";
@use "../../../scss/index.scss" as *;

.du-button {
  cursor: pointer;
  box-sizing: border-box;
  outline: none;
  border: none;
  border-radius: var(--du-border-radius);
  padding: 1em;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  transition: background var(--du-transition-duration);

  &:not(:last-of-type) {
    margin-right: var(--du-gap-col);
  }
}

.du-button-disabled {
  cursor: not-allowed;
}

@each $type in $types {
  .du-button-#{$type} {
    color: #fff;
    background: var(--du-#{$type}-color);

    &:hover {
      background: var(--du-#{$type}-color-light-1);
    }

    &:active {
      background: var(--du-#{$type}-color-dark-1);
    }

    &.du-button-disabled {
      background: var(--du-#{$type}-color-light-2);
    }
  }
}

@each $size in $sizes {
  .du-button-#{$size} {
    height: map-get($size2Height, $size);
    line-height: map-get($size2Height, $size);
    font-size: var(--du-font-size-#{$size});

    &.du-button-round {
      border-radius: math.div(map-get($size2Height, $size), 2);
    }
  }
}
</style>
