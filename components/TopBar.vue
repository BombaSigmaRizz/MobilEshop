<template>
  <div class="topbar">
    <div class="left">
      <img draggable="false" src="../assets/img/page/logosigma.png" width="500" height="375" class="logo"></img>
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
  color: var(--text);
  width: 100vw;
  height: 3.2rem;
  box-sizing: border-box;
  padding: 0 2rem 0 0;
  outline: 2px solid #0a21c0;
  align-items: center;
  z-index: 1000;
    
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1 1 0px;
  }

  .left {
    justify-content: flex-start;
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
}


.link {
  text-decoration: none;
  transition: 0.2s;
  color: var(--text);
}

.active {
  border-bottom: 2px solid white;
  transition: 0.2s;
}
</style>