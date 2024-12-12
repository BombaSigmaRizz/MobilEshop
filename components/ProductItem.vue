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
  display: flex;
  align-items: center;
  // justify-content: center;
  flex-direction: column;
  background-color: var(--bg1);
  color: var(--light1);
  border-radius: 1rem;
  overflow: hidden;
}

.product-image {
  width: 100%;
  height: 20rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    // border-radius: 1rem 1rem 0 0;
  }
}
</style>