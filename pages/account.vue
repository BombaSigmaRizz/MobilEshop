<template>
  <div class="account-page">

  </div>
</template>

<script setup lang="ts">
const auth = useAuthStore() //https://www.youtube.com/shorts/hgXAGfBgR7k email
const router = useRouter()

onBeforeMount(async () => {
  try {
    const response = await auth.me()

    if (!response) {
    router.push('/login')
    }
    console.log(response)
  }
  catch (error) {
    console.error(error)
    router.push('/server-down')
  }
})
</script>

<style scoped lang="scss">

</style>