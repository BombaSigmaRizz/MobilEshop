<template>
  <div class="home">
    <div class="intro">
      <div class="slogan-shop">
        <span class="slogan">{{ slogan }}</span>
        <NuxtLink class="shop-btn">
          <span>Shop Now</span>
          <Icon class="icon" name="gg:arrow-right-o" size="2rem"/>
        </NuxtLink>
      </div>
      <div class="brand-new-img"><img src="../assets/fotecky/iphone16proTW.png" width="850vh" height="850vh"></div>
    </div>
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
  overflow-y: hidden;
}

.intro {
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle at 50% 50%, var(--border) 0%, rgb(224, 224, 224) 1%);
  animation: intro 2s forwards;
  height: calc(100vh - 3.2rem);
}

.slogan-shop {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--text);
  transform: translateX(35%);
  gap: 1rem;
}

.slogan {
  width: 70%;
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
}

.shop-btn {
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0.5rem 1rem;
  width: 12rem;
  height: 3rem;
  outline: 1px solid white;
  border-radius: 2rem;
  background: radial-gradient(circle, var(--border-light) 50%, transparent 100%);
  background-size: 0 0;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  font-size: 1.2rem;
  border: none;
  cursor: pointer;
  transition: all 0.4s ease;
  gap: 1rem;

  .icon {
    transition: all 0.4s ease;
  }

  &:hover {
    // background: var(--border);
    box-shadow: 0px 0px 20px 2px var(--border-highlight);
    background-size: 200% 200%;
    outline: 1px solid rgba(255, 255, 255, 0);
  }

  &:hover .icon {
    translate: 0.5rem;
  }
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