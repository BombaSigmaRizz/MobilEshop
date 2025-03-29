<template>
  <div class="shop-sidebar">
    <div class="search-wrapper">
      <input v-model="data.filterSearchTerm" type="text" placeholder="Search" class="search-bar" />
      <Icon class="search-icon" name="oui:search" size="1.5rem"/>
    </div>
    <div v-show="isAdmin && auth.isLoggedIn" class="add-product-wrapper">
      <NuxtLink to="/add-product">Add Product</NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
const auth = useAuthStore()
const data = useDataStore()

const isAdmin = computed(() => auth.user?.isAdmin)

</script>

<style scoped lang="scss">
.shop-sidebar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 16rem;
  height: calc(100vh - 3.2rem);
  color: var(--text);
  z-index: 100;
  border-right: 2px solid transparent;
  border-image: linear-gradient(45deg, var(--border-highlight), var(--contrast)) 1 100%;
}

.add-product-wrapper {
  margin-bottom: 2rem;
  text-align: center;
  width: 10rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 2rem;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(45deg, var(--border-highlight), var(--contrast));
    width: 100%;
    height: 100%;
    clip-path: circle(0%);
    transition: clip-path 0.3s;
    z-index: -1;
  }

  &:hover::before {
    clip-path: circle(100%);
  }

  a {
    text-decoration: none;
    color: var(--text);
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.search-wrapper {
  position: relative;
}

.search-icon {
  position: absolute;
  left: 1.5rem;
  top: 1.55rem;
}

.search-bar {
  height: 2.5rem;
  border: none;
  outline: none;
  margin: 1rem;
  border-radius: 2rem;
  padding: 0.1rem 0.2rem 0.1rem 3rem;
  box-sizing: border-box;
  background-color: var(--bg1);
  color: var(--text);
  font-size: 1rem;
  width: 8rem;
  transition: width 0.3s;

  &:focus, &:not(:placeholder-shown) {
    width: 15rem;
  }
}
</style>