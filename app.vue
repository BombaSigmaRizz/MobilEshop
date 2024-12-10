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
  padding: 1rem;
  box-sizing: border-box;
  background-color: var(--bg1);
  width: 100%;
  height: calc(100vh - 3.2rem);
}
</style>