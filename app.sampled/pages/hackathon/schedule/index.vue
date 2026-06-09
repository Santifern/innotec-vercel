<script setup lang="ts">
definePageMeta({
  colorMode: 'dark',
  layout: 'hackathon',
  section: 'hackathon'
})

useSeoMeta({
  title: 'Cronograma - HACKATHON 2026',
  ogTitle: 'Cronograma - HACKATHON 2026',
  description: 'Muy pronto compartiremos el cronograma actualizado del Hackathon 2026.',
  ogDescription: 'Muy pronto compartiremos el cronograma actualizado del Hackathon 2026.'
})
</script>

<template>
  <ScheduleComingSoon
    theme="hackathon"
    label="Cronograma - HACKATHON 2026"
    back-to="/hackathon"
    back-label="Volver al inicio"
  />
</template>
