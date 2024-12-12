<template>
  <div class="product-list-container">
    <ProductItem :desc="product" v-for="product in productList" :key="product.id"/>
  </div>
</template>

<script setup lang="ts">
import type { IProduct } from '~/types/types';

const productList = ref<IProduct[]>([])

productList.value.push({
  id: 0,
  name: 'Product 1',
  description: 'Desc',
  price: 6969,
  rating: 4,
  image: 'https://via.placeholder.com/150'
}, {
  id: 0,
  name: 'Product 1',
  description: 'Desc',
  price: 6969,
  rating: 4,
  image: 'https://via.placeholder.com/150'
}, {
  id: 0,
  name: 'Product 1',
  description: 'Desc',
  price: 6969,
  rating: 4,
  image: 'https://via.placeholder.com/150'
}, {
  id: 0,
  name: 'Product 1',
  description: 'Desc',
  price: 6969,
  rating: 4,
  image: 'https://via.placeholder.com/150'
}, {
  id: 0,
  name: 'Product 1',
  description: 'Desc',
  price: 6969,
  rating: 4,
  image: 'https://via.placeholder.com/150'
}, {
  id: 0,
  name: 'Product 1',
  description: 'Desc',
  price: 6969,
  rating: 4,
  image: 'https://via.placeholder.com/150'
}, {
  id: 0,
  name: 'Product 1',
  description: 'Desc',
  price: 6969,
  rating: 4,
  image: 'https://via.placeholder.com/150'
}, {
  id: 0,
  name: 'Product 1',
  description: 'Desc',
  price: 6969,
  rating: 4,
  image: 'https://via.placeholder.com/150'
}, {
  id: 0,
  name: 'Product 1',
  description: 'Desc',
  price: 6969,
  rating: 4,
  image: 'https://via.placeholder.com/150'
}, {
  id: 0,
  name: 'Product 1',
  description: 'Desc',
  price: 6969,
  rating: 4,
  image: 'https://via.placeholder.com/150'
}, {
  id: 0,
  name: 'Product 1',
  description: 'Desc',
  price: 6969,
  rating: 4,
  image: 'https://via.placeholder.com/150'
}, {
  id: 0,
  name: 'Product 1',
  description: 'Desc',
  price: 6969,
  rating: 4,
  image: 'https://via.placeholder.com/150'
}, {
  id: 0,
  name: 'Product 1',
  description: 'Desc',
  price: 6969,
  rating: 4,
  image: 'https://via.placeholder.com/150'
})

onMounted(() => {
  console.log('ProductList mounted')
})
</script>

<style scoped lang="scss">
.product-list-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
  grid-auto-rows: 25rem;
  gap: 1.5rem;
  padding: 2rem;
  background: var(--bg0);
  height: 100%;
  box-sizing: border-box;
  overflow: auto;
}
</style>