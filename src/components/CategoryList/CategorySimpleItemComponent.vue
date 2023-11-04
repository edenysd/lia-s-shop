<script setup>
import Button from 'primevue/button'

const props = defineProps(['name', 'filled'])
</script>

<template>
  <div>
    <Button
      :outlined="!filled"
      class="w-full h-full flex align-items-center justify-content-center text-lg"
    >
      {{ props.name }}
    </Button>
  </div>
</template>
