<template>
  <div class="account-page">
    HI
    <button @click="auth.logout(); navigateTo('/')">GAY</button>
  </div>
</template>

<script setup lang="ts">
const auth = useAuthStore()
const router = useRouter()
</script>

<style scoped lang="scss">

</style>