<template>
  <div class="product-page">
    <div class="product-content">
      <div class="product-image-wrapper">
        <img :src="`/api/uploads/${product?.catalogImages[currentImage]}`" alt="image" />
        <button class="button-back" @click="currentImage === 0 ? currentImage = product?.catalogImages.length! - 1 : currentImage--"><</button>
        <button class="button-forward" @click="currentImage === product?.catalogImages.length! - 1 ? currentImage = 0 : currentImage++">></button>
      </div>
      <h1 class="name">{{ product?.name }}</h1>
      <p>{{ product?.description }}</p>
      {{ product?.color }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { type IProduct } from '~/types/types';
const route = useRoute()
const api = useApi()

const product = ref<IProduct | undefined>(undefined)

const currentImage = ref<number>(0)

onBeforeMount(async () => {
  try {
    product.value = await api.get<IProduct>(`/products/${route.params.id}`)
    console.log(product.value.catalogImages)
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
  height: 100%;
  color: var(--text);
  display: flex;
  justify-content: center;
}

.product-content {
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
</style>