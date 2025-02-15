<template>
  <Stack class="get-started">
    <span class="h2">Raccourcissez vos liens ici</span>
    <Button class="btn-large-round">Commencer</Button>
  </Stack>
</template>

<script setup>
import { Stack, Button } from '@/components'
</script>

<style scoped>
.get-started {
  background-image: url('../../../assets/images/background-purple.webp');
  background-color: var(--color-purple-medium);
  color: var(--color-white);
  text-align: center;
  align-items: center;
  padding: var(--space-md);
}

.btn-large-round:hover {
  background-color: #0066ff;
}
</style>
