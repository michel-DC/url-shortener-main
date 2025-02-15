<template>
  <Stack class="card">
    <slot name="icon" />
    <slot name="heading" />
    <slot name="content" />
  </Stack>
</template>

<script setup>
import Stack from './Stack.vue'
</script>

<style scoped>
.card {
  background-color: var(--color-white);
  padding: var(--space-sm);
  padding-top: 3.5rem;
  border-radius: var(--space-xxs);
  position: relative;
  max-width: 14rem;
}
</style>
