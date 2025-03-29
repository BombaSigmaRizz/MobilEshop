<template>
  <div class="home" ref="home">
    <section ref="sec0" class="intro">
      <div class="slogan-shop">
        <h1 class="slogan">{{ slogan }}</h1>
        <div class="shop-btn-wrapper" @mouseenter="scrambleWordEffect(shopBtnText!)">
          <NuxtLink class="shop-btn" to="/shop">
            <span data-value="Shop Now" ref="shop-btn-text">Shop Now</span>
            <Icon class="icon" name="gg:arrow-right-o" size="2rem"/>
          </NuxtLink>
        </div>
      </div>
      <div ref="exhibition-img" class="exhibition-img"></div>
    </section>

    <section ref="sec1" class="hidden">
      <h1>We Have THE Best Prices</h1>
      <p>Get the best prices on the latest smartphones with many variations.</p>
      <div ref="best-prices-img" class="best-prices-img"></div>
    </section>

    <section ref="sec2" class="hidden">
      <h1>Lightning Fast Deliveries!</h1>
      <p>Wanna know what's fast? Then don't hesitate to order.</p>
      <div ref="fast-deliveries-img" class="fast-deliveries-img"></div>
    </section>

    <section ref="sec3" class="hidden">
      <h1>Competition is Non-Existent</h1>
      <p>We're simply the best at what we do.</p>
      <div ref="non-existent-img" class="non-existent-img"></div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useEventListener } from '@vueuse/core';

definePageMeta({
  auth: false
})

function vhToPixel(vh: number) {
  return vh * document.documentElement.clientHeight
}

const slogan = ref('')

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
const section0 = useTemplateRef('sec0')
const section1 = useTemplateRef('sec1')
const section2 = useTemplateRef('sec2')
const section3 = useTemplateRef('sec3')
const sections = ref<(HTMLElement | null)[]>([])
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
  } else {
    home.value.style.background = 'var(--bg0)'
    home.value.style.color = 'var(--text)'
  }
}
function smoothScrollTo(e: WheelEvent) {
  e.stopPropagation()
  if (Date.now() - lastScroll < 500) return

  if (e.deltaY > 0) {
    if (currentSlide < sections.value.length - 1) currentSlide++
  } else if (e.deltaY < 0) {
    if (currentSlide > 0) currentSlide--
  } else {
    return
  }

  if (sections.value[currentSlide]) {
    scrollTo({ top: sections.value[currentSlide]!.getBoundingClientRect().top + window.pageYOffset - 16*3.2, behavior: 'smooth' })
  }

  lastScroll = Date.now()
}

onMounted( async () => {
  sections.value = [section0.value, section1.value, section2.value, section3.value]
  slogan.value = randomSlogan()
  fadeImage()
  useEventListener('scroll', themeByScroll)
  useEventListener('wheel', smoothScrollTo, { passive: false })

  if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      })
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    })

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));
  } else {
    console.warn('IntersectionObserver is not supported in this environment.');
  }
})
</script>

<style scoped lang="scss">

.home {
  height: fit-content;
  background: var(--bg0);
  transition: all 0.4s ease;
  color: var(--text);
  overflow: hidden;
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

.hidden {
  opacity: 0;
  filter: blur(20px);
  transform: translateX(-35rem);
  transition: all 2.3s;
}

.show {
  opacity: 1;
  filter: blur(0);
  transform: translateX(0);
}

.slogan-shop {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--text);
  min-width: 35em;
  gap: 1rem;
}

.slogan {
  font-size: 1.8em;
  font-size: clamp(1.5em, 4vh, 2.5em);
  max-width: 12em;
}

.shop-btn-wrapper {
  width: 16rem;
  height: 4rem;
  border-radius: 2rem;
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
  user-select: none;
  text-decoration: none;
  color: var(--text);

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
  width: clamp(20em, 45vw, 90vw);
  height: clamp(20em, 95vh, 90vh);
  background-image: url('../assets/img/page/IP16TW-4000.png');
  background-position: 50% 50%;
  background-size: contain;
  background-repeat: no-repeat;
  opacity: 0;
}

.best-prices-img {
  background-image: url('../assets/img/page/indexc.png');
  rotate: 5deg;
  mask-image: linear-gradient(
    to left,
    rgb(0 0 0 / 0.01),
    rgb(0 0 0 / 0.5),
    rgb(0 0 0 / 0.01)
  );
  mask-image: linear-gradient(
    rgb(0 0 0 / 0.01),
    rgb(0 0 0 / 1),
    rgb(0 0 0 / 0.25)
  );
  width: 97.5vh;
  height: 96vh;
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
  top: 0.3rem;
  left: -3.9rem;
  opacity: 60%;
}

.fast-deliveries-img {
  background-image: url('../assets/img/page/black-lightningc.png');
  rotate:  -45deg;
  width: 93vh;
  height: 93.2vh;
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
  left: 5.15rem;
  top: -7.38rem;
  opacity: 62%;
}

.non-existent-img {
  background-image: url('../assets/img/page/g404c.png');
  mask-image: linear-gradient(
    to left,
    rgb(0 0 0 / 0.06),
    rgb(0 0 0 / 1),
    rgb(0 0 0 / 0.06)
  );
  rotate: -3deg;
  width: 115vh;
  height: 115vh;
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
  left: -7rem;
  opacity: 40%;
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
    transform: translateY(-30%);
    order: 2;
  }
  .brand-new-img {
    order: 1;
  }

}
</style>