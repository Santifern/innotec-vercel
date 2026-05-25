<script setup lang="ts">
const colorMode = useColorMode()
colorMode.preference = 'dark'

const route = useRoute()
const isHackathonPage = computed(() => route.path.startsWith('/hackathon') || route.path.startsWith('/registrations-hackathon'))

const color = computed(() => '#080C16')

useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { key: 'theme-color', name: 'theme-color', content: color }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' },
    { rel: 'preload', href: '/fonts/Fractul-Thin.ttf', as: 'font', type: 'font/ttf', crossorigin: '' },
    { rel: 'preload', href: '/fonts/Fractul-Regular.ttf', as: 'font', type: 'font/ttf', crossorigin: '' },
    { rel: 'preload', href: '/fonts/Fractul-Black.ttf', as: 'font', type: 'font/ttf', crossorigin: '' },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap' }
  ],
  htmlAttrs: {
    lang: 'es'
  }
})

useSeoMeta({
  ogImage: '/logo-innotec-blanco.svg',
  twitterCard: 'summary_large_image',
  title: 'INNOTEC 2026 — Congreso de Tecnología e Innovación',
  description: 'El congreso anual de innovación y tecnología organizado por estudiantes de la Facultad de Ciencias y Tecnología de la Universidad Católica del Paraguay.'
})
</script>

<template>
  <UApp :toaster="{ expand: false }">
    <HackathonHeader v-if="isHackathonPage" />
    <NavBarMenu v-else />

    <UMain>
      <NuxtPage />
    </UMain>

    <HackathonFooter v-if="isHackathonPage" />
    <AppFooter v-else />
  </UApp>
</template>
