<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { services, type Service } from '../data/content'
import AreaIcon from './AreaIcon.vue'
const route = useRoute()
const visibleServices = computed(() =>
  route.params.slug ? services.filter((s) => s.id === route.params.slug) : services,
)
function groups(service: Service) {
  if (service.groups) return service.groups
  const size = Math.ceil(service.items.length / 3)
  return [0, 1, 2]
    .map((i) => ({
      title: ['Servicios', 'Asesoría', 'Acompañamiento'][i],
      items: service.items.slice(i * size, (i + 1) * size),
    }))
    .filter((g) => g.items.length)
}
</script>
<template>
  <div>
    <section
      v-for="(service, index) in visibleServices"
      :id="service.id"
      :key="service.id"
      class="infinity-service-section"
      :class="{ 'is-reverse': index % 2 }"
    >
      <div class="infinity-service-inner">
        <img
          :src="service.image"
          :alt="`Imagen ilustrativa de ${service.title.toLowerCase()}`"
          class="infinity-service-photo"
          loading="lazy"
        />
        <div class="infinity-service-copy">
          <h2>{{ service.title }}</h2>
          <p>{{ service.intro }}</p>
          <div class="infinity-service-groups">
            <div v-for="group in groups(service)" :key="group.title">
              <AreaIcon />
              <h3>{{ group.title }}</h3>
              <ul>
                <li v-for="item in group.items" :key="item">{{ item }}</li>
              </ul>
            </div>
          </div>
          <RouterLink :to="`/contacto?servicio=${service.id}`" class="infinity-button"
            >Consultar este servicio ↗</RouterLink
          >
          <RouterLink v-if="route.params.slug" to="/servicios" class="infinity-text-link"
            >Todos los servicios</RouterLink
          >
        </div>
      </div>
    </section>
  </div>
</template>
