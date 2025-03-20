<template>
  <div class="server-down-page">
    <div class="text">
      <h1>Server Down</h1>
      <p>Sorry, the server is down. Please try again later.</p>
    </div>
  </div>
</template>

<script lang="ts" setup>

const router = useRouter()
const auth = useAuthStore()
const api = useApi()

definePageMeta({
  auth: false
})

onBeforeMount(async () => {
  const response = await api.get('/api/check')
  console.log(response)
  if (response === true) {
    navigateTo('/')
  }
})
</script>

<style scoped lang="scss">
.server-down-page {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  color: var(--text);
  width: 100%;
  height: calc(100vh - 3.2rem);
  background-image: url('../assets/img/page/server-down.png');
  background-repeat: no-repeat;
  background-position: 5% 50%;
}

.text {
  margin-left: 30%;
}

h1 {
  font-size: 3.4rem;
  font-weight: 700;
}

p {
  font-size: 1.3rem;
  font-weight: 400;
  margin-top: 1rem;
}
</style>