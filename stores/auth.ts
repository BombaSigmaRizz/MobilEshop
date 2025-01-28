import { api } from "~/services/api"

export const useAuthStore = defineStore('auth', () => {

  async function login(payload: { email: string, password: string }) {
    const response = await api.post('/auth/login', payload)
    return response
  }

  async function register(payload: { name: string, email: string, password: string }) {
    const response = await api.post('/auth/register', payload)
    return response
  }

  async function me() {
    const response = await api.get('/auth/me')
    if (!response) {
      return null
    } else {
      return response
    }
  }

  return {
    login,
    register,
    me
  }
})