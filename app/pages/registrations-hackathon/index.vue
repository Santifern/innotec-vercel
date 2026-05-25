<script setup lang="ts">
definePageMeta({
  colorMode: 'dark',
  layout: 'default',
})

useSeoMeta({
  title: 'Inscripcion Hackathon 2026',
  description: 'Formulario de inscripcion para participar del Hackathon 2026.'
})

const registration = {
  title: 'Inscripcion Hackathon 2026',
  description: 'Completa el formulario para registrar tu participacion o la de tu equipo en el Hackathon 2026.',
  date: 'Fecha pendiente de confirmacion',
  cost: 'Costo pendiente de confirmacion',
  formUrl: ''
} as const

function getGoogleFormEmbedUrl(url: string) {
  if (!url) {
    return ''
  }

  try {
    const parsedUrl = new URL(url)
    parsedUrl.searchParams.set('embedded', 'true')
    return parsedUrl.toString()
  } catch {
    return url
  }
}
</script>

<template>
  <div class="registration-page">
    <section class="registration-hero">
      <div class="registration-shell">
        <NuxtLink
          to="/"
          class="registration-back-link"
        >
          <span aria-hidden="true">&lt;-</span>
          Volver al inicio
        </NuxtLink>

        <div class="registration-heading">
          <h1>{{ registration.title }}</h1>
          <p>
            {{ registration.description }}
          </p>
        </div>
      </div>
    </section>

    <section class="registration-content">
      <div class="registration-shell registration-layout">
        <div class="registration-summary">
          <dl class="registration-facts">
            <div>
              <dt>Fecha</dt>
              <dd>{{ registration.date }}</dd>
            </div>
            <div>
              <dt>Costo</dt>
              <dd>{{ registration.cost }}</dd>
            </div>
          </dl>
        </div>

        <div class="registration-form-frame">
          <iframe
            v-if="registration.formUrl"
            :src="getGoogleFormEmbedUrl(registration.formUrl)"
            title="Formulario de inscripcion Hackathon 2026"
            loading="lazy"
          />

          <div
            v-else
            class="registration-form-placeholder"
          >
            <p class="registration-placeholder-title">
              Formulario pendiente
            </p>
            <p>
              El formulario de Google para Hackathon 2026 se publicara en este espacio.
            </p>
          </div>
        </div>

        <a
          v-if="registration.formUrl"
          :href="registration.formUrl"
          class="registration-external-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Abrir formulario en otra pestana
        </a>
      </div>
    </section>
  </div>
</template>

<style scoped>
.registration-page {
  min-height: 100vh;
  background:
    radial-gradient(ellipse at 18% 10%, rgba(217, 70, 239, 0.2), transparent 34%),
    radial-gradient(ellipse at 82% 18%, rgba(25, 68, 240, 0.16), transparent 32%),
    #080C16;
  color: #F3F6FE;
}

.registration-shell {
  width: min(100%, 1040px);
  margin-inline: auto;
  padding-inline: clamp(1.25rem, 4vw, 2rem);
}

.registration-hero {
  padding: clamp(6.5rem, 12vw, 9rem) 0 clamp(2.5rem, 6vw, 4rem);
}

.registration-back-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
  color: rgba(203, 209, 251, 0.86);
  font-family: 'Fractul Regular', 'Fractul', 'Inter', system-ui, sans-serif;
  font-size: 0.95rem;
  text-decoration: none;
  transition: color 0.2s ease, transform 0.2s ease;
}

.registration-back-link:hover {
  color: #F3F6FE;
  transform: translateX(-0.2rem);
}

.registration-heading {
  max-width: 780px;
}

.registration-kicker {
  margin: 0 0 0.75rem;
  color: #F0A7FF;
  font-family: 'Fractul Black', 'Fractul', 'Inter', system-ui, sans-serif;
  font-size: 0.82rem;
  font-weight: 900;
  letter-spacing: 0;
  text-transform: uppercase;
}

.registration-heading h1 {
  margin: 0;
  font-family: 'Fractul Black', 'Fractul', 'Inter', system-ui, sans-serif;
  font-size: clamp(2.75rem, 8vw, 5.7rem);
  font-weight: 900;
  line-height: 1;
  letter-spacing: 0;
}

.registration-heading p:last-child {
  margin: 1.1rem 0 0;
  max-width: 640px;
  color: rgba(224, 229, 255, 0.82);
  font-family: 'Fractul Regular', 'Fractul', 'Inter', system-ui, sans-serif;
  font-size: clamp(1rem, 1.6vw, 1.15rem);
  line-height: 1.65;
}

.registration-content {
  padding: 0 0 clamp(4rem, 8vw, 6rem);
}

.registration-layout {
  display: grid;
  gap: 1rem;
}

.registration-summary {
  padding: clamp(1.25rem, 3vw, 1.6rem);
  background: rgba(13, 20, 40, 0.7);
  border: 1px solid rgba(217, 70, 239, 0.24);
  border-radius: 8px;
  backdrop-filter: blur(18px);
}

.registration-facts {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;
  margin: 0;
}

.registration-facts div {
  padding: 0.9rem 1rem;
  background: rgba(8, 12, 22, 0.64);
  border: 1px solid rgba(203, 209, 251, 0.12);
  border-radius: 8px;
}

.registration-facts dt {
  color: rgba(240, 167, 255, 0.92);
  font-family: 'Fractul Black', 'Fractul', 'Inter', system-ui, sans-serif;
  font-size: 0.76rem;
  font-weight: 900;
  text-transform: uppercase;
}

.registration-facts dd {
  margin: 0.28rem 0 0;
  color: #F3F6FE;
  font-size: 0.98rem;
}

.registration-form-frame {
  min-height: clamp(36rem, 78vh, 54rem);
  overflow: hidden;
  background: rgba(243, 246, 254, 0.98);
  border: 1px solid rgba(203, 209, 251, 0.22);
  border-radius: 8px;
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.34);
}

.registration-form-frame iframe {
  display: block;
  width: 100%;
  height: clamp(36rem, 78vh, 54rem);
  border: 0;
}

.registration-form-placeholder {
  display: grid;
  place-content: center;
  min-height: clamp(36rem, 78vh, 54rem);
  padding: 2rem;
  color: #0D1428;
  text-align: center;
}

.registration-placeholder-title {
  margin: 0 0 0.6rem;
  font-family: 'Fractul Black', 'Fractul', 'Inter', system-ui, sans-serif;
  font-size: clamp(1.65rem, 4vw, 2.4rem);
  font-weight: 900;
}

.registration-form-placeholder p:last-child {
  margin: 0;
  max-width: 28rem;
  color: rgba(13, 20, 40, 0.72);
  line-height: 1.55;
}

.registration-external-link {
  justify-self: start;
  display: inline-flex;
  align-items: center;
  min-height: 2.75rem;
  padding: 0.75rem 1rem;
  color: #061954;
  background: #FFFFFF;
  border-radius: 8px;
  font-family: 'Fractul Black', 'Fractul', 'Inter', system-ui, sans-serif;
  font-weight: 900;
  text-decoration: none;
}

@media (min-width: 760px) {
  .registration-facts {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>
