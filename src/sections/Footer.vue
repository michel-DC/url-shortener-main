<template>
  <Columns columns="1fr 1fr 1fr" class="footer">
    <span class="footer-logo">Corvex</span>
    <Columns columns="1fr 1fr 1fr">
      <Stack v-for="column in footerColumns" :key="column.key">
        <span class="footer-heading">{{ column.heading }}</span>
        <span v-for="link in column.links" :key="footerColumns.indexOf(link)" class="footer-link">
          {{ link }}
        </span>
      </Stack>
    </Columns>
    <Row class="footer-icons">
      <i v-for="icon in icons" :key="icons.indexOf(icon)" :class="`fa-brands fa-${icon}`"></i>
    </Row>
  </Columns>
</template>

<script setup>
import { Row, Columns, Stack } from '@/components'

const footerColumns = [
  { key: 0, heading: 'Que faison nous ?', links: ['Raccourcir un URL', 'lorem', 'lorem'] },
  { key: 1, heading: 'ressources', links: ['blog', 'lorem', 'lorem'] },
  { key: 2, heading: 'L`entreprise', links: ['À propos', 'lorem', 'lorem', 'contact'] }
]

const icons = ['square-facebook', 'twitter', 'pinterest', 'instagram']
</script>

<style scoped>
.footer {
  background-color: var(--color-grey-dark);
  color: var(--color-white);
  padding: var(--space-xl);
}

.footer-logo {
  font-weight: 600;
  font-size: 5rem;
}

.footer-heading {
  font-weight: 600;
  transition: 200ms ease-in-out;
  font-size: var(--font-size-md);
  text-transform: capitalize;
}

.footer-link {
  font-size: var(--font-size-md);
  white-space: nowrap;
  color: var(--color-grey-light);
  text-transform: capitalize;
}

.footer-link:hover,
.fa-brands:hover {
  color: var(--color-teal-dark);
  cursor: pointer;
}

@media (max-width: 768px) {
  .footer-icons {
    justify-content: center;
  }
}
</style>
