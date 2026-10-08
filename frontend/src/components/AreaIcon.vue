<script setup lang="ts">
defineProps<{ kind?: string }>()
</script>
<template>
  <svg
    viewBox="0 0 48 48"
    fill="none"
    stroke="currentColor"
    stroke-width="1.8"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <template v-if="kind === 'legal'">
      <path
        d="M24 6v35M13 41h22M9 15h30M24 6l4 4-4 4-4-4zM10 16 4 30h12zM38 16l-6 14h12zM4 30c0 8 12 8 12 0M32 30c0 8 12 8 12 0"
      />
    </template>
    <template v-else-if="kind === 'building'">
      <path d="M6 42h36M10 42V15L24 6l14 9v27M18 42V31h12v11M17 18h3m8 0h3M17 25h3m8 0h3" />
    </template>
    <template v-else-if="kind === 'finance'">
      <path d="M7 6v36h35M14 34v-9h6v9m5 0V18h6v16m5 0V10h6v24M12 17l9-6 7 2 10-8" />
    </template>
    <template v-else>
      <path d="m8 25 10 10L41 9" />
      <circle cx="23" cy="25" r="18" />
    </template>
  </svg>
</template>
