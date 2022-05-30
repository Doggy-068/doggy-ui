<script lang="ts">
export default {
  name: 'DULink'
}
</script>

<script setup lang="ts">
import { ComponentType } from 'packages/constants'
const props = withDefaults(defineProps<{
  type?: ComponentType
  disabled?: boolean
  underline?: boolean
}>(), {
  type: 'primary',
  disabled: false,
  underline: true
})
const onClick = (event: Event): void => props.disabled ? event.preventDefault() : void (0)
</script>

<template>
  <a @click="onClick" class="du-link" :class="[`du-link-${$props.type}`, $props.disabled ? 'du-link-disabled' : '', $props.underline ? 'du-link-underline' : '']">
    <span>
      <slot></slot>
    </span>
  </a>
</template>

<style lang="scss">
@use "../../../scss/index.scss" as *;

.du-link {
  cursor: pointer;
  font-size: var(--du-font-size);
  text-decoration: none;
  transition: color var(--du-transition-duration);

  &:hover {
    text-decoration: none;
  }

  &:not(:last-of-type) {
    margin-right: var(--du-gap-col);
  }

  &.du-link-underline {
    &:hover {
      text-decoration: underline;
    }
  }

  @each $type in $types {
    &.du-link-#{$type} {
      color: var(--du-#{$type}-color);

      &:hover {
        color: var(--du-#{$type}-color-light-1);
      }

      &.du-link-disabled {
        cursor: not-allowed;
        color: var(--du-#{$type}-color-light-2);
        text-decoration: none;
      }
    }
  }
}
</style>
