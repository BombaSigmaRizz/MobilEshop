<template>
  <div class="basket-page">
    <div class="left">
      <BasketList />
      <button @click="pay()">Pay</button>
    </div>
    <div class="right">
      <div class="checkout"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { IProduct } from '~/types/types'
import { loadStripe } from '@stripe/stripe-js'

const api = useApi()

const basket = ref<number[]>([])
const basketProducts = ref<IProduct[]>([])

async function pay() {
  // Implement payment logic here
  console.log('Payment initiated')
  const stripe = await loadStripe('pk_live_51R5VZsG83xrSH3832sVqKG3e9qWzhLVel9KG08lzS8FEmDWtsYE0cMgFWfMMdn3x97ceGWnBDjzu0F2WXRv19wyE00KzdEmhoy', {
    betas: ['custom_checkout_beta_6'],
  })

  if (!stripe) return

  const response = await api.post('/checkout')
  const clientSecret = () => response.checkoutSessionClientSecret

  const checkout = await stripe.initEmbeddedCheckout({ fetchClientSecret: clientSecret })
  checkout.mount('.checkout')
}

onBeforeMount(async () => {
  try {
    basket.value = await api.get<number[]>('/basket')

    const productPromises = basket.value.map(async (productId) => {
      return await api.get<IProduct>(`/products/${productId}`)
    })

    basketProducts.value = await Promise.all(productPromises)
  } catch (error) {
    console.error(error)
  }
})
</script>

<style scoped lang="scss">
.basket-page {
  display: flex;
  width: 100%;
  height: 100%;
}

.left {
  width: 50%;
  height: 100%;
}

.right {
  width: 50%;
  height: 100%;
}
</style>