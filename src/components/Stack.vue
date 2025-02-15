<template>
  <div class="stack">
    <slot />
  </div>
</template>

<script setup>
defineProps({
  gap: { type: String, default: 'var(--space-sm)' },
  reverse: { type: Boolean, default: false }
})
</script>

<style scoped>
.stack {
  display: flex;
  flex-direction: v-bind('reverse ? "column-reverse" : "column"');
  gap: v-bind('gap');
}
</style>
