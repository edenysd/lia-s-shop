<script setup>
import { useCategoryStore } from '../../stores/category'
import { useProductStore } from '../../stores/product'
import ProgressBar from 'primevue/progressbar'
import CategoryItemComponent from './CategoryItemComponent.vue'
import { useRouter } from 'vue-router'

const categoryStore = useCategoryStore()
const productStore = useProductStore()
const router = useRouter()

const filterByCategory = (category) => {
  router.push({ name: 'shop' })
  productStore.selectedCategoryFilter = category
}

categoryStore.fetchAllCategories()
</script>

<template>
  <div
    class="flex flex-column justify-content-center align-items-center w-full p-2"
    style="max-width: 1200px"
  >
    <div class="pb-5 text-5xl text-color-secondary font-medium">Category List</div>
    <ProgressBar
      v-if="categoryStore.loadingCategories"
      mode="indeterminate"
      class="w-25rem"
      style="height: 6px"
    />
    <div v-else class="grid w-full p-8">
      <CategoryItemComponent
        v-for="category of categoryStore.allCategories"
        class="col-12 sm:col-6 hover-scale-105 transition-transform transition-duration-100"
        :key="category"
        :name="category.toUpperCase()"
        @click="() => filterByCategory(category)"
      />
      <CategoryItemComponent
        :filled="true"
        class="col-12 hover-scale-105 transition-transform transition-duration-100"
        name="ALL CATEGORIES"
        @click="() => filterByCategory(null)"
      />
    </div>
  </div>
</template>
<style scoped>
.hover-scale-105:hover {
  transform: scale(105%, 105%);
}
</style>
