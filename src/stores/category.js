import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getAllCategories } from '../api/category'

export const useCategoryStore = defineStore('category', () => {
  const allCategories = ref([])

  async function fetchAllCategories() {
    return getAllCategories().then(({ data }) => {
      allCategories.value = data
      return data.token
    })
  }

  return { allCategories, fetchAllCategories }
})
