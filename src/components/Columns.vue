<template>
  <div class="columns">
    <slot />
  </div>
</template>

<script setup>
defineProps({
  columns: { type: String, default: '1fr 1fr' },
  gap: { type: String, default: 'var(--space-sm)' }
})
</script>

<style scoped>
.columns {
  display: grid;
  grid-template-columns: v-bind('columns');
  gap: v-bind('gap');
}

@media (max-width: 768px) {
  .columns {
    grid-template-columns: 1fr;
    text-align: center;
  }
}
</style>
