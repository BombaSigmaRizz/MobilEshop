<template>
  <div class="product-wrapper">
    <div class="product-image">
      <img :src="props.desc.image" alt="product.name">
    </div>
    <div class="product-info">
      <h3>{{ props.desc.name }}</h3>
      <p>{{ props.desc.description }}</p>
      <p>{{ props.desc.price }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  desc: IProduct
}>()

import type { IProduct } from '~/types/types';
</script>

<style scoped lang="scss">
.product-wrapper {
  background-color: var(--bg1);
  color: var(--light1);
  border-radius: 1rem;
}
</style>