<script setup lang="ts">
import { contact } from '../data/content'
</script>
<template>
  <div class="contact-channels">
    <a
      :href="contact.whatsapp"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
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
    <a :href="contact.phoneLink" aria-label="Llamar a Munter"
      ><svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.6"
        aria-hidden="true"
      >
        <path d="M5 3H3c0 10 8 18 18 18v-5l-5-2-2 3-7-7 3-2-2-5Z" /></svg
    ></a>
    <a
      :href="contact.maps"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Ver zona de atención en Google Maps"
      ><svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.6"
        aria-hidden="true"
      >
        <path d="M19 9c0 6-7 12-7 12S5 15 5 9a7 7 0 1 1 14 0Z" />
        <circle cx="12" cy="9" r="2.5" /></svg
    ></a>
  </div>
</template>
