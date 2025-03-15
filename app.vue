<template>
  <TopBar />
  <div class="app">
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>

<script setup>
</script>

<style scoped lang="scss">
.app {
  margin-top: 3.2rem;
  // padding: 1rem;
  box-sizing: border-box;
  background-color: var(--bg0);
  width: 100%;
  min-height: calc(100vh - 3.2rem);
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.4s, filter .4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>