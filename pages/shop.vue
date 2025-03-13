<template>
  <div class="shop-container">
    <ShopSidebar v-model:search="search" />
    <ProductList v-model:search="search" />
  </div>
</template>

<script setup lang="ts">

const search = defineModel('search', {
  type: String,
  default: ''
})

definePageMeta({
  auth: false
})
</script>

<style scoped lang="scss">
.shop-container {
  height: 100%;
  padding-left: 16rem;
}
</style>