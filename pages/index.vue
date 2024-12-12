<template>
  <div class="home" ref="home">
    <section class="intro">
      <div class="slogan-shop">
        <h1 class="slogan">{{ slogan }}</h1>
        <NuxtLink class="shop-btn">
          <span>Shop Now</span>
          <Icon class="icon" name="gg:arrow-right-o" size="2rem"/>
        </NuxtLink>
      </div>
      <div class="brand-new-img"><img src="../assets/fotecky/iphone16proTW.png" width="850vh" height="850vh"></div>
    </section>

    <section class="best-prices">
      <h1>We Have THE Best Prices</h1>
      <p>Get the best prices on the latest smartphones and accessories.</p>
    </section>

    <section class="fast-deliveries">
      <h1>Lightning Fast Deliveries!</h1>
      <p>Can't even close the website and the order is delivered.</p>
    </section>

    <section class="no-competition">
      <h1>Competition is Non-Existent</h1>
      <p>We're simply the best at what we do.</p>
    </section>
  </div>
</template>

<script setup lang="ts">

function pixelToVh(px: number) {
  return 100 / document.documentElement.clientHeight
}

function vhToPixel(vh: number) {
  return vh * document.documentElement.clientHeight
}

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

  let currentSlide = 0

  let lastScroll = 0

  window.addEventListener('wheel', e => {
    e.preventDefault()

    if (Date.now() - lastScroll < 500) return

    let slide0 = 0
    let slide1 = 0.945
    let slide2 = 1.945
    let slide3 = 2.945

    const slidesPos = [slide0, slide1, slide2, slide3]

    if (e.deltaY > 0) {
      if (currentSlide < slidesPos.length - 1) currentSlide++
    } else if (e.deltaY < 0) {
      if (currentSlide > 0) currentSlide--
    } else {
      return
    }

    window.scrollTo(0, vhToPixel(slidesPos[currentSlide]))

    lastScroll = Date.now()
  }, { passive: false })
})
</script>

<style scoped lang="scss">
.home {
  background: var(--bg0);
  transition: all 0.4s ease;
  color: var(--light1);
}

section {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: calc(100vh - 3.2rem);

  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    width: 70%;
    text-align: center;
  }
}

.intro {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  background: radial-gradient(circle at 50% 50%, var(--border) 0%, rgb(224, 224, 224) 1%);
  animation: intro 2s forwards;
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