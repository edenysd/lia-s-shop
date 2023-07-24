<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import { useMeta } from 'vue-meta'

useMeta({
  title: 'asdfasdfdas',
  htmlAttrs: { lang: 'en', amp: true }
})
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
