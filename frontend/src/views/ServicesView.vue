<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import PageHero from '../components/PageHero.vue'
import ServiceCard from '../components/ServiceCard.vue'
import { services } from '../data/content'
const route = useRoute()
const selected = computed(() => services.find((s) => s.id === route.params.slug))
</script>
<template>
  <main id="contenido">
    <PageHero
      kicker="NUESTRAS ESPECIALIDADES"
      :title="selected?.title || 'Servicios'"
      :description="
        selected?.description || 'Asesoría personalizada para personas, proyectos y negocios.'
      "
      :image="selected?.image || '/images/legal.jpg'"
      :alt="`Fotografía ilustrativa de ${selected?.title || 'servicios'}`"
    />
    <template v-if="selected"
      ><section class="section-pad">
        <div class="container detail-intro">
          <div>
            <p class="eyebrow">SERVICIO {{ selected.number }}</p>
            <h2>{{ selected.title }}</h2>
          </div>
          <p>{{ selected.intro }}</p>
        </div>
      </section>
      <section class="section-pad services-section">
        <div class="container">
          <p class="eyebrow">EN QUÉ PODEMOS AYUDARTE</p>
          <h2>Ámbitos de atención</h2>
          <div v-if="selected.groups" class="detail-groups">
            <article v-for="group in selected.groups" :key="group.title">
              <h3>{{ group.title }}</h3>
              <ul>
                <li v-for="item in group.items" :key="item">{{ item }}</li>
              </ul>
            </article>
          </div>
          <ul v-else class="detail-list">
            <li v-for="item in selected.items" :key="item">{{ item }}</li>
          </ul>
          <p class="detail-note">
            El alcance específico se confirma durante la evaluación de tu consulta.
          </p>
        </div>
      </section>
      <section class="contact-band">
        <div class="container">
          <p class="eyebrow">ASESORÍA PERSONALIZADA</p>
          <h2>Conversemos sobre {{ selected.title.toLowerCase() }}.</h2>
          <RouterLink class="button button-dark" :to="`/contacto?servicio=${selected.id}`"
            >Solicitar una consulta</RouterLink
          >
        </div>
      </section></template
    >
    <template v-else
      ><section class="section-pad">
        <div class="container">
          <div class="section-heading">
            <div>
              <p class="eyebrow">SOLUCIONES A TU MEDIDA</p>
              <h2>Encuentra el área que necesitas.</h2>
            </div>
          </div>
          <div class="service-grid">
            <ServiceCard v-for="service in services" :key="service.id" :service="service" />
          </div>
        </div></section
    ></template>
  </main>
</template>
