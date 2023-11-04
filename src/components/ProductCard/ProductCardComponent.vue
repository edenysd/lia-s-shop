<script setup>
import Button from 'primevue/button'
import Card from 'primevue/card'
import RatingComponent from '../atoms/RatingComponent.vue'

const props = defineProps(['title', 'price', 'description', 'category', 'rating', 'image'])
</script>

<template>
  <div>
    <Card class="w-full h-full flex flex-column">
      <template #header>
        <img
          class="overflow-hidden"
          :src="props.image"
          alt="Image"
          style="width: 100%; height: 300px; object-fit: contain"
        />
      </template>
      <template #title>
        <span class="text-base">
          {{ props.title }}
        </span>
      </template>
      <template #subtitle>
        <RatingComponent :rate="rating.rate" :count="rating.count" />
      </template>
      <template #content>
        <div class="w-full flex align-items-end">
          <div class="w-full flex align-items-end justify-content-between">
            <div class="text-2xl font-semibold text-color-secondary">${{ props.price }}</div>
            <Button
              class="pl-2 pr-2 hover-scale transition-transform animation-duration-100"
              icon="pi pi-cart-plus"
              severity="primary"
              outlined=""
              @click="() => $emit('openProductDialog')"
            />
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>

<style scoped>
:deep(.p-card-title) {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
:deep(.p-card-content) {
  padding-top: 0px;
  padding-bottom: 0px;
}
.hover-scale:hover {
  transform: scale(110%, 110%);
}
</style>
