import type { User } from "~/models/user"
import {  } from "~/services/api"

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(null)
  const isLoggedIn = ref(false)

  const api = useApi()

  async function login(payload: { email: string, password: string }) {
    const result = await api.post('/auth/login', payload)

    user.value = result
    isLoggedIn.value = true

    return result
  }

  async function register(payload: { name: string, email: string, password: string }) {
    const result = await api.post('/auth/register', payload)
    user.value = result
    isLoggedIn.value = true

    return result
  }

  async function data() {
    try {
      return await api.get('/auth/me')
    } catch (error) {
      // TODO: catch only if unauthorized error
      console.log(error)
      return null
    }
  }

  async function logout() {
    console.log(await api.post('/auth/logout'))
    isLoggedIn.value = false
  }

  async function load() {
    
    user.value = await data()
    isLoggedIn.value = !!user.value
  }

  return {
    isLoggedIn,
    login,
    register,
    logout,
    data,
    load
  }
})