<template>
  <div class="product-page">
    <div class="product-info">
      <div class="product-image-wrapper">
        <img v-if="product" :src="`/api/uploads/${product.catalogImages[currentImage]}`" alt="image" />
        <button class="button-back" @click="currentImage === 0 ? currentImage = product?.catalogImages.length! - 1 : currentImage--"><</button>
        <button class="button-forward" @click="currentImage === product?.catalogImages.length! - 1 ? currentImage = 0 : currentImage++">></button>
      </div>
      <h1 class="name">{{ product?.name }}</h1>
      <p>{{ product?.description }}</p>
      <p>{{ product?.color }}</p>
    </div>
    <div class="reviews">
      <h2>Reviews</h2>
      <p v-if="!reviews">There are no reviews yet</p>
      <div class="review" v-for="review in reviews" :key="review.id">
        <p>{{ review.name }}</p>
        <p>{{ review.content }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type IProduct, type IReview } from '~/types/types';
const route = useRoute()
const api = useApi()

const product = ref<IProduct | undefined>(undefined)
const reviews = ref<IReview[]>([])

const currentImage = ref<number>(0)

onBeforeMount(async () => {
  try {
    product.value = await api.get<IProduct>(`/products/${route.params.id}`)
    reviews.value = await api.get<IReview[]>(`/products/${route.params.id}/reviews`)
  } catch (error) {
    console.error(error)
  }
})

definePageMeta({
  auth: false
})
</script>

<style scoped lang="scss">
.product-page {
  color: var(--text);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow-y: auto;
}

.product-info {
  width: min(60rem, 90%);
  background-color: var(--bg1);
}

.product-image-wrapper {
  position: relative;
  width: 100%;
  height: 40rem;
  display: flex;
  // background-color: var(--bg1);
  justify-content: center;
  align-items: center;

}

.product-image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.product-image-wrapper .button-back {
  position: absolute;
  top: 50%;
  left: 0;
  background-color: var(--bg1);
  color: var(--text);
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  font-size: 1.5rem;
  z-index: 100;
}

.product-image-wrapper .button-forward {
  position: absolute;
  top: 50%;
  right: 0;
  background-color: var(--bg1);
  color: var(--text);
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  font-size: 1.5rem;
  z-index: 100;
}

.reviews {
  text-align: center;
}

.review {
  min-height: 3rem;
  color: var(--text);
}
</style>