<template>
  <div class="product-page">
    <TempPopup v-if="addedToBasketPopup">Added to basket!</TempPopup>
    <div class="product-info">
      <div class="product-image-wrapper">
        <img v-if="product" :src="`/api/uploads/${product.catalogImages[currentImage]}`" alt="image" />
        <button class="button-back" @click="currentImage === 0 ? currentImage = product?.catalogImages.length! - 1 : currentImage--"><</button>
        <button class="button-forward" @click="currentImage === product?.catalogImages.length! - 1 ? currentImage = 0 : currentImage++">></button>
      </div>
      <h1 class="name">{{ product?.name }}</h1>
      <p class="desc">{{ product?.description }}</p>
      <p class="color">{{ product?.color }}</p>
      <button class="add-to-basket" @click="addToBasket"><span>Add to basket</span></button>
    </div>
    <div class="reviews">
      <h1>Reviews</h1>
      <ReviewList v-if="product" :productId="product.id" />
      <div class="add-review">
        <form @submit.prevent="addReview">
          <div>
            <span class="rating-span">Rating: </span>
            <input type="number" v-model="rating" placeholder="Rating" required min="0" max="5" />
          </div>
          <input type="text" v-model="name" placeholder="Name" required />
          <input class="rating-content" type="text" v-model="content" placeholder="Content" required />
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
const addedToBasketPopup = ref(false)

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

async function addToBasket() {
  try {
    api.post(`/basket`, {
      productId: product.value?.id
    })
    addedToBasketPopup.value = true
    await new Promise(resolve => setTimeout(resolve, 2000))
    addedToBasketPopup.value = false
  } catch (error) {
    console.error(error)
  }
}

onMounted(async () => {
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
  position: relative;
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

.add-to-basket {
  margin-bottom: 2rem;
  text-align: center;
  width: 10rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 1.5rem;
  bottom: 1.5rem;
  border-radius: 2rem;
  overflow: hidden;
  background-color: transparent;
  border: none;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(45deg, var(--border-highlight), var(--contrast));
    width: 100%;
    height: 100%;
    clip-path: circle(0%);
    transition: clip-path 0.3s;
    z-index: 0;
  }

  &:hover::before {
    clip-path: circle(100%);
  }

  span {
    text-decoration: none;
    color: var(--text);
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
  }
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

.add-review form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 35%;
  translate: 90%;
}

.add-review input {
  height: 2rem;
  border: none;
  outline: none;
  border-radius: 2rem;
  padding: 0.5rem;
  background-color: var(--bg1);
  color: var(--text);
}

.add-review .rating-span {
  width: 7rem;
  display: inline-block;
  font-size: 1.2rem;
  font-weight: 700;
}

.add-review .rating-content {
  height: 4rem;
  border-radius: 1rem;
  padding: 0 0.5rem 0 0.5rem;
}

.add-review input[type="number"] {
  width: 5rem;
}

.add-review button {
  height: 3rem;
  border: none;
  outline: none;
  border-radius: 2rem;
  padding: 0.5rem;
  background-color: var(--bg1);
  color: var(--text);
  cursor: pointer;
}
</style>