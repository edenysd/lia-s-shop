<script setup>
import { useLoginStore } from '../stores/login'
import { useProductStore } from '../stores/product'
import { useMeta } from 'vue-meta'
import ProgressSpinner from 'primevue/progressspinner'
import ProductCardComponent from '../components/ProductCard/ProductCardComponent.vue'

const loginStore = useLoginStore()
const productStore = useProductStore()

productStore.fetchProducts()
useMeta({
  title: 'Shop'
})
</script>

<template>
  <div class="w-full h-full flex flex-column justify-content-center">
    <ProgressSpinner v-if="productStore.isLoading" />
    <div v-else class="grid w-full h-full lg:p-4">
      <ProductCardComponent
        class="col-12 sm:col-6 md:col-4 lg:col-3 xl:col-2"
        v-for="product of productStore.products"
        :key="product.id"
        :image="product.image"
        :title="product.title"
        :category="product.category"
        :rating="product.rating"
        :price="product.price"
      />
    </div>
  </div>
</template>
