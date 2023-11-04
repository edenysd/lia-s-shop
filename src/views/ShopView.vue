<script setup>
import { useProductStore } from '../stores/product'
import { useMeta } from 'vue-meta'
import ProgressSpinner from 'primevue/progressspinner'
import ProductCardComponent from '../components/ProductCard/ProductCardComponent.vue'
import { ref } from 'vue'
import ProductListComponent from '../components/ProductList/ProductListComponent.vue'

const productStore = useProductStore()

productStore.fetchProducts()
useMeta({
  title: 'Shop'
})
</script>

<template>
  <div class="w-full h-full flex flex-column justify-content-center">
    <ProgressSpinner v-if="productStore.isLoading" />
    <ProductListComponent v-else />
  </div>
</template>
