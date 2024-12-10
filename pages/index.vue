<template>
  <div class="home">
    <div class="intro">Brand New!</div>
  </div>

  <div class="slogan">{{ slogan }}
  </div>
  <div class="slogan">
    <img src="../assets/fotecky/iphone16proN.png">
  </div>
</template>

<script setup lang="ts">

const slogan = randomSlogan()

function randomSlogan() {
  const slogans = [
    'Your Next Generation Connection Starts Here',
    'Innovating Your Mobile World',
    'Smart, Sleek, Yours',
    'Seamless Style, Infinite Possibilities',
    'Your Gateway to Smarter Living',
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
  background: radial-gradient(circle at 50% 50%, var(--border) 0%, rgba(255,255,255,0) 1%);
  animation: intro 2s forwards;
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