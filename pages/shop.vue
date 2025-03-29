<template>
  <div class="shop-container">
    <ShopSidebar />
    <ProductList :product-list="data.productList" />
  </div>
</template>

<script setup lang="ts">
const data = useDataStore()

const search = defineModel('search', {
  type: String,
  default: ''
})

definePageMeta({
  auth: false
})

onMounted(async () => {
  await data.load()
})
</script>

<style scoped lang="scss">
.shop-container {
  height: 100%;
  padding-left: 16rem;
}
</style>