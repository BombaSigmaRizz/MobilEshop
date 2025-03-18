<template>
  <div class="login-page">
    <div class="login-container">
      <h1>Login</h1>
      <span class="error-msg" v-for="msg in errorMessages" v-if="errorMessages">{{ msg }}</span>
      <form @submit.prevent="login()" class="login-form">
        <div class="input-wrapper">
          <input type="text" required v-model="form.email" />
          <span>Email</span>
        </div>
        <div class="input-wrapper">
          <input type="password" required v-model="form.password" />
          <span>Password</span>
        </div>
        <div class="login-btn-wrapper" @click="login()" @mouseenter="scrambleWordEffect(loginBtnText!)">
          <NuxtLink class="login-btn">
            <span data-value="Login" ref="login-btn-text">Login</span>
          </NuxtLink>
        </div>

        <NuxtLink class="no-account" to="register">Don't have an Account</NuxtLink>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { AxiosError } from 'axios'

definePageMeta({
  auth: false
})

const auth = useAuthStore()
const loginBtnText = useTemplateRef('login-btn-text')
const errorMessages = ref<string[]>([])

const form = ref({
  email: '',
  password: ''
})

async function login() {
  errorMessages.value = []
  try {
    await auth.login(form.value)
    navigateTo('/')
  } catch (error) {
    console.log(error)
    if (error instanceof AxiosError) {
      if (error.code === 'ERR_BAD_RESPONSE') {
        navigateTo('/server-down')
        return
      }
      for (let i = 0; i < error.response?.data.errors.length; i++) {
        errorMessages.value[i] = error.response?.data.errors[i].message
      }
    }
  }
}
</script>

<style scoped lang="scss">

.login-page {
  color: var(--text);
  display: flex;
  height: calc(100vh - 3.2rem);
  align-items: center;
  justify-content: center;
  flex-flow: column;
  background-image: url('/assets/img/page/login-bg.jpg');
  background-size: cover;
  overflow: hidden;
}

.login-container {
  h1 {
  font-size: 3rem;
  font-weight: 600;
  }

  background-color: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(10px);
  height: clamp(30rem, 60%, 40rem);
  width: 30em;
  padding: 2rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  gap: 1em;
}

.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1em;
  width: 100%;
  height: 70%;
}

.error-msg {
  color: red;
}

.input-wrapper {
  width: 90%;
  position: relative;
  margin-bottom: 2em;
}

input {
    width: 100%;
    outline: none;
    border: none;
    height: 2rem;
    color: var(--text);
    background-color: transparent;
    border-bottom: 2px solid var(--border-light);
    transition: all 0.3s;
}

.input-wrapper input:focus ~ span,
.input-wrapper input:valid ~ span {
  color: var(--border-light);
  font-size: 0.7em;
  transform: translateY(-20px);
}

.input-wrapper span {
  position: absolute;
  left: 0;
  font-size: 1em;
  color: var(--text);
  transition: all 0.3s;
  pointer-events: none;
}

.login-btn-wrapper {
  width: 16rem;
  height: 4rem;
  border-radius: 2rem;
  justify-self: center;
}

.login-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 0.5rem 1rem;
  width: 100%;
  height: 100%;
  outline: 2px solid var(--border-highlight);
  border-radius: 2rem;
  background: radial-gradient(circle, var(--border-light) 50%, transparent 100%);
  background-size: 0 0;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  font-size: 1.5em;
  border: none;
  cursor: pointer;
  transition: all 0.4s ease;
  gap: 1rem;

  &:hover {
    // background: var(--border);
    box-shadow: 0px 0px 20px 2px var(--border-highlight);
    background-size: 200% 200%;
    outline: 1px solid rgba(255, 255, 255, 0);
  }
}

.no-account {
  margin-top: 1em;
  cursor: pointer;
  transition: all 0.3s;
  text-decoration: none;
  color: var(--text);

  &:hover {
    color: var(--border-light);
  }
}
</style>