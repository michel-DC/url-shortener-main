<template>
  <Stack class="main">
    <Form v-model="urlInput" :error="error" @submit="handleSubmit" @click="resetError" />
    <Stack reverse class="links">
      <Link
        v-for="link in links"
        :key="links.indexOf(link)"
        :long="link.longLink"
        :short="link.shortLink"
      />
    </Stack>
    <Statistics />
    <Boost />
  </Stack>
</template>

<script setup>
import { ref } from 'vue'
import Form from './components/Form.vue'
import Statistics from './components/Statistics.vue'
import Boost from './components/Boost.vue'
import Link from './components/Link.vue'
import { Stack } from '@/components'

const links = ref(JSON.parse(getLocalLinks()))
const error = ref(false)
const urlInput = ref('')

async function fetchLink() {
  const options = {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_URL_SHORTENER_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ long_url: urlInput.value })
  }

  try {
    const result = await fetch('https://api-ssl.bitly.com/v4/shorten', options)
    const jsonResult = await result.json()
    return jsonResult
  } catch (err) {
    error.value = true
  }
}

async function handleSubmit() {
  try {
    const longLink = await fetchLink()
    const keys = Object.keys(longLink)
    if (!keys.includes('errors')) {
      links.value.push({ longLink: urlInput.value, shortLink: longLink.link })
      localStorage.setItem('links', JSON.stringify(links.value))
      resetInput()
    } else {
      error.value = setErrorMessage(longLink, urlInput.value)
    }
  } catch (err) {
    error.value = true
  }
}

function setErrorMessage(result, url) {
  const empty = 'Add a link'
  const invalid = result.description + ' http://example.com'

  return url === '' ? empty : invalid
}

function getLocalLinks() {
  if (!localStorage.getItem('links')) {
    localStorage.setItem('links', JSON.stringify([]))
  }
  return localStorage.getItem('links')
}

function resetError() {
  if (error.value) {
    error.value = false
  }
}

function resetInput() {
  urlInput.value = ''
}
</script>

<style scoped>
.main {
  background-color: var(--color-white-dark);
  position: relative;
}
.links {
  padding: 5rem 6rem 0;
}

@media (max-width: 768px) {
  .links {
    padding: 8rem var(--space-md) 0;
  }
  .form-background {
    margin: 0 var(--space-md);
    bottom: calc(100% - 4.5rem);
  }
}
</style>
