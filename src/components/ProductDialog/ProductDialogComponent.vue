<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import Dialog from 'primevue/dialog'
import InputNumber from 'primevue/inputnumber'
import RatingComponent from '../atoms/RatingComponent.vue'

import { useCartStore } from '../../stores/cart'

const props = defineProps(['visible', 'product'])
const emits = defineEmits(['update:visible'])
const desiredAmount = ref(1)

const cartStore = useCartStore()

const confirmAddToCart = () => {
  cartStore.addProduct(props.product.id, desiredAmount.value, props.product)
  emits('update:visible', false)
}
</script>

<template>
  <Dialog
    class="w-12 sm:w-10 md:w-8"
    v-if="props.product"
    :visible="props.visible"
    @update:visible="(e) => $emit('update:visible', e)"
    modal
    :header="props.product.title"
  >
    <div class="grid">
      <div class="col-12 md:col-6 relative">
        <img
          class="overflow-hidden"
          :src="props.product.image"
          alt="Image"
          style="width: 100%; height: 300px; object-fit: contain; z-index: -1"
        />
        <div class="absolute w-full h-3rem" style="bottom: 0px; backdrop-filter: blur(10px)"></div>
        <RatingComponent
          style="position: absolute; left: 10px; bottom: 10px"
          :rate="props.product.rating.rate"
          :count="props.product.rating.count"
        />
        <div
          class="text-2xl font-semibold text-color-secondary"
          style="position: absolute; right: 10px; bottom: 10px"
        >
          ${{ props.product.price }}
        </div>
      </div>
      <div class="col-12 md:col-6 flex flex-column justify-content-between">
        <div>
          {{ props.product.description }}
        </div>
        <div class="mt-4">
          <div class="relative w-full flex justify-content-end align-items-center">
            <InputNumber
              input-class="w-5rem"
              class="mr-2"
              v-model="desiredAmount"
              inputId="minmax-buttons"
              mode="decimal"
              showButtons
              :min="1"
              :max="10000"
            />

            <Button
              class="w-10rem pl-2 pr-2 hover-scale transition-transform animation-duration-100"
              icon="pi pi-cart-plus"
              severity="primary"
              @click="confirmAddToCart"
            />
          </div>
        </div>
      </div>
    </div>
  </Dialog>
</template>
