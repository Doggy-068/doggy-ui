<script lang="ts">
export default {
  name: 'DUNotification'
}
</script>

<script setup lang="ts">
defineProps<{
  id: number
  title: string
  content: string
}>()
</script>

<template>
  <transition name="du-notification" appear>
    <div class="du-notification" :id="`du-notification-${$props.id}`">
      <h5 class="du-notification-title">{{ $props.title }}</h5>
      <div class="du-notification-body">
        <span>{{ $props.content }}</span>
      </div>
    </div>
  </transition>
</template>

<style lang="scss">
.du-notification-enter-active {
  transition: all 0.3s;
}

.du-notification-enter-from {
  transform: translateX(100%);
}

.du-notification-enter-to,
.du-notification-after-enter {
  transform: translateX(0);
}

.du-notification {
  font-size: var(--du-font-size-default);
  $offsetRight: 20px;
  position: fixed;
  z-index: 999;
  top: 20px;
  right: $offsetRight;
  box-sizing: border-box;
  width: 360px;
  max-width: calc(80vw - #{$offsetRight});
  background: #fff;
  box-shadow: var(--du-shadow-light);
  padding: 1em;
}

.du-notification-title {
  font-weight: bold;
  margin: 0;
  font-size: larger;
}

.du-notification-body {
  margin: 1em 0;

}
</style>
