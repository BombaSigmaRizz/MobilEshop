<template>
  <div class="home" ref="home">
    <div ref="cursor-follow" class="cursor-follow"></div>
    <section class="intro">
      <div class="slogan-shop">
        <h1 class="slogan">{{ slogan }}</h1>
        <div class="shop-btn-wrapper" @mouseenter="scrambleWordEffect(shopBtnText!)">
          <NuxtLink class="shop-btn">
            <span data-value="Shop Now" ref="shop-btn-text">Shop Now</span>
            <Icon class="icon" name="gg:arrow-right-o" size="2rem"/>
          </NuxtLink>
        </div>
      </div>
      <div ref="exhibition-img" class="exhibition-img"></div>
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
import { useEventListener } from '@vueuse/core';

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
const shopBtnText = useTemplateRef('shop-btn-text')
const newImg = useTemplateRef('exhibition-img')
const cursorFollow = useTemplateRef('cursor-follow')
let currentSlide = 0
let lastScroll = 0

function fadeImage() {
  if (!newImg.value) return
  newImg.value.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 800, fill: 'forwards' })
}

function themeByScroll() {
  if (!home.value) return
  if (window.scrollY > window.innerHeight*1.5 && window.scrollY < window.innerHeight*2.5) {
    home.value.style.background = 'white'
    home.value.style.color = 'var(--bg0)'
    cursorFollow.value!.style.background = 'rgba(0, 0, 0, 0.3)'
  } else {
    cursorFollow.value!.style.background = 'rgba(255, 255, 255, 0.3)'
    home.value.style.background = 'var(--bg0)'
    home.value.style.color = 'var(--light1)'
  }
}
function smoothScrollTo(e: WheelEvent) {
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
}

function cursorHighlight(e: MouseEvent) {
  cursorFollow.value!.animate({ transform: `translate(${e.clientX - 24}px, ${e.clientY - 24}px)` }, { duration: 200, fill: 'forwards' })
}

onMounted(() => {
  fadeImage()
  useEventListener('scroll', themeByScroll)
  useEventListener('wheel', smoothScrollTo, { passive: false })
  useEventListener('mousemove', cursorHighlight)
})
</script>

<style scoped lang="scss">
.cursor-follow {
  width: 3rem;
  aspect-ratio: 1;
  border-radius: 50%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.3);
  z-index: 100000;
  pointer-events: none;
  transition: all 0.4s ease;
  transform: translateX(-100vw);
}

.home {
  height: fit-content;
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
  justify-content: center;
  flex-direction: row;
  background: radial-gradient(circle at 50% 50%, var(--border) 0%, rgb(224, 224, 224) 1%);
  animation: intro 2s forwards;
  overflow: hidden;
}

.slogan-shop {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--text);
  // transform: translateX(10rem);
  gap: 1rem;
}

.slogan {
  font-size: 1.8em;
}

.shop-btn-wrapper {
  width: 16rem;
  height: 4rem;
  border-radius: 2rem;
  z-index: 100;
}

.shop-btn {
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  padding: 0.5rem 1rem;
  width: 100%;
  height: 100%;
  outline: 1px solid white;
  border-radius: 2rem;
  background: radial-gradient(circle, var(--border-light) 50%, transparent 100%);
  background-size: 0 0;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  font-size: 1.5em;
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

.exhibition-img {
  width: clamp(22rem, 40%, 100vh);
  height: 100%;
  background-image: url('../assets/img/iphone16proTW.png');
  background-position: 50% 50%;
  background-size: cover;
  opacity: 0;
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

@media only screen and (max-width: 1200px) {
  .intro {
    flex-direction: column;
  }
  .slogan-shop {
    transform: none;
    order: 2;
  }
  .brand-new-img {
    order: 1;
  }
}
</style>