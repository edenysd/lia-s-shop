<script setup>
import Button from 'primevue/button'

const props = defineProps(['rate', 'count'])
</script>

<template>
  <span
    class="text-xl font-bold"
    :style="{
      color: `rgb(${Math.min(255 - props.rate * (255 / 2.5), 255)},${props.rate * (255 / 5)},0)`
    }"
  >
    <span>
      {{ props.rate }}
    </span>
    <i class="pi pi-star-fill" />
    <span class="text-gray-400 font-normal"> ({{ props.count }}) </span>
  </span>
</template>
