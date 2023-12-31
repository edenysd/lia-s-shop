import { ref, watch } from 'vue'
import { defineStore } from 'pinia'
import { getAllProducts, getProductsByCategory } from '../api/product'

export const useProductStore = defineStore('product', () => {
  const isLoading = ref(false)
  const selectedCategoryFilter = ref(null)
  const selectedNameFilter = ref('')
  const productsByCategory = ref([])
  const filteredProducts = ref([])

  async function fetchProducts() {
    isLoading.value = true
    if (selectedCategoryFilter.value) {
      getProductsByCategory(selectedCategoryFilter.value)
        .then(({ data }) => {
          productsByCategory.value = data
          filterByName()
        })
        .finally(() => {
          isLoading.value = false
        })
    } else {
      getAllProducts(selectedCategoryFilter.value)
        .then(({ data }) => {
          productsByCategory.value = data
          filterByName()
        })
        .finally(() => {
          isLoading.value = false
        })
    }
  }

  function filterByName() {
    if (selectedNameFilter.value) {
      filteredProducts.value = productsByCategory.value.filter((product) =>
        product.title.toLowerCase().includes(selectedNameFilter.value.toLowerCase())
      )
    } else {
      filteredProducts.value = productsByCategory.value
    }
  }

  watch(() => selectedCategoryFilter.value, fetchProducts)
  watch(() => selectedNameFilter.value, filterByName)

  return {
    products: filteredProducts,
    selectedCategoryFilter,
    selectedNameFilter,
    isLoading,
    fetchProducts
  }
})
