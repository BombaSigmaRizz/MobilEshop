import { Api, type ApiOptions } from "~/services/api"

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  let options: ApiOptions = {
    url: config.public.api.url,
  }

  if (import.meta.client) {
    options.url = config.app.baseURL.replace(/\/$/, '') + '/api'
  } else {
    options.headers = useRequestHeaders(['cookie'])
  }


  const api = new Api(options)

  return {
    provide: {
      api,
    }
  }
})