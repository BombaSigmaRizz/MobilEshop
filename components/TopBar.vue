<template>
  <div class="topbar">
    <div class="left">
      <div class="logo">img</div>
    </div>
    <div class="middle">
      <NuxtLink class="link" :class="{'active': isActive('index')}" to="/">Home</NuxtLink>
      <NuxtLink class="link" :class="{'active': isActive('shop')}" to="/shop">Shop</NuxtLink>
    </div>
    <div class="right">
      <NuxtLink class="link" :class="{'active': isActive('contact')}" to="/contact">Contact</NuxtLink>
      <NuxtLink class="link" :class="{'active': isActive('account')}" to="/account">Account</NuxtLink>
      <NuxtLink class="link" :class="{'active': isActive('basket')}" to="/basket"><Icon name="ph:basket" size="2.5rem"/></NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

function isActive(routeName: string) {
  console.log(routeName, route.name)
  return routeName === route.name ? true : false
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
  color: var(--light1);
  width: 100%;
  height: 3.2rem;
  box-sizing: border-box;
  padding: 0 1rem;
  outline: 2px solid #0a21c0;
  align-items: center;
  z-index: 1000;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .left {
    display: flex
  }
  .middle {
    display: flex;
    gap: 1rem;
  }
  .right {
    // margin-left: auto;
    display: flex;
    gap: 1rem;
  }
}

.link {
  text-decoration: none;
  transition: 0.2s;
  color: var(--light1);
}

.active {
  border-bottom: 2px solid white;
  transition: 0.2s;
}
</style>