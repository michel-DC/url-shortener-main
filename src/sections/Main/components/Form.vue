<template>
  <Row class="form-background">
    <form @submit.prevent="$emit('submit')">
      <Columns columns="20fr 1fr" gap="var(--space-xs) var(--space-sm)">
        <input
          class="input-text-url"
          id="url-input"
          v-model="urlInput"
          type="text"
          autocomplete="off"
          placeholder="Enter le lien à raccourcir ici..."
          @click="$emit('click')"
        />
        <Button style="width: 100%" class="btn-large">Raccourcir le lien</Button>
        <span class="error-msg">{{ error }}</span>
      </Columns>
    </form>
  </Row>
</template>

<script setup>
import { Row, Columns, Button } from '@/components'

defineProps({
  error: { type: [Boolean, String], default: false }
})

defineEmits(['submit', 'click'])

const urlInput = defineModel()
</script>

<style scoped>
.form-background {
  padding: var(--space-md);
  padding-bottom: var(--space-xs);
  background-color: var(--color-purple-medium);
  background-image: url('../../../assets/images/background-purple.webp');
  border-radius: var(--space-xs);
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 6rem;
  bottom: calc(100% - var(--space-lg));
  justify-content: space-around;
}

.input-text-url {
  height: 35px;
  font-size: var(--font-size-md);
}

.btn-large:hover {
  background-color: #0066ff;
}

.error-msg {
  font-size: var(--font-size-sm);
  color: v-bind('error ? "var(--color-error-dark)": "transparent"');
  font-style: italic;
}

::placeholder {
  color: v-bind('error && "var(--color-error-light)"');
}

#url-input {
  outline: v-bind('error && "0.15rem solid var(--color-error-dark)"');
}
</style>
