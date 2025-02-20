export default defineNuxtRouteMiddleware(async (to, from) => {
  const auth = useAuthStore()

  const isAuthRequired = to.meta.auth !== false

  if (isAuthRequired && !auth.isLoggedIn) {
    return navigateTo('/login')
  }
})
