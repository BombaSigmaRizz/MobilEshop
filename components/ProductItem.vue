<template>
  <div class="product-wrapper" @click="router.push(`/product/${props.desc.id}`)">
    <div class="product-image">
      <img :src="`/api/uploads/${desc.showcaseImage}`" width="250" height="250" alt="image">
    </div>
    <div class="product-info">
      <span class="name">{{ props.desc.name }}</span>  
      <span class="desc">{{ props.desc.description }}</span>
      <span class="price">{{ props.desc.price }}</span>
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
  gap: 1rem;
  transition: scale 0.2s ease;
  box-sizing: border-box;
  border: 2px solid transparent;
  cursor: pointer;
  overflow: hidden;

  &:hover {
    border: 2px solid var(--border-highlight);
    scale: 1.03;
  }
}

.product-image {
  width: 100%;
  height: 17rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    // border-radius: 1rem 1rem 0 0;
  }
}

.product-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;

  name {
    font-size: 1.5rem;
    font-weight: 700;
    display: inline;
    width: 100%;
  }

  desc, .price {
    font-size: 1rem;
    font-weight: 400;
    display: inline;
    width: 100%;
  }
}
</style>