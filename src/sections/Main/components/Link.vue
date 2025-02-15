<template>
  <Columns v-if="isVisible" columns="4fr 1fr 1fr 1fr" gap="0" class="link">
    <p>Votre lien raccourci</p>
    <span class="long-link">{{ long }}</span>
    <span class="short-link" style="color: var(--color-teal-dark)">{{ short }}</span>
    <div class="btn-container">
      <Button
        class="copy-btn"
        :style="`background-color: ${buttonColor}`"
        @handle-click="copyLink"
      >
        {{ buttonText }}
      </Button>
    </div>
    <div class="btn-container">
      <Button
        class="delete-btn"
        style="background-color: var(--color-error-dark)"
        @handle-click="deleteLink"
      >
        Supprimer
      </Button>
    </div>
  </Columns>
</template>

<script setup>
import { Columns, Button } from '@/components'
import { ref } from 'vue'

// Définition des propriétés (long URL et short URL)
const props = defineProps({
  long: { type: String, required: true },
  short: { type: String, required: true },
})

// Gestion de la visibilité du lien
const isVisible = ref(true)

// État pour le bouton de copie
const buttonText = ref('Copier le lien')
const buttonColor = ref(undefined)

// Fonction pour copier le lien
async function copyLink() {
  try {
    await navigator.clipboard.writeText(props.short)
    buttonText.value = 'URL copié!'
    buttonColor.value = 'var(--color-purple-main-light)'
  } catch (error) {
    buttonText.value = 'Une erreur s\'est produite!'
    buttonColor.value = 'var(--color-error-dark)'
  }
}

// Fonction pour supprimer le lien
function deleteLink() {
  isVisible.value = false // Masque le container du lien
}
</script>

<style scoped>
.short-link {
  margin: var(--space-sm) 0;
}
.link {
  background-color: var(--color-white);
  border-radius: var(--space-xxs);
  align-items: center;
}

.long-link {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  margin: var(--space-sm);
}
.btn-container {
  margin: var(--space-sm);
}

.copy-btn:hover {
  background-color: #0066ff;
}

.delete-btn {
  background-color: var(--color-error-dark);
  color: white;
  cursor: pointer;
  padding: 5px 10px;
  border: none;
  border-radius: 3px;
}

.delete-btn:hover {
  background-color: darkred;
}

@media (max-width: 768px) {
  .copy-btn,
  .delete-btn {
    width: 100%;
  }
  .short-link {
    border-top: 1.5px solid var(--color-white-dark);
    padding-top: var(--space-sm);
    margin: 0;
  }
}
</style>
