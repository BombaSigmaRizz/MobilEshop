<template>
  <div class="account-page">

  </div>
</template>

<script setup lang="ts">
const auth = useAuthStore()
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