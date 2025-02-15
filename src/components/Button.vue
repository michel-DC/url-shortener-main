<template>
  <button class="btn" @click="$emit('handleClick')">
    <slot />
  </button>
</template>

<script setup>
defineEmits(['handleClick'])
</script>
