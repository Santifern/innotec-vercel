<script setup lang="ts">
interface Organizador {
  id: string
  name: string
  photo: string
  label: string
  role: string
}

const organizadores: Organizador[] = [
  {
    id: 'fabricio',
    name: 'Fabricio Chase',
    photo: '/images/hackathon/organizadores/fabricio-chase.jpg',
    label: 'Organizador',
    role: 'Director de Hackathon'
  },
  {
    id: 'victoria',
    name: 'Victoria Paredes',
    photo: '/images/hackathon/organizadores/victoria-paredes.jpg',
    label: 'Organizadora',
    role: 'Directora de Hackathon'
  },
  {
    id: 'juan',
    name: 'Juan León',
    photo: '/images/hackathon/organizadores/juan-leon.jpg',
    label: 'Organizador',
    role: 'Director de Hackathon'
  }
]
</script>

<template>
  <section
    id="organizadores"
    class="hackathon-org-section"
  >
    <div class="hackathon-org-container">
      <div class="hackathon-org-header">
        <div class="hackathon-org-title-line" />
        <h2 class="hackathon-org-title">
          Organizadores
        </h2>
        <p class="hackathon-org-subtitle">
          El equipo detrás del Hackathon INNOTEC 2026
        </p>
      </div>

      <div
        class="hackathon-org-cards-grid"
        aria-label="Organizadores del Hackathon INNOTEC 2026"
      >
        <article
          v-for="org in organizadores"
          :key="org.id"
          class="hackathon-org-card"
        >
          <div class="hackathon-org-card-media">
            <div class="hackathon-org-card-light" />
            <img
              :src="org.photo"
              :alt="org.name"
              class="hackathon-org-card-image"
              width="1150"
              height="1550"
              loading="eager"
              decoding="async"
            >
          </div>

          <div class="hackathon-org-card-content">
            <span class="hackathon-org-card-kicker">{{ org.label }}</span>
            <h3 class="hackathon-org-card-name">
              {{ org.name }}
            </h3>
            <p class="hackathon-org-card-role">
              {{ org.role }}
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style src="~/assets/css/components/hackathon-organizadores.css"></style>
