<template>
  <div class="basket-page">
    <div class="left">
      <BasketList />
      <button class="pay-button" @click="pay()">Pay</button>
    </div>
    <div class="right">
      <div class="checkout"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { loadStripe } from '@stripe/stripe-js'

const api = useApi()

async function pay() {
  const stripe = await loadStripe('pk_live_51R5VZsG83xrSH3832sVqKG3e9qWzhLVel9KG08lzS8FEmDWtsYE0cMgFWfMMdn3x97ceGWnBDjzu0F2WXRv19wyE00KzdEmhoy', {
    betas: ['custom_checkout_beta_6'],
  })

  if (!stripe) return

  const response = await api.post('/checkout')
  const clientSecret = () => response.checkoutSessionClientSecret

  const checkout = await stripe.initEmbeddedCheckout({ fetchClientSecret: clientSecret })
  checkout.mount('.checkout')
}
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

.pay-button {
  position: relative;
  top: -1.2rem;
  left: 2.1rem;
  background: rgb(114, 8, 236);
  box-shadow: 0 0 95px rgb(114, 8, 236);
  padding: 0.6rem 2rem;
  border: none;
  font-size: 17px;
  color: #fff;
  border-radius: 2rem;
  letter-spacing: 1px;
  font-weight: 700;
  text-transform: uppercase;
  transition: 1s;
  transition-property: box-shadow;
}

.pay-button:hover {
  box-shadow: 0 0 5px rgb(114, 8, 236),
              0 0 25px rgb(114, 8, 236),
              0 0 50px rgb(114, 8, 236),
              0 0 100px rgb(114, 8, 236);
}
</style>