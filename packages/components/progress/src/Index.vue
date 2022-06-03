<script lang="ts">
export default {
  name: 'DUProgress'
}
</script>

<script setup lang="ts">
withDefaults(defineProps<{
  width?: string
  barWidth?: number
  percentage: number
  color?: string
}>(), {
  width: '300px',
  barWidth: 6,
  color: 'var(--du-primary-color)'
})
</script>

<template>
  <div class="du-progress" :style="{ width: $props.width }">
    <div class="du-progress-track" :style="{ height: `${$props.barWidth}px`, borderRadius: `${($props.barWidth as number) / 2}px` }">
      <div class="du-progress-bar" :style="{ width: `${$props.percentage}%`, borderRadius: `${($props.barWidth as number) / 2}px`, background: $props.color }"></div>
    </div>
    <div class="du-progress-text">
      <span>{{ `${$props.percentage}%` }}</span>
    </div>
  </div>
</template>

<style lang="scss">
.du-progress {
  display: flex;
  align-items: center;
  font-size: var(--du-font-size-default);
  color: var(--du-regular-text-color);
}

.du-progress-track {
  width: 100%;
  background: var(--du-fill-color);
  overflow: hidden;
}

.du-progress-bar {
  transition: width var(--du-transition-duration-long);
  height: 100%;
}

.du-progress-text {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  line-height: 1em;
  margin-left: 0.5em;
}
</style>
