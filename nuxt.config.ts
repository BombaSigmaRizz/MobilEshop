// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  css: ['~/assets/css/main.scss'],
  modules: [
    '@nuxt/icon',
    '@nuxt/image',
    '@vueuse/nuxt',
    '@pinia/nuxt',
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler' // or "modern"
        }
      }
    }
  },

  runtimeConfig: {
    public: {
      api: {
        // url: 'http://localhost:3333',
        url: 'http://167.172.110.64:3001'
      }
    }
  },
  
  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    }
  },
})