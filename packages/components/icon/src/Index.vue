<script lang="ts">
export default {
  name: 'DUIcon'
}
</script>

<script setup lang="ts">
defineProps<{
  size?: number,
  color?: string
}>()
</script>

<template>
  <i class="du-icon" :style="[$props.size ? { fontSize: `${$props.size}px` } : {}, $props.color ? { color: $props.color } : {}]">
    <slot></slot>
  </i>
</template>

<style lang="scss">
.du-icon {
  display: inline-block;
  font-size: inherit;
  width: 1em;
  height: 1em;
}
</style>
