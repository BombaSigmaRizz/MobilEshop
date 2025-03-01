<template>
  <div class="product-list-container">
    <ProductItem :desc="product" v-for="product in filteredProductList" :key="product.id"/>
  </div>
</template>

<script setup lang="ts">
import { type IProduct, EBrandTags, EColorTags, EStorageTags } from '~/types/types';

const api = useApi()

const search = defineModel('search', {
  type: String,
  default: ''
})


const productList = ref<IProduct[]>([])

const filteredProductList = computed(() => {
  return productList.value.filter(product => product.name.toLocaleLowerCase().includes(search.value.toLocaleLowerCase()))
})

onBeforeMount(async () => {
  const response = await api.get<IProduct[]>('/products')
  console.log(response)
  productList.value = response
})
</script>

<style scoped lang="scss">
.product-list-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
  grid-auto-rows: 20rem;
  gap: 1.5rem;
  padding: 2rem; 
  background: var(--bg0);
  height: 100%;
  box-sizing: border-box;
  overflow: auto;
}
</style>