<template>
  <div class="basket-page">
    <BasketList />
  </div>
</template>

<script lang="ts" setup>
import type { IProduct } from '~/types/types'

const api = useApi()

const basket = ref<number[]>([])
const basketProducts = ref<IProduct[]>([])  

onBeforeMount(async () => {
  try {
    basket.value = await api.get<number[]>('/basket')

    const productPromises = basket.value.map(async (productId) => {
      console.log('ids: ', productId)
      return await api.get<IProduct>(`/products/${productId}`)
    })

    basketProducts.value = await Promise.all(productPromises)
    console.log('prods: ', basketProducts.value)
  } catch (error) {
    console.error(error)
  }
})
</script>

<style scoped lang="scss">

</style>