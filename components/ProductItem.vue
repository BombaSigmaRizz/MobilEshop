<template>
  <div class="product-wrapper" @click="router.push(`/product/${desc.id}`)">
    <span class="price price-discount" v-if="desc.discountPrice > -1">-{{ Math.round((desc.price - desc.discountPrice) / desc.price * 100) }}%</span>
    <div class="product-image">
      <img :src="`/api/uploads/${desc.showcaseImage}`" width="250" height="250" alt="image">
    </div>
    <div class="product-info">
      <span class="name">{{ desc.name }}</span>  
      <span class="desc">{{ desc.description }}</span>
      <div class="prices">
        <span class="price" :class="{'crossed': desc.discountPrice > -1}">{{ desc.price }}€</span>
        <span class="price" v-if="desc.discountPrice > -1">{{ desc.discountPrice }}€</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IProduct } from '~/types/types';

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
  position: relative;

  &:hover {
    border: 2px solid var(--border-highlight);
    scale: 1.03;
  }
}

.product-image {
  width: 100%;
  aspect-ratio: 1;

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
  width: 100%;

  .name {
    margin-left: 0.6rem;
    text-align: left;
    font-size: 1.5rem;
    font-weight: 700;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    max-height: 2rem;
  }

  .desc {
    width: 100%;
    margin-left: 0.6rem;
    overflow: hidden;
    text-overflow: ellipsis;
    max-height: 3.5rem;
  }

  .desc {
    text-align: left;
    font-size: 1rem;
    font-weight: 400;
    width: 100%;
  }

  .price {
    text-align: center;
    font-size: 1rem;
    font-weight: 400;
  }
}

.price-discount {
  display: inline;
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  color: rgb(255, 72, 72);
  font-size: 1.1rem;
}

.prices {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.crossed {
  text-decoration: line-through;
}
</style>