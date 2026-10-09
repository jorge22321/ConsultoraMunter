<script setup lang="ts">
defineProps<{ kicker: string; title: string; description?: string; image: string; alt: string }>()
</script>
<template>
  <section class="page-hero" :style="{ '--hero-image': `url('${image}')` }">
    <div class="container page-hero-content">
      <p class="eyebrow">{{ kicker }}</p>
      <h1>{{ title }}</h1>
      <p v-if="description">{{ description }}</p>
    </div>
    <span class="sr-only">{{ alt }}</span>
  </section>
</template>
