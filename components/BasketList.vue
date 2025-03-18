<template>
  <div class="basket-list-container">
    <BasketItem @remove="updateList" :product="product" v-for="product in basketProducts" :key="product.id"/>
  </div>
</template>

<script lang="ts" setup>
import type { IProduct } from '~/types/types';

const api = useApi()

const basket = ref<number[]>([])
const basketProducts = ref<IProduct[]>([])

async function updateList() {
  try {
    basket.value = await api.get<number[]>('/basket')

    const productPromises = basket.value.map(async (productId) => {
      return await api.get<IProduct>(`/products/${productId}`)
    })

    basketProducts.value = await Promise.all(productPromises)
  } catch (error) {
    console.error(error)
  }
}

onBeforeMount(async () => {
  try {
    basket.value = await api.get<number[]>('/basket')

    const productPromises = basket.value.map(async (productId) => {
      return await api.get<IProduct>(`/products/${productId}`)
    })

    basketProducts.value = await Promise.all(productPromises)
  } catch (error) {
    console.error(error)
  }
})
</script>

<style scoped lang="scss">
.basket-list-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
  grid-auto-rows: clamp(8vh, 8rem, 80vh);
  gap: 1.5rem;
  padding: 2rem; 
  background: var(--bg0);
  height: 100%;
  box-sizing: border-box;
  overflow: auto;
}
</style>