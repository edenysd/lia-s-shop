<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import { useMeta } from 'vue-meta'

useMeta({
  title: 'Home View',
  htmlAttrs: { lang: 'en' }
})
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
