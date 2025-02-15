<template>
  <Stack class="header">
    <Row class="header-content">
      <h1>Corvex</h1>
      <Row class="desktop-nav-links">
        <a v-for="link in navLinks" :key="navLinks.indexOf(link)" class="nav-link">{{ link }}</a>
        <FlexSpace />
        <a class="nav-link">Se connecter</a>
        <Button class="btn-round">Créer un compte</Button>
      </Row>
      <i class="fa-solid fa-bars" @click="displayMenu"></i>
    </Row>
    <Stack v-if="showMenu" class="mobile-nav-links">
      <a v-for="link in navLinks" :key="navLinks.indexOf(link)" class="mobile nav-link">{{
        link
      }}</a>
      <div class="divider"></div>
      <a class="mobile nav-link">Se connecter</a>
      <Button class="btn-round">Créer un compte</Button>
    </Stack>
  </Stack>
</template>

<script setup>
import { Row, FlexSpace, Stack, Button } from '@/components'
import { ref } from 'vue'

const showMenu = ref(false)
const navLinks = ['Que faisons nous ?', 'Tarification', 'Nos ressources']

function displayMenu() {
  showMenu.value = !showMenu.value
}
</script>

<style scoped>
.header {
  padding: 0 var(--space-xl);
}
.header-content {
  justify-content: space-between;
}
.mobile-nav-links {
  background-color: #000000;
  padding: var(--space-sm) 0;
  border-radius: var(--space-xs);
}
.nav-link {
  font-weight: 600;
  color: v-bind('showMenu ? "var(--color-white)" : "var(--color-grey-light)"');
  font-size: var(--font-size-sm);
}
.nav-link:hover {
  color: var(--color-grey-dark);
  cursor: pointer;
}
.mobile:hover {
  color: var(--color-teal-dark);
}
.fa-bars:hover {
  cursor: pointer;
}

.btn-round:hover {
  background-color: #0066ff
}

.divider {
  border-top: 0.1px solid var(--color-white-dark);
  width: 100%;
}
.desktop-nav-links {
  width: 100%;
}

.desktop-nav-links,
.mobile-nav-links,
.header-content {
  align-items: center;
}

@media (min-width: 768px) {
  .fa-bars {
    display: none;
  }
}

@media (max-width: 768px) {
  .desktop-nav-links {
    display: none;
  }
  .header {
    padding: 0 var(--space-md);
  }
}
</style>
