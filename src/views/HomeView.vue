<script setup>
import { useLoginStore } from '../stores/login'
import { useMeta } from 'vue-meta'
import { useToast } from 'primevue/usetoast'

import CategoryGridComponent from '../components/CategoryGrid/CategoryGridComponent.vue'

const loginStore = useLoginStore()
const toast = useToast()

toast.add({
  severity: 'info',
  summary: 'Welcome 👋',
  detail: `Hello, ${loginStore.userInfo.username}`,
  life: 3000
})

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
