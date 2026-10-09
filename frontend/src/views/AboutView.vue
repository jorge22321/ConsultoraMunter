<script setup lang="ts">
import { RouterLink } from 'vue-router'
import PageHero from '../components/PageHero.vue'
import { services } from '../data/content'
</script>
<template>
  <main id="contenido">
    <PageHero
      kicker="LA CONSULTORA"
      title="Nosotros"
      description="Profesionales de distintas especialidades para necesidades reales."
      image="/images/arquitectura.jpg"
      alt="Planos y herramientas de arquitectura"
    />
    <section class="section-pad">
      <div class="container split-intro">
        <p class="eyebrow">QUIÉNES SOMOS</p>
        <div>
          <h2>Acompañamiento que conecta disciplinas.</h2>
          <p>
            Consultora Munter & Asociados brinda soluciones personalizadas. Integramos conocimientos
            de ingeniería, derecho, gestión de comercio y logística, administración, finanzas,
            contabilidad, marketing digital y diseño gráfico.
          </p>
          <p>
            Partimos de una conversación para entender tu situación y coordinar el servicio que
            corresponda. Cada propuesta se define según el alcance y las necesidades del caso.
          </p>
        </div>
      </div>
    </section>
    <section class="section-pad services-section">
      <div class="container">
        <p class="eyebrow">NUESTRAS ÁREAS</p>
        <h2>Especialidades que trabajan juntas.</h2>
        <div class="area-list">
          <RouterLink v-for="service in services" :key="service.id" :to="`/servicios/${service.id}`"
            ><span>{{ service.number }}</span
            ><strong>{{ service.title }}</strong></RouterLink
          >
        </div>
      </div>
    </section>
    <section class="contact-band">
      <div class="container">
        <p class="eyebrow">TRABAJEMOS JUNTOS</p>
        <h2>Cuéntanos tu situación.</h2>
        <RouterLink class="button button-dark" to="/contacto">Contactar</RouterLink>
      </div>
    </section>
  </main>
</template>
