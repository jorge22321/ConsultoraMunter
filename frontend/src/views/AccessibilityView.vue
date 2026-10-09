<script setup lang="ts">
import PageHero from '../components/PageHero.vue'
</script>
<template>
  <main id="contenido">
    <PageHero
      kicker="NUESTRO COMPROMISO"
      title="Accesibilidad"
      description="Queremos que la información sea fácil de consultar para todas las personas."
      image="/images/arquitectura.jpg"
      alt="Planos de arquitectura"
    />
    <section class="section-pad">
      <div class="container legal-copy">
        <h2>Uso accesible de esta web</h2>
        <p>
          La navegación puede utilizarse con teclado y lector de pantalla. Las imágenes informativas
          tienen texto alternativo; el formulario muestra etiquetas y mensajes de estado.
        </p>
        <p>
          Si encuentras una barrera de acceso, escríbenos a
          <a href="mailto:consultoramunteryasociados@gmail.com"
            >consultoramunteryasociados@gmail.com</a
          >
          e indica la página o función afectada. Revisaremos el problema y buscaremos una forma
          alternativa de proporcionarte la información.
        </p>
      </div>
    </section>
  </main>
</template>
