<template>
  <div class="login-container">
    <div class="login-form">
      <h1>Register</h1>
      <form @submit.prevent="register()">
        <input type="text" placeholder="Username" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />
        <button type="submit">Register</button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
function register() {
  console.log('Registering...');
}
</script>

<style scoped lang="scss">

</style>