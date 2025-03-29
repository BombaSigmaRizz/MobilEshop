import type { IProduct } from "~/types/types"

export const useDataStore = defineStore('data', () => {
  const productList = ref<IProduct[]>([])

  const filterSearchTerm = ref<string>('')
  const filterDiscounted = ref<boolean>(false)
  const filterCategory = ref<string>('')

  const filteredProductList = computed<IProduct[]>(() => {
    console.log(filterDiscounted.value)
    return productList.value.filter((product) => {
      const matchesSearchTerm = product.name.toLowerCase().includes(filterSearchTerm.value.toLowerCase())
      const matchesDiscounted = filterDiscounted.value ? product.discountPrice > -1 : true

      return matchesSearchTerm && matchesDiscounted
    })
  })

  const api = useApi()

  async function load() {
    try {
      productList.value = await api.get('/products')
    } catch (error) {
      console.error('Failed to load data:', error)
    } finally {

    }
  }

  return {
    productList,
    filterSearchTerm,
    filterDiscounted,
    filterCategory,
    filteredProductList,
    load,
  }
})
