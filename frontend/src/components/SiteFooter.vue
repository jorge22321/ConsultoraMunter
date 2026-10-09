<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { contact } from '../data/content'
</script>
<template>
  <footer class="site-footer">
    <div class="container footer-grid">
      <div>
        <p class="eyebrow">CONSULTORA MUNTER & ASOCIADOS</p>
        <h2>Conversemos sobre<br />tu próximo paso.</h2>
        <RouterLink to="/contacto" class="text-link">Solicitar una consulta</RouterLink>
      </div>
      <div>
        <h3>Contacto</h3>
        <a :href="contact.phoneLink">{{ contact.phone }}</a
        ><a href="mailto:consultoramunteryasociados@gmail.com"
          >consultoramunteryasociados@gmail.com</a
        ><a :href="contact.maps" target="_blank" rel="noopener noreferrer">{{ contact.address }}</a>
      </div>
      <div>
        <h3>Explorar</h3>
        <RouterLink to="/nosotros">Nosotros</RouterLink
        ><RouterLink to="/servicios">Servicios</RouterLink
        ><RouterLink to="/privacidad">Privacidad</RouterLink
        ><RouterLink to="/accesibilidad">Accesibilidad</RouterLink>
      </div>
    </div>
    <div class="container footer-bottom">
      <span>© {{ new Date().getFullYear() }} Consultora Munter & Asociados S.A.C.</span
      ><span>Manchay, Pachacámac · Lima, Perú</span>
    </div>
  </footer>
</template>
