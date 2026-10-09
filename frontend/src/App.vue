<script setup lang="ts">
import { RouterView } from 'vue-router'
import OriginalMobileMenu from './components/OriginalMobileMenu.vue'
import { contact } from './data/content'
</script>
<template>
  <RouterView :key="$route.path" /><OriginalMobileMenu />
  <a
    class="floating-contact"
    :href="contact.whatsapp"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Consultar por WhatsApp"
    ><svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.6"
      aria-hidden="true"
    >
      <path d="M21 11.5a9 9 0 0 1-13 8L3 21l1.5-5A9 9 0 1 1 21 11.5Z" />
      <path d="M8 7c0 5 4 9 9 9l-1-3-2 1-3-3 1-2-3-2Z" /></svg
  ></a>
</template>
