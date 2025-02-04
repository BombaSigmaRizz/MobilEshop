export default defineNuxtPlugin(async () => {
  const auth = useAuthStore()

  if (import.meta.server) {
    await auth.load()
  }
})