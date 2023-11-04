<script setup>
import { useMeta } from 'vue-meta'

import CategoryGridComponent from '../components/CategoryGrid/CategoryGridComponent.vue'

useMeta({
  title: 'Home'
})
</script>

<template>
  <div class="flex flex-column h-full justify-content-center align-items-center text-2xl pt-3 mb-2">
    <div class="w-fit font-light text-4xl text-primary">Lia's Shop</div>
    <CategoryGridComponent class="pt-5" />
  </div>
</template>
