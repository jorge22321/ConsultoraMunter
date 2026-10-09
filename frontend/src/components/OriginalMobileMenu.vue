<script setup lang="ts">
import { ref, watch, nextTick, onMounted, onBeforeUnmount } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
const open = ref(false)
const panel = ref<HTMLElement | null>(null)
const route = useRoute()
let trigger: HTMLElement | null = null
function close() {
  open.value = false
  trigger?.focus()
}
async function show(event: Event) {
  trigger = (event as CustomEvent<HTMLElement>).detail
  open.value = true
  await nextTick()
  panel.value?.querySelector('button')?.focus()
}
function keyboard(event: KeyboardEvent) {
  if (event.key === 'Escape') close()
  if (event.key !== 'Tab') return
  const items = [...(panel.value?.querySelectorAll<HTMLElement>('button,a') || [])]
  if (event.shiftKey && document.activeElement === items[0]) {
    event.preventDefault()
    items.at(-1)?.focus()
  } else if (!event.shiftKey && document.activeElement === items.at(-1)) {
    event.preventDefault()
    items[0]?.focus()
  }
}
function resize() {
  if (window.innerWidth > 750) open.value = false
}
watch(open, (value) => {
  document.body.style.overflow = value ? 'hidden' : ''
  document.getElementById('SITE_CONTAINER')?.toggleAttribute('inert', value)
  document.querySelector('.floating-contact')?.toggleAttribute('inert', value)
  trigger?.setAttribute('aria-expanded', String(value))
})
watch(
  () => route.fullPath,
  () => {
    open.value = false
  },
)
onMounted(() => {
  document.addEventListener('munter:menu', show)
  window.addEventListener('resize', resize)
})
onBeforeUnmount(() => {
  document.removeEventListener('munter:menu', show)
  window.removeEventListener('resize', resize)
  document.body.style.overflow = ''
})
</script>
<template>
  <Teleport to="body">
    <nav
      v-if="open"
      ref="panel"
      class="original-mobile-menu"
      aria-label="Navegación principal"
      @keydown="keyboard"
    >
      <button aria-label="Cerrar menú" @click="close">×</button>
      <RouterLink to="/">Inicio</RouterLink><RouterLink to="/nosotros">Nosotros</RouterLink>
      <RouterLink to="/servicios">Servicios</RouterLink>
      <RouterLink to="/#especialidades">Especialidades</RouterLink>
      <RouterLink to="/contacto">Contacto</RouterLink>
      <RouterLink to="/contacto">Solicitar una consulta</RouterLink>
    </nav>
  </Teleport>
</template>
