<script setup>
import { useProductStore } from '../../stores/product'
import ProductCardComponent from '../ProductCard/ProductCardComponent.vue'
import { ref } from 'vue'
import ProductDialogComponent from '../ProductDialog/ProductDialogComponent.vue'

const productStore = useProductStore()
const currentSelectedProduct = ref(null)
const isProductDialogOpen = ref(false)

const openProductDialog = (product) => {
  currentSelectedProduct.value = product
  isProductDialogOpen.value = true
}
</script>

<template>
  <div class="grid w-full h-full lg:p-4">
    <ProductCardComponent
      class="col-12 sm:col-6 md:col-4 lg:col-3 xl:col-2"
      v-for="product of productStore.products"
      :key="product.id"
      :image="product.image"
      :title="product.title"
      :category="product.category"
      :rating="product.rating"
      :price="product.price"
      @openProductDialog="() => openProductDialog(product)"
    />
    <ProductDialogComponent
      v-if="isProductDialogOpen"
      v-model:visible="isProductDialogOpen"
      :product="currentSelectedProduct"
    />
  </div>
</template>
