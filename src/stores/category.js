import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getAllCategories } from '../api/category'

export const useCategoryStore = defineStore('category', () => {
  const allCategories = ref([])
  const loadingCategories = ref([])

  async function fetchAllCategories() {
    loadingCategories.value = true
    return getAllCategories()
      .then(({ data }) => {
        allCategories.value = data
        return data.token
      })
      .finally(() => (loadingCategories.value = false))
  }

  return { allCategories, loadingCategories, fetchAllCategories }
})
