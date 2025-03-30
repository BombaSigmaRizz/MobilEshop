import type { IProduct } from "~/types/types"

export const useDataStore = defineStore('data', () => {
  const productList = ref<IProduct[]>([])

  const filterSearchTerm = ref<string>('')
  const filterDiscounted = ref<boolean>(false)
  const filterBrand = ref<string>('')
  const filterColor = ref<string>('')
  const filterStorage = ref<string>('')

  const filteredProductList = computed<IProduct[]>(() => {
    return productList.value.filter((product) => {
      const matchesSearchTerm = product.name.toLowerCase().includes(filterSearchTerm.value.toLowerCase())
      const matchesDiscounted = filterDiscounted.value ? product.discountPrice > -1 : true
      const matchesBrand = filterBrand.value ? product.brand == filterBrand.value : true
      const matchesColor = filterColor.value ? product.color == filterColor.value : true
      const matchesStorage = filterStorage.value ? product.storage == filterStorage.value : true

      return matchesSearchTerm && matchesDiscounted && matchesBrand && matchesColor && matchesStorage
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
    filterBrand,
    filterColor,
    filterStorage,
    filteredProductList,
    load,
  }
})
