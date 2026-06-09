<script setup lang="ts">
import HackathonPonenciasTracks from '~/components/HackathonPonenciasTracks.vue'

definePageMeta({
  colorMode: 'dark',
  layout: 'hackathon',
  section: 'hackathon'
})

useSeoMeta({
  title: 'Ponencias y Tracks - HACKATHON 2026',
  ogTitle: 'Ponencias y Tracks - HACKATHON 2026',
  description: 'Problemáticas, actividades y fases de trabajo del Hackathon 2026.',
  ogDescription: 'Problemáticas, actividades y fases de trabajo del Hackathon 2026.'
})
</script>

<template>
  <HackathonPonenciasTracks />
</template>
