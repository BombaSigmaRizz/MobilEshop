<template>
  <div class="product-wrapper" @click="router.push(`/product/${props.desc.id}`)">
    <div class="product-image">
      <img :src="`/api/uploads/${desc.showcaseImage}`" alt="image">
    </div>
    <div class="product-info">
      <h2>{{ props.desc.name }}</h2>  
      <p>{{ props.desc.description }}</p>
      <p>{{ props.desc.price }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IProduct } from '~/types/types';

const api = useApi()

const router = useRouter()

const props = defineProps<{
  desc: IProduct
}>()
</script>

<style scoped lang="scss">
.product-wrapper {
  display: flex;
  align-items: center;
  flex-direction: column;
  color: var(--text);
  border-radius: 1rem;
  // overflow: hidden;
  padding: 1rem;
  gap: 1rem;
  transition: scale 0.4s ease;
  box-sizing: border-box;

  &:hover {
    border: 2px solid var(--border-highlight);
    scale: 1.05;
  }
}

.product-image {
  width: 100%;
  height: 17rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    // border-radius: 1rem 1rem 0 0;
  }
}

.product-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;

  h2 {
    font-size: 1.5rem;
    font-weight: 700;
  }

  p {
    font-size: 1rem;
    font-weight: 400;
  }
}
</style>