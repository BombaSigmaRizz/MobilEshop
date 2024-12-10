<template>
  <div class="home">
    <div class="intro">Brand New!</div>
  </div>

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
.home {
  width: 100%;
}

.intro {
  background: radial-gradient(circle at 50% 50%, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 1%);
  animation: intro infinite 2s;
  height: calc(100vh - 3.2rem);
}

@keyframes intro {
  0% {
    background-size: 100% 100%;
    background-position: 50% 50%;
  }
  100% {
    background-size: 15000% 15000%;
    background-position: 50% 50%;
  }
}
</style>