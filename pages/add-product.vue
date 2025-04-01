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
      <div class="input-wrapper">
        <input type="number" v-model="form.discountPrice" class="input-field">
        <span>Product Discounted Price</span>
      </div>
      <span class="tags-span">Tags:</span>
      <div class="input-wrapper">
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
      </div>

      <span>Showcase Image</span>
      <div class="input-wrapper">
        <input type="file" @change="showcaseUpload" accept="image/png, image/jpg" class="input-field" required>
      </div>

      <span>Catalog Images</span>
      <div class="input-wrapper">
        <input type="file" @change="catalogUpload" accept="image/png, image/jpg" class="input-field" required multiple>
      </div>

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
  discountPrice: -1,
  brand: EBrandTags.Iphone,
  storage: EStorageTags.GB128,
  color: EColorTags.Black,
})

const showcaseFile = ref<File | null>(null)
const catalogFiles = ref<FileList | null>(null)

function showcaseUpload(event: Event) {
  const target = event.target as HTMLInputElement
  const file = target.files?.[0]
  if (file) {
    showcaseFile.value = file
  }
}

function catalogUpload(event: Event) {
  const target = event.target as HTMLInputElement
  const files = target.files
  if (files) {
    catalogFiles.value = files
  }
}


async function addProduct() {
  const data = new FormData()
  data.append('name', form.value.name)
  data.append('description', form.value.description)
  data.append('price', form.value.price.toString())
  data.append('discountPrice', form.value.discountPrice.toString())
  data.append('brand', form.value.brand)
  data.append('storage', form.value.storage)
  data.append('color', form.value.color)
  data.append('showcaseImage', showcaseFile.value!)
  if (catalogFiles.value) {
    for (let i = 0; i < catalogFiles.value.length; i++) {
      data.append('catalogImages', catalogFiles.value![i])
    }
  }

  const response = await api.post('/products', data, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
  console.log(response)

  form.value.name = ''
  form.value.description = ''
  form.value.price = 0
  form.value.discountPrice = -1
  form.value.brand = EBrandTags.Iphone
  form.value.storage = EStorageTags.GB128
  form.value.color = EColorTags.Black
  showcaseFile.value = null
  catalogFiles.value = null
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
  margin-top: 0.5rem;
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