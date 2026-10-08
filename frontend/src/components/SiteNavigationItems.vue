<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
const links = [
  { label: 'Inicio', href: '/' },
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'Servicios', href: '/servicios' },
  { label: 'Especialidades', href: '/#especialidades' },
  { label: 'Contacto', href: '/contacto' },
]
</script>

<template>
  <li
    v-for="link in links"
    :key="link.href"
    class="NxO5nt"
    data-part="menu-item"
    data-animation-name="none"
    data-item-depth="0"
  >
    <div class="fYThT1">
      <div
        class="FBAIyH QFOPOz wixui-horizontal-menu__item wixui-menu__item cVnJ7u"
        :data-selected="route.path === link.href ? 'true' : undefined"
        data-part="menu-item-content"
        :data-interactive="route.path === link.href ? 'false' : 'true'"
      >
        <a
          data-testid="linkElement"
          data-part="menu-item-link"
          :href="link.href"
          target="_self"
          class=""
          :aria-current="route.path === link.href ? 'page' : undefined"
        ><div
          class="ijO_Jr wixui-horizontal-menu__item-label wixui-menu__item-label GPIJZi"
          data-part="label"
        >{{ link.label }}</div></a>
      </div>
    </div>
    <span class="BDrALc"></span>
  </li>
</template>
