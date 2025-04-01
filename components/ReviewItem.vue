<template>
  <div class="review-container">
    <h2 class="name">{{ props.name }}</h2>
    
    <p class="rating">{{ props.rating }}/5</p>

    <p class="content">{{ props.content }}</p>
    
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  name: string,
  content: string,
  rating: number
}>()
</script>

<style scoped lang="scss">
.review-container {
  margin-top: 1rem;
  background-color: var(--bg1);
  width: 30rem;
  min-height: 8rem;
  padding: 1rem;
  border-radius: 1rem;
}
</style>