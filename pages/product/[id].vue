<template>
  <div class="product-page">
    <div class="product-info">
      <div class="product-image-wrapper">
        <img v-if="product" :src="`/api/uploads/${product.catalogImages[currentImage]}`" alt="image" />
        <button class="button-back" @click="currentImage === 0 ? currentImage = product?.catalogImages.length! - 1 : currentImage--"><</button>
        <button class="button-forward" @click="currentImage === product?.catalogImages.length! - 1 ? currentImage = 0 : currentImage++">></button>
      </div>
      <h1 class="name">{{ product?.name }}</h1>
      <p class="desc">{{ product?.description }}</p>
      <p class="color">{{ product?.color }}</p>
      <button class="add-to-basket" @click="addToBasket">Add to basket</button>
    </div>
    <div class="reviews">
      <h1>Reviews</h1>
      <ReviewList v-if="product" :productId="product.id" />
      <div class="add-review">
        <form @submit.prevent="addReview">
          <input type="text" v-model="name" placeholder="Name" required />
          <input type="text" v-model="content" placeholder="Content" required />
          <input type="number" v-model="rating" placeholder="Rating" required />
          <button type="submit">Add review</button>
        </form>
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

const name = ref('')
const content = ref('')
const rating = ref(0)

async function addReview() {
  if (!name || !content || !rating) return

  try {
    const response = await api.post<IReview>(`/products/${route.params.id}/reviews`, {
      name: name.value,
      productId: route.params.id,
      content: content.value,
      rating: rating.value
    })

    reviews.value = await api.get<IReview[]>(`/products/${route.params.id}/reviews`)
  }
  catch (error) {
    console.error(error)
  }
}

function addToBasket() {
  console.log('Added to basket')
  try {
    api.post(`/basket`, {
      productId: product.value?.id
    })
  } catch (error) {
    console.error(error)
  }
}

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
  width: min(80rem, 90%);
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
  margin-top: 2rem;
  width: 100%;
}

.reviews h1 {
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
}

.avg-rating {
  font-size: 1.3rem;
  font-weight: 700;
}

.add-review {
  margin-top: 2rem;
}
</style>