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
  <div class="flex flex-column justify-content-center align-items-center w-full p-2">
    <div class="pb-5 text-5xl text-color-secondary font-medium">Category List</div>
    <ProgressBar
      v-if="categoryStore.loadingCategories"
      mode="indeterminate"
      class="w-25rem"
      style="height: 6px"
    />
    <div v-else class="grid w-full">
      <CategoryItemComponent
        v-for="category of categoryStore.allCategories"
        class="col-12 sm:col-6"
        :key="category"
        :name="category.toUpperCase()"
        @click="() => filterByCategory(category)"
      />
      <CategoryItemComponent
        :filled="true"
        class="col-12"
        name="ALL CATEGORIES"
        @click="() => filterByCategory(null)"
      />
    </div>
  </div>
</template>
