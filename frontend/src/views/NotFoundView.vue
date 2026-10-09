<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
<template>
  <main id="contenido" class="section-pad">
    <div class="container legal-copy">
      <p class="eyebrow">ERROR 404</p>
      <h1>Página no encontrada</h1>
      <p>La dirección que buscas no existe o cambió.</p>
      <RouterLink class="button button-dark" to="/">Volver al inicio</RouterLink>
    </div>
  </main>
</template>
