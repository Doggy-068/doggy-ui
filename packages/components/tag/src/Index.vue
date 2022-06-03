<script lang="ts">
export default {
  name: 'DUTag'
}
</script>

<script setup lang="ts">
import { ComponentType, ComponentSize } from 'packages/constants'
withDefaults(defineProps<{
  type?: ComponentType
  size?: ComponentSize
  round?: boolean
}>(), {
  type: 'primary',
  size: 'default',
  round: false
})
</script>

<template>
  <div class="du-tag" :class="[`du-tag-${$props.type}`, `du-tag-${$props.size}`, $props.round ? 'du-tag-round' : '']">
    <span>
      <slot></slot>
    </span>
  </div>
</template>

<style lang="scss">
@use "sass:math";
@use "../../../scss/index.scss" as *;

.du-tag {
  display: inline-flex;
  align-items: center;
  padding: 0 1em;
  box-sizing: border-box;
  border-radius: var(--du-border-radius);
  border-style: solid;
  border-width: 1px;
  cursor: default;

  &:not(:last-of-type) {
    margin-right: var(--du-gap-col);
  }
}

@each $type in $types {
  .du-tag-#{$type} {
    background: var(--du-#{$type}-color-light-5);
    color: var(--du-#{$type}-color);
    border-color: var(--du-#{$type}-color-light-3);
  }
}

@each $size in $sizes {
  .du-tag-#{$size} {
    height: map-get($size2Height, $size);
    font-size: var(--du-font-size-#{$size});

    &.du-tag-round {
      border-radius: math.div(map-get($size2Height, $size), 2);
    }
  }
}
</style>
