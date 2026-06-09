<script setup lang="ts">
interface Organizadora {
  id: string
  name: string
  photo: string
  role: string
}

const organizadoras: Organizadora[] = [
  {
    id: 'eugenia',
    name: 'Ma. Eugenia Pointis',
    photo: '/images/innotec/organizadores/eugenia-pointis-upright.jpg',
    role: 'Directora general'
  },
  {
    id: 'amelia',
    name: 'Amelia Nery Huerta',
    photo: '/images/innotec/organizadores/amelia-huerta-upright.jpg',
    role: 'Directora general'
  }
]
</script>

<template>
  <section
    id="organizadores"
    class="org-section"
  >
    <div class="org-container">
      <div class="org-header">
        <div class="org-title-line" />
        <h3 class="org-title">
          Organizadoras
        </h3>
        <p class="org-subtitle">
          El equipo detrás de INNOTEC 2026
        </p>
      </div>

      <div
        class="org-cards-grid"
        aria-label="Organizadoras de INNOTEC 2026"
      >
        <article
          v-for="org in organizadoras"
          :key="org.id"
          class="org-card"
        >
          <div class="org-card-media">
            <div class="org-card-light" />
            <img
              :src="org.photo"
              :alt="org.name"
              class="org-card-image"
              width="1150"
              height="1550"
              loading="eager"
              decoding="async"
            >
          </div>

          <div class="org-card-content">
            <span class="org-card-kicker">Organizadora</span>
            <h4 class="org-card-name">
              {{ org.name }}
            </h4>
            <p class="org-card-role">
              {{ org.role }}
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style src="~/assets/css/components/innotec-organizadores.css"></style>
