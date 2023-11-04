<script setup>
import InputText from 'primevue/inputtext'
import { useProductStore } from '../../stores/product'

const productStore = useProductStore()
</script>

<template>
  <span class="p-input-icon-left">
    <i class="pi pi-search" />
    <InputText placeholder="Search" v-model="productStore.selectedNameFilter" />
  </span>
</template>
