<template>
  <div class="topbar">
    <div class="left">
      <img draggable="false" src="../assets/img/page/logosigma.png" width="500" height="375" class="logo"></img>
    </div>
    <div class="middle">
      <NuxtLink @click="data.filterDiscounted = false" class="link" :class="{'active': isActive('index')}" to="/"><span>Home</span></NuxtLink>
      <NuxtLink class="link link-shop" :class="{'active': isActive('shop')}" to="/shop">
        <span @click="data.filterDiscounted = false" @mouseenter="showShopDropdown()" @mouseleave="hideShopDropdown()">Shop</span>
        <div @click="data.filterDiscounted = true" @mouseenter="showShopDropdown()" @mouseleave="hideShopDropdown()" ref="shop-dropdown" class="shop-dropdown">Discounts</div>
      </NuxtLink>
    </div>
    <div class="right">
      <NuxtLink class="link" :class="{'active': isActive('contact')}" to="/contact"><span @click="data.filterDiscounted = false">Contact</span></NuxtLink>
      <NuxtLink class="link" :class="{'active': isActive('account')}" to="/account"><span @click="data.filterDiscounted = false">Account</span></NuxtLink>
      <NuxtLink class="link" :class="{'active': isActive('basket')}" to="/basket"><Icon @click="data.filterDiscounted = false" name="ph:basket" size="2.5rem"/></NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const data = useDataStore()
const shopDropdown = useTemplateRef('shop-dropdown')
const isHoveringShop = ref(false)

function isActive(routeName: string) {
  return routeName === route.name ? true : false
}

function showShopDropdown() {
  isHoveringShop.value = true
  if (shopDropdown.value) {
    shopDropdown.value.style.display = 'flex'
  }
}

async function hideShopDropdown() {
  isHoveringShop.value = false
  if (shopDropdown.value) {
    await new Promise(resolve => setTimeout(resolve, 200))
    if (isHoveringShop.value) return
    shopDropdown.value.style.display = 'none'
  }
}
</script>

<style scoped lang="scss">
.topbar {
  display: flex;
  position: fixed;
  justify-content: space-between;
  top: 0;
  left: 0;
  background-color: var(--bg0);
  color: var(--text);
  width: 100vw;
  height: 3.2rem;
  box-sizing: border-box;
  padding: 0 2rem 0 0;
  border-bottom: 2px solid transparent;
  border-image: linear-gradient(-45deg, var(--border-highlight), var(--contrast)) 1;
  border-image-slice: 1;
  border-image-width: 1;
  border-image-repeat: stretch;
  align-items: center;
  z-index: 1000;
    
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1 1 0px;
  }

  .left {
    height: 100%;
    justify-content: flex-start;
    overflow: hidden;
  }

  .middle {
    gap: 1rem;
  }

  .right {
    justify-content: flex-end;
    gap: 1rem;
  }
}

.logo {
  width: 18em;
  height: 100%;
  object-fit: cover;
}


.link {
  text-decoration: none;
  transition: 0.2s;
  color: var(--text);
}

.link-shop {
  position: relative;
}

.link-shop span {
  width: 100%;
  height: 100%;
}

.link-shop .shop-dropdown {
  display: none;
  position: absolute;
  top: 1.5rem;
  left: -0.8rem;
  width: 300%;
  height: 200%;
  // translate: -50% 0;
  background-color: var(--bg1);
  border-radius: 1rem;
  align-items: center;
  justify-content: center;
}

// .link-shop:hover .shop-dropdown {
//   display: flex;
// }

.link-shop .shop-dropdown:hover {
  display: flex;
}

.active {
  border-bottom: 2px solid white;
  transition: 0.2s;
}

@media (max-width: 768px) {
  .topbar {
    font-size: 0.9rem;
  }
  
}
</style>