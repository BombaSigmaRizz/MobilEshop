<template>
  <div class="account-page">
    <div class="account-info">
      <h1>Account Information</h1><br>
      <h2>Hello {{ auth.user?.name }},</h2><br><br><p> welcome to your account page. You can review all your personal data here.</p><br>
      <h3>Account details:</h3><br><br>
      <p>Name: {{ auth.user?.name }}</p><br>
      <p>Email: {{ auth.user?.email }}</p>
      </div>
    <button @click="auth.logout(); navigateTo('/')" class="logout-btn">Log out</button>
  </div>
</template>

<script setup lang="ts">
const auth = useAuthStore() 
const router = useRouter()
</script>

<style scoped lang="scss">
.account-info{
  color: var(--text);
  padding-left: 2.5rem;
}

h1 {
  padding-top: 1rem;
  text-align: center;
  font-size: 3rem;
  font-weight: 600;
}

h2 {
  padding-top: 4rem;
  font-size: 1.6rem;
  font-weight: 600;
}

h3 {
  font-size: 2.5rem;
  padding-top: 6rem;
}

.logout-btn {
  position: absolute;
  top: 50rem;
  left: 2.5rem;
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