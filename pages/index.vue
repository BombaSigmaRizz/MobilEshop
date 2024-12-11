<template>
  <div class="home" ref="home">
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

    <section class="best-prices">
      <h2>We Have THE Best Prices</h2>
      <p>Get the best prices on the latest smartphones and accessories.</p>
    </section>

    <section class="fast-deliveries">
      <h2>Lightning Fast Deliveries!</h2>
      <p>Can't even close the website and the order is delivered.</p>
    </section>

    <section class="no-competition">
      <h2>Competition is Non-Existent</h2>
      <p>We're simply the best at what we do.</p>
    </section>
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

const home = useTemplateRef('home')

onMounted(() => {
  window.addEventListener('scroll', () => {
    if (!home.value) return

    if (window.scrollY > 1200 && window.scrollY < 1800) {
      home.value.style.background = 'white'
      home.value.style.color = 'var(--bg0)'
    } else {
      home.value.style.background = 'var(--bg0)'
      home.value.style.color = 'var(--light1)'
    }
  })

  window.addEventListener('wheel', e => {
    e.preventDefault()

    let deltaY = e.deltaY

    if (deltaY < 30 && deltaY > 0) deltaY = 800

    let speed = deltaY * 3

    window.scrollBy(0, speed)
  }, {passive: false})
})
</script>

<style scoped lang="scss">
.home {
  // width: 100%;
  background: var(--bg0);
  transition: all 0.4s ease;
  color: var(--light1);
}

section {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
}

.best-prices {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
}

.fast-deliveries {
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