<script setup lang="ts">
import { ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
const route = useRoute()
const open = ref(false)
watch(
  () => route.fullPath,
  () => {
    open.value = false
  },
)
const links = [
  { to: '/', label: 'Inicio' },
  { to: '/nosotros', label: 'Nosotros' },
  { to: '/servicios', label: 'Servicios' },
  { to: '/contacto', label: 'Contacto' },
]
</script>
<template>
  <header class="site-header">
    <div class="container header-inner">
      <RouterLink class="brand" to="/" aria-label="Consultora Munter y Asociados, inicio">
        <img src="/images/logo-munter-transparent.png" alt="" width="48" height="48" />
        <span><strong>CONSULTORA MUNTER</strong><small>& ASOCIADOS S.A.C.</small></span>
      </RouterLink>
      <button
        class="menu-toggle"
        type="button"
        :aria-expanded="open"
        aria-controls="principal-nav"
        @click="open = !open"
      >
        {{ open ? 'Cerrar' : 'Menú'
        }}<span class="menu-lines" aria-hidden="true"><i></i><i></i></span>
      </button>
      <nav
        id="principal-nav"
        class="site-nav"
        :class="{ 'is-open': open }"
        aria-label="Navegación principal"
      >
        <RouterLink v-for="link in links" :key="link.to" :to="link.to">{{ link.label }}</RouterLink>
      </nav>
    </div>
  </header>
</template>
