<script setup>
import Card from 'primevue/card'
import InputNumber from 'primevue/inputnumber'

const props = defineProps(['id', 'title', 'price', 'description', 'category', 'image', 'amount'])
</script>

<template>
  <div>
    <Card class="w-full h-full flex flex-column overflow-hidden">
      <template #content>
        <div class="flex w-full">
          <div class="flex align-items-center justify-content-center" style="width: 60px">
            <img
              class="overflow-hidden"
              :src="props.image"
              alt="Image"
              style="width: 60px; height: 60px; object-fit: contain"
            />
          </div>
          <div class="flex w-full overflow-clip">
            <div class="w-full text-xs text-bold overflow-hidden">
              <div class="single-line font-semibold">
                {{ props.title }}
              </div>
              <div class="flex align-items-center justify-content-between">
                <div class="text-2xl font-semibold text-color-secondary">${{ props.price }}</div>
                <InputNumber
                  input-class="w-5rem"
                  class="mr-2"
                  :model-value="amount"
                  @update:model-value="(newValue) => $emit('update-cart-amount', newValue)"
                  inputId="minmax-buttons"
                  mode="decimal"
                  showButtons
                  :min="0"
                  :max="10000"
                />
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
</style>
