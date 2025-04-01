<template>
  <div class="product-list-container">
    <ProductItem :desc="product" v-for="product in filteredProductList" :key="product.id"/>
  </div>
</template>

<script setup lang="ts">
import { type IProduct, EBrandTags, EColorTags, EStorageTags } from '~/types/types';

const api = useApi()

const data = useDataStore()

const filteredProductList = computed(() => data.filteredProductList)

const props = defineProps<{
  productList: IProduct[]
}>()
</script>

<style scoped lang="scss">
.product-list-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(11rem, 1fr));
  grid-auto-rows: clamp(20vh, 21rem, 80vh);
  gap: 1.5rem;
  padding: 2rem; 
  background: var(--bg0);
  height: 100%;
  box-sizing: border-box;
  overflow: auto;
}
</style>