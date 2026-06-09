<script setup lang="ts">
import HackathonFaqSection from '~/components/HackathonFaqSection.vue'

definePageMeta({
  colorMode: 'dark',
  layout: 'hackathon',
  section: 'hackathon'
})

useSeoMeta({
  title: 'FAQ - HACKATHON 2026',
  ogTitle: 'FAQ - HACKATHON 2026',
  description: 'Preguntas frecuentes sobre el Hackathon 2026.',
  ogDescription: 'Preguntas frecuentes sobre el Hackathon 2026.'
})
</script>

<template>
  <HackathonFaqSection />
</template>
