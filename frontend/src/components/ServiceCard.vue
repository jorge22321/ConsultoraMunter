<script setup lang="ts">
import { RouterLink } from 'vue-router'
import type { Service } from '../data/content'
defineProps<{ service: Service }>()
</script>
<template>
  <article class="service-card">
    <RouterLink :to="`/servicios/${service.id}`" :aria-label="`Ver ${service.title}`">
      <img
        :src="service.image"
        :alt="`Imagen ilustrativa de ${service.title.toLowerCase()}`"
        loading="lazy"
      />
      <div class="service-card-body">
        <span class="eyebrow">{{ service.number }} / ESPECIALIDAD</span>
        <h3>{{ service.title }}</h3>
        <p>{{ service.description }}</p>
        <span class="text-link">Conocer servicio</span>
      </div>
    </RouterLink>
  </article>
</template>
