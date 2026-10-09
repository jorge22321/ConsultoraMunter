<script setup lang="ts">
import PageHero from '../components/PageHero.vue'
import InquiryForm from '../components/InquiryForm.vue'
import { contact } from '../data/content'
</script>
<template>
  <main id="contenido">
    <PageHero
      kicker="HABLEMOS"
      title="Contacto"
      description="Cuéntanos qué necesitas; te ayudaremos a encontrar el siguiente paso."
      image="/images/legal.jpg"
      alt="Escultura de la justicia"
    />
    <section class="section-pad">
      <div class="container contact-grid">
        <div class="contact-details">
          <p class="eyebrow">ESTAMOS PARA ESCUCHARTE</p>
          <h2>Una buena solución comienza con una conversación.</h2>
          <p>
            Envíanos tu consulta y conserva el código de referencia. Si prefieres una respuesta
            directa, puedes llamarnos o escribir por WhatsApp.
          </p>
          <dl>
            <div>
              <dt>Teléfono</dt>
              <dd>
                <a :href="contact.phoneLink">{{ contact.phone }}</a>
              </dd>
            </div>
            <div>
              <dt>Correo</dt>
              <dd>
                <a href="mailto:consultoramunteryasociados@gmail.com"
                  >consultoramunteryasociados@gmail.com</a
                >
              </dd>
            </div>
            <div>
              <dt>Dirección</dt>
              <dd>
                <a :href="contact.maps" target="_blank" rel="noopener noreferrer"
                  >{{ contact.address }} {{ contact.reference }}</a
                >
              </dd>
            </div>
          </dl>
        </div>
        <div class="form-panel">
          <p class="eyebrow">FORMULARIO</p>
          <h2>Déjanos tu consulta</h2>
          <InquiryForm />
        </div>
      </div>
    </section>
  </main>
</template>
