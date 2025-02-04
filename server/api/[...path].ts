export default defineEventHandler((event) => {
  const config = useRuntimeConfig(event)

  return proxyRequest(
    event,
    `${config.public.api.url}/${event.context.params!.path}`,
  )
})
