<template>
  <div class="home">
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
</style>