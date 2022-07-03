<script lang="ts">
export default {
  name: 'DUInputNumber'
}
</script>

<script setup lang="ts">
import { ref } from 'vue'
import { ComponentSize } from 'packages/constants'
import { useFocus } from '../../../hooks'
import DUIcon from '../../icon'
import { Minus, Plus } from '../../icon/src/components'
const props = withDefaults(defineProps<{
  modelValue: number
  size?: ComponentSize
  disabled?: boolean
  min?: number
  max?: number
}>(), {
  size: 'default',
  disabled: false,
  min: -Infinity,
  max: Infinity
})
const emits = defineEmits<{
  (e: 'update:modelValue', value: number): void
}>()
const inputEl = ref<HTMLInputElement>()
const { isFocus } = useFocus(inputEl)
const onDecrease = () => {
  const value = props.modelValue - 1
  if (value >= props.min) emits('update:modelValue', props.modelValue - 1)
}
const onIncrease = () => {
  const value = props.modelValue + 1
  if (value <= props.max) emits('update:modelValue', props.modelValue + 1)
}
const onInputChange = (event: Event) => {
  const value = Number((event.target as HTMLInputElement).value.trim())
  if (!isNaN(value)) {
    emits('update:modelValue', value)
  }
}
</script>

<template>
  <div class="du-input-number" :class="[isFocus ? 'du-input-number-focus' : '', `du-input-number-${$props.size}`, $props.disabled ? 'du-input-number-disabled' : '']">
    <span @click="onDecrease" class="du-input-number-control">
      <DUIcon>
        <Minus />
      </DUIcon>
    </span>
    <input :value="$props.modelValue" @change="onInputChange" ref="inputEl" :disabled="$props.disabled" type="text" />
    <span @click="onIncrease" class="du-input-number-control">
      <DUIcon>
        <Plus />
      </DUIcon>
    </span>
  </div>
</template>

<style lang="scss">
@use "../../../scss/index.scss" as *;

$size2Width: (
  small:120px,
  default:150px,
  large:180px
);

.du-input-number {
  display: inline-block;
  box-sizing: border-box;
  position: relative;
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
    color: inherit;
    text-align: center;

    &:disabled {
      background: var(--du-fill-color);
      cursor: not-allowed;
    }
  }

  &.du-input-number-focus {
    >input {
      border-color: var(--du-primary-color);
    }

    .du-input-number-control {
      border-color: var(--du-primary-color);
    }
  }
}

.du-input-number-disabled {
  cursor: not-allowed;
  color: var(--du-disabled-text-color);

  .du-input-number-control {
    cursor: not-allowed;
    color: inherit;

    &:hover {
      color: inherit;
    }
  }
}

@each $size in $sizes {
  .du-input-number-#{$size} {
    width: map-get($size2Width, $size);
    height: map-get($size2Height, $size);
    font-size: var(--du-font-size-#{$size});

    .du-input-number-control {
      height: map-get($size2Height, $size);
      width: map-get($size2Height, $size);
    }

    >input {
      padding: 0 calc(#{map-get($size2Height, $size)} + 1em);
    }
  }
}

.du-input-number-control {
  transition: border-color var(--du-transition-duration-long);
  border-color: var(--du-border-color);
  border-style: solid;
  border-width: 1px;
  background: var(--du-fill-color);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: absolute;
  top: 0;
  color: var(--du-primary-text-color);

  &:hover {
    color: var(--du-primary-color);
  }

  &:first-of-type {
    left: 0;
    border-radius: var(--du-border-radius) 0 0 var(--du-border-radius);
  }

  &:last-of-type {
    right: 0;
    border-radius: 0 var(--du-border-radius) var(--du-border-radius) 0;
  }
}
</style>
