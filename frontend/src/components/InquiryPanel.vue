<script setup lang="ts">
import { ref, useId } from 'vue'
import InquiryForm from './InquiryForm.vue'
import { contact } from '../data/content'
const active = ref<'asesoria' | 'general'>('asesoria')
const uid = useId()
const tabs = ref<HTMLElement | null>(null)
function keyboard(event: KeyboardEvent) {
  if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return
  event.preventDefault()
  active.value =
    event.key === 'Home'
      ? 'asesoria'
      : event.key === 'End'
        ? 'general'
        : active.value === 'asesoria'
          ? 'general'
          : 'asesoria'
  tabs.value
    ?.querySelectorAll<HTMLButtonElement>('button')
    [active.value === 'asesoria' ? 0 : 1]?.focus()
}
</script>
<template>
  <div class="infinity-inquiry-panel">
    <div
      ref="tabs"
      class="infinity-tabs"
      role="tablist"
      aria-label="Tipo de consulta"
      @keydown="keyboard"
    >
      <button
        v-for="tab in ['asesoria', 'general'] as const"
        :id="uid + tab"
        :key="tab"
        role="tab"
        :aria-selected="active === tab"
        :aria-controls="uid + 'panel'"
        :tabindex="active === tab ? 0 : -1"
        @click="active = tab"
      >
        {{ tab === 'asesoria' ? 'Solicitar asesoría' : 'Consulta general' }}
      </button>
    </div>
    <div
      :id="uid + 'panel'"
      role="tabpanel"
      :aria-labelledby="uid + active"
      class="infinity-inquiry-body"
    >
      <InquiryForm :mode="active" />
      <aside class="infinity-inquiry-aside">
        <h3>Un equipo para tus proyectos</h3>
        <p>
          Reunimos profesionales en derecho, ingeniería y gestión empresarial para atender tus
          necesidades. Cuéntanos tu situación y coordinemos el siguiente paso.
        </p>
        <a
          :href="contact.whatsapp"
          target="_blank"
          rel="noopener noreferrer"
          class="infinity-button is-white"
          >Contáctanos ↗</a
        >
      </aside>
    </div>
  </div>
</template>
