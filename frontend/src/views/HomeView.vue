<script setup lang="ts">
import { RouterLink } from 'vue-router'
import ServiceCard from '../components/ServiceCard.vue'
import { services, steps } from '../data/content'
</script>
<template>
  <main id="contenido">
    <section class="home-hero">
      <img
        class="home-hero-image"
        src="/images/legal.jpg"
        alt="Escultura de la justicia con balanza"
        fetchpriority="high"
      />
      <div class="container home-hero-inner">
        <div class="hero-copy">
          <p class="eyebrow">CONSULTORA MUNTER & ASOCIADOS · LIMA</p>
          <h1>Asesoría para decisiones que importan.</h1>
          <p>Soluciones legales, técnicas y empresariales a la medida de tus necesidades.</p>
          <div class="hero-actions">
            <RouterLink class="button button-gold" to="/contacto">Cuéntanos tu caso</RouterLink
            ><RouterLink class="button button-outline" to="/servicios"
              >Explorar servicios</RouterLink
            >
          </div>
        </div>
      </div>
      <div class="hero-index container">
        <span>01 / 05</span><span>Derecho · Ingeniería · Empresa</span>
      </div>
    </section>
    <section class="intro-section section-pad">
      <div class="container split-intro">
        <p class="eyebrow">UNA CONSULTORA, DISTINTAS MIRADAS</p>
        <div>
          <h2>Tu proyecto merece una respuesta completa.</h2>
          <p>
            Reunimos profesionales de derecho, ingeniería, administración, finanzas, comercio
            exterior y comunicación. Escuchamos tu necesidad y coordinamos la especialidad adecuada
            para acompañarte.
          </p>
          <RouterLink class="text-link" to="/nosotros">Conoce nuestra consultora</RouterLink>
        </div>
      </div>
    </section>
    <section id="especialidades" class="services-section section-pad">
      <div class="container">
        <div class="section-heading">
          <div>
            <p class="eyebrow">LO QUE HACEMOS</p>
            <h2>Áreas de servicio</h2>
          </div>
          <RouterLink class="text-link" to="/servicios">Ver todos los servicios</RouterLink>
        </div>
        <div class="service-grid">
          <ServiceCard v-for="service in services" :key="service.id" :service="service" />
        </div>
      </div>
    </section>
    <section class="process-section section-pad">
      <div class="container">
        <div class="section-heading">
          <div>
            <p class="eyebrow">CÓMO TRABAJAMOS</p>
            <h2>Un proceso claro, desde el inicio.</h2>
          </div>
        </div>
        <div class="steps-grid">
          <article v-for="(step, index) in steps" :key="step.title">
            <span class="step-number">0{{ index + 1 }}</span>
            <h3>{{ step.title }}</h3>
            <p>{{ step.text }}</p>
          </article>
        </div>
      </div>
    </section>
    <section class="contact-band">
      <div class="container">
        <p class="eyebrow">¿TIENES UNA CONSULTA?</p>
        <h2>Hablemos de lo que necesitas resolver.</h2>
        <RouterLink class="button button-dark" to="/contacto">Solicitar orientación</RouterLink>
      </div>
    </section>
  </main>
</template>
