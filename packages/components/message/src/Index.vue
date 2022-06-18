<script setup lang="ts">
import { ComponentType } from 'packages/constants'
defineProps<{
  id: number
  type: ComponentType
  message: string
}>()
const onAfterEnter = (el: HTMLElement) => el.classList.add('du-message-after-enter')
</script>

<template>
  <transition name="du-message" appear @after-enter="onAfterEnter">
    <div :id="`du-message-${$props.id}`" class="du-message" :class="[`du-message-${$props.type}`]">
      <span>{{ $props.message }}</span>
    </div>
  </transition>
</template>

<style lang="scss">
@use "../../../scss/index.scss" as *;

.du-message-enter-active {
  transition: all 0.3s;
}

.du-message-enter-from {
  top: 0px;
}

.du-message-enter-to,
.du-message-after-enter {
  top: 40px;
}

.du-message {
  z-index: 999;
  position: fixed;
  left: 50vw;
  transform: translateX(-50%);
  font-size: var(--du-font-size-small);
  padding: 0.5em 1em;
  border-radius: var(--du-border-radius);
  border-style: solid;
  border-width: 1px;
}

@each $type in $types {
  .du-message-#{$type} {
    color: var(--du-#{$type}-color);
    background: var(--du-#{$type}-color-light-4);
    border-color: var(--du-#{$type}-color-light-2);
  }
}
</style>
