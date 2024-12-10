<template>
  <div class="home">
  </div>

  <div class="slogan">{{ slogan }}</div>
</template>

<script setup lang="ts">

const slogan = randomSlogan()

function randomSlogan() {
  const slogans = [
    'Welcome to the future of the web',
    'The future is now',
    'The future is here',
    'The future is bright',
    'The future is ours',
  ]
  const slogan = slogans[Math.floor(Math.random() * slogans.length)]
  return slogan
}
</script>

<style scoped lang="scss">
</style>