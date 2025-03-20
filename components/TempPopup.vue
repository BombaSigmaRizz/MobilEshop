<template>
  <div class="temp-popup-container">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
</script>

<style scoped lang="scss">
.temp-popup-container {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%, -100%);
  background: var(--bg0);
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
  animation: floatDown 2s ease-out;
  z-index: 10000;
  color: var(--text);
}

@keyframes floatDown {
  0% {
    opacity: 0;
    transform: translate(-50%, -100%);
  }
  20% {
    opacity: 1;
    transform: translate(-50%, 100%);
  }

  80% {
    opacity: 1;
    transform: translate(-50%, 100%);
  }

  100% {
    opacity: 0;
    transform: translate(-50%, -100%);
  }
}
</style>