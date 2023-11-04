<script setup>
import Button from 'primevue/button'
import Card from 'primevue/card'
import InputNumber from 'primevue/inputnumber'

const props = defineProps(['id', 'title', 'price', 'description', 'category', 'image', 'amount'])
</script>

<template>
  <div>
    <Card class="w-full h-full flex flex-column">
      <template #content>
        <div class="flex w-full">
          <div class="flex align-items-center justify-content-center" style="width: 60px">
            <img
              class="overflow"
              :src="props.image"
              alt="Image"
              style="width: 60px; height: 60px; object-fit: contain"
            />
          </div>
          <div class="flex w-full overflow-clip">
            <div class="w-full text-xs text-bold overflow">
              <div class="single-line font-semibold">
                {{ props.title }}
              </div>
              <div class="flex align-items-center justify-content-between">
                <div class="text-2xl font-semibold text-color-secondary">${{ props.price }}</div>
                <div class="flex align-items-center">
                  <InputNumber
                    input-class="w-5rem"
                    :model-value="amount"
                    @update:model-value="(newValue) => $emit('update-cart-amount', newValue)"
                    inputId="minmax-buttons"
                    mode="decimal"
                    showButtons
                    :min="0"
                    :max="10000"
                  />

                  <Button
                    class="opacity-40 hover-opacity-100 hover-scale-110 transition-all transition-duration-100"
                    icon="pi pi-trash"
                    severity="danger"
                    text
                    rounded
                    aria-label="Remove"
                    @click="() => $emit('remove-product')"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>

<style scoped>
.single-line {
  max-width: 20rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
:deep(.p-card-body) {
  padding: 5px;
}
.hover-opacity-100:hover {
  opacity: 1 !important;
}
.hover-scale-110:hover {
  transform: scale(110%, 110%);
}
</style>
