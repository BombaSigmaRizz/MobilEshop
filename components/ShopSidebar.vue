<template>
  <div class="shop-sidebar">
    <div class="search-wrapper">
      <input type="text" placeholder="Search" v-model="search" class="search-bar" />
      <Icon class="search-icon" name="oui:search" size="1.5rem"/>
    </div>
    <div v-show="isAdmin && auth.isLoggedIn" class="add-product-wrapper">
      <NuxtLink to="/add-product">Add Product</NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
const auth = useAuthStore()

const isAdmin = computed(() => auth.user?.isAdmin)

const search = defineModel('search', {
  type: String,
  default: ''
})
</script>

<style scoped lang="scss">
.shop-sidebar {
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 20em;
  height: calc(100vh - 3.2rem);
  color: var(--text);
  z-index: 100;
  border-right: 2px solid transparent;
  border-image: linear-gradient(45deg, var(--border-highlight), var(--contrast)) 1 100%;
}

.add-product-wrapper {
  width: 10em;
  height: 3em;

  a {
    text-decoration: none;
    color: var(--text);
  }
}

.search-wrapper {
  position: relative;
}

.search-icon {
  position: absolute;
  left: 1em;
  top: 1.1em;
}

.search-bar {
  height: 2.5em;
  border: none;
  outline: none;
  margin: 1em;
  border-radius: 2em;
  padding: 0.1em 0.2em 0.1em 3em;
  box-sizing: border-box;
  background-color: var(--bg1);
  color: var(--text);
  font-size: 1em;
  width: 8em;
  transition: width 0.3s;

  &:focus, &:not(:placeholder-shown) {
    width: 15em;
  }
}
</style>