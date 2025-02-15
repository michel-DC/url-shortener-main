<template>
  <Columns class="hero">
    <Stack class="hero-content">
      <span class="hero-text">Bien plus que de simples liens raccourcis.</span>
      <span>
        Raccourcissez vos liens simplement et gratuitement en ligne.
        Avec corvez vous n'aurez plus a vous soucier de la longueur de vos liens.
      </span>
      <Button class="get-started btn-large-round">Commencer</Button>
    </Stack>
    <img class="person-working" src="../assets/images/work-guy-table.avif" />
  </Columns>
</template>

<script setup>
import { Columns, Stack, Button } from '@/components'
</script>

<style scoped>
.hero {
  padding: var(--space-xl);
  overflow-x: hidden;
}
.hero-content {
  min-width: 28rem;
}

.person-working {
  max-width: 30rem;
  height: fit-content;
}

.btn-large-round:hover {
  background-color: #0066ff;
}

@media (max-width: 768px) {
  .person-working {
    max-width: 25rem;
    padding-bottom: var(--space-lg);
  }
  
  .get-started,
  .person-working {
    margin: auto;
  }
  .hero-content {
    padding: 0;
    min-width: min-content;
  }

  .hero {
    justify-content: center;
  }
}

@media (max-width: 425px) {
  .person-working {
    max-width: 20rem;
  }
}
</style>
