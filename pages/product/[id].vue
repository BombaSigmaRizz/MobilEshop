<template>
  <div class="product-page">
    {{ product?.name }}
    {{ product?.description }}
  </div>
</template>

<script setup lang="ts">
import { type IProduct } from '~/types/types';
const route = useRoute()
const api = useApi()

const product = ref<IProduct | undefined>(undefined)

onBeforeMount(async () => {
  try {
    product.value = await api.get<IProduct>(`/api/product/${route.params.id}`)
  } catch (error) {
    console.error(error)
  }
})
</script>

<style scoped lang="scss">
.product-page {
  padding: 1em;
  height: 100%;
  color: var(--text);
}
</style>