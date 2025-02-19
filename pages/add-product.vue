<template>
  <div class="add-product-page">
    <form @submit.prevent="addProduct">
      <div class="input-wrapper">
        <input type="text" v-model="form.name" class="input-field">
        <span>Product Name</span>
      </div>
      <div class="input-wrapper">
        <input type="text" v-model="form.description" class="input-field">
        <span>Product Description</span>
      </div>
      <div class="input-wrapper">
        <input type="number" v-model="form.price" class="input-field">
        <span>Product Price</span>
      </div>
      <select class="brand-select" v-model="form.brand">
        <option :value="EBrandTags.Iphone">{{ EBrandTags.Iphone }}</option>
        <option :value="EBrandTags.Huawei">{{ EBrandTags.Huawei }}</option>
        <option :value="EBrandTags.Samsung">{{ EBrandTags.Samsung }}</option>
        <option :value="EBrandTags.Xiaomi">{{ EBrandTags.Xiaomi }}</option>
      </select>
      <select class="storage-select" v-model="form.storage">
        <option :value="EStorageTags.GB128">{{ EStorageTags.GB128 }}</option>
        <option :value="EStorageTags.GB256">{{ EStorageTags.GB256 }}</option>
        <option :value="EStorageTags.GB512">{{ EStorageTags.GB512 }}</option>
        <option :value="EStorageTags.TB1">{{ EStorageTags.TB1 }}</option>
      </select>
      <select class="color-select" v-model="form.color">
        <option :value="EColorTags.Black">{{ EColorTags.Black }}</option>
        <option :value="EColorTags.Blue">{{ EColorTags.Blue }}</option>
        <option :value="EColorTags.Brown">{{ EColorTags.Brown }}</option>
        <option :value="EColorTags.Cyan">{{ EColorTags.Cyan }}</option>
        <option :value="EColorTags.Gray">{{ EColorTags.Gray }}</option>
        <option :value="EColorTags.Green">{{ EColorTags.Green }}</option>
        <option :value="EColorTags.Orange">{{ EColorTags.Orange }}</option>
        <option :value="EColorTags.Pink">{{ EColorTags.Pink }}</option>
        <option :value="EColorTags.Purple">{{ EColorTags.Purple }}</option>
        <option :value="EColorTags.Red">{{ EColorTags.Red }}</option>
        <option :value="EColorTags.White">{{ EColorTags.White }}</option>
        <option :value="EColorTags.Yellow">{{ EColorTags.Yellow }}</option>
      </select>
      <div class="add-product-btn-wrapper" @click="addProduct()" @mouseenter="scrambleWordEffect(addProductBtn!)">
          <NuxtLink class="add-product-btn">
            <span data-value="Add Product" ref="add-product-btn-text">Add Product</span>
          </NuxtLink>
        </div>
    </form>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  auth: true
})

import { EBrandTags, EStorageTags, EColorTags } from '~/types/types';
const api = useApi()

const addProductBtn = useTemplateRef('add-product-btn-text')

const form = ref({
  name: '',
  description: '',
  price: 0,
  brand: EBrandTags.Iphone,
  storage: EStorageTags.GB128,
  color: EColorTags.Black
})


async function addProduct() {
  const response = await api.post('/product', form.value)
}
</script>

<style scoped lang="scss">
.add-product-page {
  height: 100%;
  padding: 2em;
  color: var(--text);
}

.input-wrapper {
  width: 90%;
  position: relative;
  margin-bottom: 2em;
}

input {
    width: 100%;
    outline: none;
    border: none;
    height: 2rem;
    color: var(--text);
    background-color: transparent;
    border-bottom: 2px solid var(--border-light);
    transition: all 0.3s;
}

.input-wrapper input:focus ~ span,
.input-wrapper input:valid ~ span {
  color: var(--border-light);
  font-size: 0.7em;
  transform: translateY(-20px);
}

.input-wrapper span {
  position: absolute;
  left: 0;
  font-size: 1em;
  color: var(--text);
  transition: all 0.3s;
  pointer-events: none;
}

.tags-dropdown {
  width: 90%;
  display: inline-block;
  position: relative;
  margin-bottom: 2em;
  cursor: pointer;
}

.add-product-btn-wrapper {
  width: 16rem;
  height: 4rem;
  border-radius: 2rem;
  justify-self: center;
}

.add-product-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 0.5rem 1rem;
  width: 100%;
  height: 100%;
  outline: 2px solid var(--border-highlight);
  border-radius: 2rem;
  background: radial-gradient(circle, var(--border-light) 50%, transparent 100%);
  background-size: 0 0;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  font-size: 1.5em;
  border: none;
  cursor: pointer;
  transition: all 0.4s ease;
  gap: 1rem;

  &:hover {
    // background: var(--border);
    box-shadow: 0px 0px 20px 2px var(--border-highlight);
    background-size: 200% 200%;
    outline: 1px solid rgba(255, 255, 255, 0);
  }
}
</style>