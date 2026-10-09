<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { services } from '../data/content'
</script>
<template>
  <div class="infinity-insights">
    <article v-for="service in [services[0]!, services[3]!, services[4]!]" :key="service.id">
      <RouterLink :to="`/servicios/${service.id}`"
        ><img :src="service.image" :alt="service.title" loading="lazy"
      /></RouterLink>
      <div>
        <span>Munter &amp; Asociados · Nuestros servicios</span>
        <h3>
          <RouterLink :to="`/servicios/${service.id}`">{{ service.title }}</RouterLink>
        </h3>
        <p>{{ service.description }}</p>
        <RouterLink :to="`/servicios/${service.id}`" class="infinity-text-link"
          >Más información ↗</RouterLink
        >
      </div>
    </article>
  </div>
</template>
