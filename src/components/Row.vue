<template>
  <div class="row">
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
.row {
  display: flex;
  flex-direction: v-bind('reverse ? "row-reverse" : "row"');
  gap: v-bind('gap');
}
</style>
