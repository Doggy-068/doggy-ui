<script lang="ts">
export default {
  name: 'DUSwitch'
}
</script>

<script setup lang="ts">
import { ComponentSize } from 'packages/constants'
const props = withDefaults(defineProps<{
  modelValue: boolean
  size?: ComponentSize
  disabled?: boolean
  onColor?: string
  offColor?: string
}>(), {
  size: 'default',
  disabled: false,
  onColor: 'var(--du-primary-color)',
  offColor: 'var(--du-fill-color-dark-2)'
})
const emits = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()
const onSwitchClick = () => {
  if (!props.disabled) {
    emits('update:modelValue', !props.modelValue)
  }
}
</script>

<template>
  <div @click="onSwitchClick" class="du-switch" :class="[`du-switch-${$props.size}`, $props.disabled ? 'du-switch-disabled' : '']" :style="{ background: $props.modelValue ? $props.onColor : $props.offColor }">
    <div class="du-switch-circle" :class="[$props.modelValue ? 'du-switch-circle-on' : '']"></div>
  </div>
</template>

<style lang="scss">
@use "sass:math";
@use "../../../scss/index.scss" as *;

.du-switch {
  transition: background var(--du-transition-duration-long);
  display: inline-block;
  cursor: pointer;
  position: relative;
}

.du-switch-disabled {
  cursor: not-allowed;
}

@each $size in $sizes {
  .du-switch-#{$size} {
    height: map-get($size2Height, $size);
    width: 2 * map-get($size2Height, $size);
    border-radius: math.div(map-get($size2Height, $size), 2);

    .du-switch-circle {
      height: map-get($size2Height, $size) - 4px;
      width: map-get($size2Height, $size) - 4px;
    }

    .du-switch-circle-on {
      left: map-get($size2Height, $size) + 2px;
    }
  }
}

.du-switch-circle {
  transition: all var(--du-transition-duration-long);
  position: absolute;
  top: 2px;
  left: 2px;
  border-radius: 50%;
  background: #fff;
}
</style>
