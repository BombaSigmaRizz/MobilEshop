<template>
  <div class="shop-sidebar">
    <div class="filtering">
      <div class="search-wrapper">
        <input v-model="data.filterSearchTerm" type="text" placeholder="Search" class="search-bar" />
        <Icon class="search-icon" name="oui:search" size="1.5rem"/>
      </div>
      <div class="search-tags">
        <span>Brand:</span>
        <select class="search-tag-brand" v-model="data.filterBrand">
          <option value="">All</option>
          <option :value="EBrandTags.Iphone">{{ EBrandTags.Iphone }}</option>
          <option :value="EBrandTags.Huawei">{{ EBrandTags.Huawei }}</option>
          <option :value="EBrandTags.Samsung">{{ EBrandTags.Samsung }}</option>
          <option :value="EBrandTags.Xiaomi">{{ EBrandTags.Xiaomi }}</option>
        </select>
        <span>Color:</span>
        <select class="search-tag-color" v-model="data.filterColor">
          <option value="">All</option>
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
        <span>Storage space:</span>
        <select class="search-tag-storage" v-model="data.filterStorage">
          <option value="">All</option>
          <option :value="EStorageTags.GB128">{{ EStorageTags.GB128 }}</option>
          <option :value="EStorageTags.GB256">{{ EStorageTags.GB256 }}</option>
          <option :value="EStorageTags.GB512">{{ EStorageTags.GB512 }}</option>
          <option :value="EStorageTags.TB1">{{ EStorageTags.TB1 }}</option>
        </select>
      </div>
    </div>
    <div v-show="isAdmin && auth.isLoggedIn" class="add-product-wrapper">
      <NuxtLink to="/add-product">Add Product</NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { EBrandTags, EColorTags, EStorageTags } from '~/types/types'
const auth = useAuthStore()
const data = useDataStore()

const isAdmin = computed(() => auth.user?.isAdmin)

</script>

<style scoped lang="scss">
.search-tags {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 1rem 0;
  margin-top: 3rem;
  align-self: flex-start;
}

select {
  text-align: left;
  appearance: none;
  background-color: var(--bg1);
  color: var(--text);
  padding: 0.7rem;
  border: none;
  outline: none;
  border-radius: 0.6rem;
  line-height: 1.1;
}

.shop-sidebar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 16rem;
  height: calc(100vh - 3.2rem);
  color: var(--text);
  z-index: 100;
  border-right: 2px solid transparent;
  border-image: linear-gradient(45deg, var(--border-highlight), var(--contrast)) 1 100%;
}

.add-product-wrapper {
  margin-bottom: 2rem;
  text-align: center;
  width: 10rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 2rem;
  overflow: hidden;

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
    z-index: -1;
  }

  &:hover::before {
    clip-path: circle(100%);
  }

  a {
    text-decoration: none;
    color: var(--text);
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.search-wrapper {
  position: relative;
}

.search-icon {
  position: absolute;
  left: 1.5rem;
  top: 1.55rem;
}

.filtering {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 1rem;
  gap: 1.5rem;
}

.search-bar {
  height: 2.5rem;
  border: none;
  outline: none;
  margin: 1rem;
  border-radius: 2rem;
  padding: 0.1rem 0.2rem 0.1rem 3rem;
  box-sizing: border-box;
  background-color: var(--bg1);
  color: var(--text);
  font-size: 1rem;
  width: 8rem;
  transition: width 0.3s;

  &:focus, &:not(:placeholder-shown) {
    width: 15rem;
  }
}

.search-tags {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 1rem 0;
  width: 10rem;
}
</style>