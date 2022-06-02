<script lang="ts">
export default {
  name: 'DUBadge'
}
</script>

<script setup lang="ts">
import { ComponentType } from 'packages/constants'
withDefaults(defineProps<{
  value?: string
  type?: ComponentType
}>(), {
  value: '',
  type: 'primary'
})
</script>

<template>
  <div class="du-badge">
    <div v-show="$props.value" class="du-badge-content" :class="[`du-badge-content-${$props.type}`]">{{ $props.value }}</div>
    <slot></slot>
  </div>
</template>

<style lang="scss">
@use "../../../scss/index.scss" as *;

.du-badge {
  position: relative;
  display: inline-block;
  font-size: 12px;
}

.du-badge-content {
  transform: translateY(-50%) translateX(100%);
  position: absolute;
  top: 0;
  right: 1em;
  padding: 0 0.5em;
  height: 1.4em;
  line-height: 1.4em;
  border-radius: 0.7em;
  color: #fff;
}

@each $type in $types {
  .du-badge-content-#{$type} {
    background: var(--du-#{$type}-color);
  }
}
</style>
