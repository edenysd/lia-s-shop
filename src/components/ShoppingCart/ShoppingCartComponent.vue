<script setup>
import SideBar from 'primevue/sidebar'
import { useCartStore } from '../../stores/cart'
import ProductInCartCardComponent from './ProductInCartCardComponent.vue'

const props = defineProps(['visible'])

const cartStore = useCartStore()
</script>

<template>
  <SideBar
    :visible="props.visible"
    class="w-full md:w-30rem"
    @update:visible="(e) => $emit('update:visible', e)"
    position="right"
    :pt="{
      header: {
        style: 'justify-content: space-between'
      }
    }"
  >
    <template #header>
      <h2>
        <i class="pi pi-shopping-cart font-bold text-blue-500" style="font-size: 1.3rem" />
        Shopping Cart
      </h2>
    </template>
    <div class="relative h-full">
      <div class="pb-8 grid">
        <ProductInCartCardComponent
          class="col-12"
          v-for="productInCart of cartStore.cart"
          :key="productInCart.id"
          :id="productInCart.id"
          :amount="productInCart.amount"
          :title="productInCart.snapshot.title"
          :image="productInCart.snapshot.image"
          :category="productInCart.snapshot.category"
          :price="productInCart.snapshot.price"
          @update-cart-amount="
            (newValue) =>
              cartStore.setProduct(productInCart.productId, newValue, productInCart.snapshot)
          "
          @remove-product="() => cartStore.removeProduct(productInCart.productId)"
        />
      </div>
      <div
        class="fixed w-full flex align-items-center p-4 justify-content-between"
        style="bottom: 0px; left: 0px; height: 80px; backdrop-filter: blur(10px)"
      >
        <span class="text-2xl font-medium"> Total: </span>
        <span class="text-2xl font-medium text-color-secondary">
          ${{ cartStore.totalValue.toFixed(2) }}</span
        >
      </div>
    </div>
  </SideBar>
</template>
