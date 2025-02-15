<template>
  <Stack class="statistics">
    <Stack style="text-align: center">
      <span class="h2">Avec nous vous pouvez</span>
      <span class="stat-content"
        >Raccourcissez vos liens simplement et gratuitement en ligne. Avec corvez vous n'aurez plus a vous soucier de la longueur de vos liens.</span
      >
    </Stack>
    <Stack style="justify-content: center; align-items: center">
      <hr class="line" />
      <Columns gap="var(--space-lg)" class="stat-cards" columns="1fr 1fr 1fr">
        <Card
          v-for="card in cardInfo"
          :key="card.key"
          :style="{ transform: `translateY(${card.key}rem)` }"
          class="stat-card"
        >
          <template #icon>
            <Stack class="icon-bg">
              <Icon class="card-icon" :name="card.icon" />
            </Stack>
          </template>
          <template #heading>
            <span class="stat-heading">{{ card.heading }}</span>
          </template>
          <template #content>
            <span class="stat-content">{{ card.content }}</span>
          </template>
        </Card>
      </Columns>
    </Stack>
  </Stack>
</template>

<script setup>
import { Stack, Card, Columns, Icon } from '@/components'

const cardInfo = [
  {
    key: 0,
    icon: 'graph',
    heading: 'Facilité de partage',
    content:
      " Les URL raccourcies sont plus faciles à mémoriser et à partager, que ce soit dans des e-mails, des publications sur les réseaux sociaux ou des messages texte."
  },
  {
    key: 1,
    icon: 'guage',
    heading: 'Esthétique et professionnalisme',
    content:
      'Un lien court donne une apparence plus soignée et professionnelle, améliorant ainsi l’image globale d’un contenu ou d’une marque.'
  },
  {
    key: 2,
    icon: 'supplies',
    heading: 'Suivi et analyse',
    content:
      'Les services de raccourcissement permettent de suivre les clics et d’obtenir des données utiles pour analyser les performances de vos liens et ajuster vos stratégies.'
  }
]
</script>

<style scoped>
.statistics {
  justify-content: center;
  padding: var(--space-md);
}

.stat-heading {
  font-weight: 700;
  text-transform: capitalize;
}
.stat-content {
  color: var(--color-grey-light);
  font-size: var(--font-size-sm);
}

.stat-cards {
  justify-content: center;
  padding: var(--space-xl) 0;
}

.icon-bg {
  background-color: var(--color-purple-medium);
  padding: var(--space-sm);
  justify-content: center;
  align-items: center;
  width: fit-content;
  border-radius: 100%;
  position: absolute;
  bottom: calc(100% - var(--space-md));
}

.line {
  background-color: var(--color-teal-dark);
  width: 50%;
  position: absolute;
  z-index: 0;
  height: 0.2rem;
  border: none;
}

@media (max-width: 768px) {
  .line {
    height: 30%;
    width: 0.2rem;
  }
}
</style>
