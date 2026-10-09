<script setup lang="ts">
import { RouterView } from 'vue-router'
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'
import { contact } from './data/content'
</script>
<template>
  <a class="skip-link" href="#contenido">Saltar al contenido</a>
  <SiteHeader />
  <RouterView />
  <SiteFooter />
  <a class="contact-tab" :href="contact.whatsapp" target="_blank" rel="noopener noreferrer"
    >WhatsApp</a
  >
</template>
