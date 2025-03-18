<template>
  <div class="review-list-container">
    <span class="avg-rating">Average Rating: {{ avgRating }}/5</span>
    <ReviewItem :name="review.name" :content="review.content" :rating="review.rating" v-for="review in reviewList" :key="review.id"/>
  </div>
</template>

<script lang="ts" setup>
import type { IReview } from '~/types/types';

const api = useApi()

const reviewList = ref<IReview[]>([])

const avgRating = computed(() => {
  if (!reviewList.value.length) return 0
  return reviewList.value.reduce((acc, review) => acc + review.rating, 0) / reviewList.value.length
})

const props = defineProps<{
  productId: number | undefined
}>()

onBeforeMount(async () => {
  try {
    const response = await api.get<IReview[]>(`/products/${props.productId}/reviews`)
    reviewList.value = response
    console.log(reviewList.value)
  }
  catch (error) {
    console.error(error)
  }
})
</script>

<style scoped lang="scss">
.avg-rating {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text);
}
</style>