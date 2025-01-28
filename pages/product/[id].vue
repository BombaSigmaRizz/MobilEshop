<template>
  <div class="product-page">

  </div>
</template>

<script setup lang="ts">
import { api } from '~/services/api';
import { type IProduct } from '~/types/types';
const route = useRoute()

onBeforeMount(async () => {
  const response = await api.get<IProduct>(`/api/product/${route.params.id}`)
  console.log(response)
})
</script>

<style scoped lang="scss">

</style>