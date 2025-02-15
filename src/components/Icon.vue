<template>
  <component :is="icon" />
</template>

<script setup>
import { defineAsyncComponent, computed } from 'vue'

const props = defineProps({
  name: { type: String, required: true }
})

const icon = computed(() => {
  return defineAsyncComponent(() => import(`../assets/images/icon-${props.name}.vue`))
})
</script>
