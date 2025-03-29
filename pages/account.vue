<template>
  <div class="account-page">
    <button @click="auth.logout(); navigateTo('/')" class="logout-btn">Log out</button>
  </div>
</template>

<script setup lang="ts">
const auth = useAuthStore() //https://www.youtube.com/shorts/hgXAGfBgR7k email
const router = useRouter()
</script>

<style scoped lang="scss">
.logout-btn {
  position: relative;
  top: 45rem;
  left: 55.1rem;
  background: rgb(114, 8, 236);
  box-shadow: 0 0 95px rgb(114, 8, 236);
  padding: 10px 20px;
  border: none;
  font-size: 17px;
  color: #fff;
  border-radius: 2rem;
  letter-spacing: 4px;
  font-weight: 700;
  text-transform: uppercase;
  transition: 1s;
  transition-property: box-shadow;
}

.logout-btn:hover {
  box-shadow: 0 0 5px rgb(114, 8, 236),
              0 0 25px rgb(114, 8, 236),
              0 0 50px rgb(114, 8, 236),
              0 0 100px rgb(114, 8, 236);
}
</style>