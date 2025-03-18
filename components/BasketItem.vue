<template>
  <div class="basket-item-container">
    <img :src="`/api/uploads/${product.showcaseImage}`" width="600" height="600" alt="img" />
    <span class="info">{{ product.name }} - {{ product.price }}€</span>
    <button class="remove-item" @click="removeItem">❌</button>
  </div>
</template>

<script lang="ts" setup>
import type { IProduct } from '~/types/types';
const api = useApi()

async function removeItem() {
  try {
    const response = await api.post(`/basket/${props.product.id}`)
    emit('remove')
  }
  catch (error) {
    console.error(error)
  }
}

const props = defineProps<{
  product: IProduct
}>()

const emit = defineEmits(['remove'])
</script>

<style scoped lang="scss">
.basket-item-container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background: var(--bg1);
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  color: var(--text);
  width: min(80rem, 90%);
  position: relative;
}

.info {
  font-size: 1.5rem;
  font-weight: 700;
  margin-right: 1rem;
}

img {
  object-fit: contain;
  width: 100px;
  height: 100px;
  margin-right: 1rem;
}

.remove-item {
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 1.5rem;
  position: absolute;
  top: 0;
  right: 0;
}
</style>