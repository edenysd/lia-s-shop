<script setup>
import { useCategoryStore } from '../../stores/category'
import { useProductStore } from '../../stores/product'
import ProgressBar from 'primevue/progressbar'
import CategorySimpleItemComponent from './CategorySimpleItemComponent.vue'

const categoryStore = useCategoryStore()
const productStore = useProductStore()

const togglefilterByCategory = (category) => {
  productStore.selectedCategoryFilter =
    productStore.selectedCategoryFilter == category ? null : category
}

categoryStore.fetchAllCategories()
</script>

<template>
  <div class="flex flex-column justify-content-center align-items-center w-full p-2">
    <ProgressBar
      v-if="categoryStore.loadingCategories"
      mode="indeterminate"
      class="w-25rem"
      style="height: 6px"
    />
    <div v-else class="grid w-full">
      <CategorySimpleItemComponent
        v-for="category of categoryStore.allCategories"
        class="col-6 lg:col-3 transition-all transition-duration-300 hover-scale"
        :class="productStore.selectedCategoryFilter == category ? 'selected-scale' : ''"
        :filled="productStore.selectedCategoryFilter == category"
        :key="category"
        :name="category.toUpperCase()"
        @click="() => togglefilterByCategory(category)"
      />
    </div>
  </div>
</template>

<style scoped>
.hover-scale:hover {
  transform: scale(110%, 110%);
}
.selected-scale {
  transform: scale(105%, 105%);
}
</style>
