<script setup lang="ts">
definePageMeta({
  colorMode: 'dark'
})

useSeoMeta({
  title: 'Inscripciones - INNOTEC 2026',
  description: 'Inscripciones para INNOTEC 2026 y Hackathon 2026.'
})

const registrationOptions = [
  {
    id: 'innotec',
    eyebrow: 'Congreso',
    title: 'INNOTEC 2026',
    description: 'Registro para participar del congreso, sus charlas, talleres y visitas tecnicas.',
    date: '20 de agosto, 2026',
    cost: 'Costo pendiente de confirmacion',
    formUrl: ''
  },
  {
    id: 'hackathon',
    eyebrow: 'Competencia',
    title: 'Hackathon 2026',
    description: 'Registro para equipos y participantes del hackathon asociado a INNOTEC 2026.',
    date: 'Fecha pendiente de confirmacion',
    cost: 'Costo pendiente de confirmacion',
    formUrl: ''
  }
] as const

const activeRegistrationId = ref<(typeof registrationOptions)[number]['id']>('innotec')

const activeRegistration = computed(() => {
  return registrationOptions.find(option => option.id === activeRegistrationId.value) ?? registrationOptions[0]
})

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
          <span aria-hidden="true">←</span>
          Volver al inicio
        </NuxtLink>

        <div class="registration-heading">
          <p class="registration-kicker">
            Inscripciones
          </p>
          <h1>Elegi tu modalidad de registro</h1>
          <p>
            Selecciona INNOTEC o Hackathon para completar el formulario correspondiente.
          </p>
        </div>
      </div>
    </section>

    <section class="registration-content">
      <div class="registration-shell registration-layout">
        <aside
          class="registration-options"
          aria-label="Tipos de inscripcion"
        >
          <button
            v-for="option in registrationOptions"
            :key="option.id"
            type="button"
            class="registration-option"
            :class="{ active: activeRegistrationId === option.id }"
            @click="activeRegistrationId = option.id"
          >
            <span class="registration-option-eyebrow">{{ option.eyebrow }}</span>
            <span class="registration-option-title">{{ option.title }}</span>
            <span class="registration-option-description">{{ option.description }}</span>
          </button>
        </aside>

        <div class="registration-detail">
          <div class="registration-summary">
            <div>
              <p class="registration-kicker">
                {{ activeRegistration.eyebrow }}
              </p>
              <h2>{{ activeRegistration.title }}</h2>
              <p>{{ activeRegistration.description }}</p>
            </div>

            <dl class="registration-facts">
              <div>
                <dt>Fecha</dt>
                <dd>{{ activeRegistration.date }}</dd>
              </div>
              <div>
                <dt>Costo</dt>
                <dd>{{ activeRegistration.cost }}</dd>
              </div>
            </dl>
          </div>

          <div class="registration-form-frame">
            <iframe
              v-if="activeRegistration.formUrl"
              :src="getGoogleFormEmbedUrl(activeRegistration.formUrl)"
              :title="`Formulario de inscripcion - ${activeRegistration.title}`"
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
                El formulario de Google para {{ activeRegistration.title }} se publicara en este espacio.
              </p>
            </div>
          </div>

          <a
            v-if="activeRegistration.formUrl"
            :href="activeRegistration.formUrl"
            class="registration-external-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Abrir formulario en otra pestana
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.registration-page {
  min-height: 100vh;
  background:
    radial-gradient(ellipse at 18% 10%, rgba(25, 68, 240, 0.24), transparent 34%),
    radial-gradient(ellipse at 82% 18%, rgba(217, 70, 239, 0.14), transparent 32%),
    #080C16;
  color: #F3F6FE;
}

.registration-shell {
  width: min(100%, 1120px);
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
  max-width: 760px;
}

.registration-kicker {
  margin: 0 0 0.75rem;
  color: #67A4FF;
  font-family: 'Fractul Black', 'Fractul', 'Inter', system-ui, sans-serif;
  font-size: 0.82rem;
  font-weight: 900;
  letter-spacing: 0;
  text-transform: uppercase;
}

.registration-heading h1,
.registration-summary h2 {
  margin: 0;
  font-family: 'Fractul Black', 'Fractul', 'Inter', system-ui, sans-serif;
  font-weight: 900;
  line-height: 1;
  letter-spacing: 0;
}

.registration-heading h1 {
  font-size: clamp(2.9rem, 8vw, 5.8rem);
}

.registration-heading p:last-child,
.registration-summary p {
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
  grid-template-columns: 1fr;
  gap: 1.25rem;
}

.registration-options {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.85rem;
}

.registration-option {
  display: grid;
  gap: 0.45rem;
  min-height: 9.25rem;
  padding: 1.1rem;
  color: inherit;
  text-align: left;
  background:
    linear-gradient(135deg, rgba(16, 45, 122, 0.46), rgba(8, 20, 54, 0.54)),
    rgba(7, 12, 28, 0.62);
  border: 1px solid rgba(38, 117, 255, 0.28);
  border-radius: 8px;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(243, 246, 254, 0.06);
  transition: border-color 0.24s ease, box-shadow 0.24s ease, transform 0.24s ease;
}

.registration-option:hover,
.registration-option.active {
  border-color: rgba(55, 230, 241, 0.62);
  box-shadow: 0 0 28px rgba(25, 68, 240, 0.22), inset 0 1px 0 rgba(243, 246, 254, 0.08);
  transform: translateY(-2px);
}

.registration-option-eyebrow {
  color: #67A4FF;
  font-size: 0.78rem;
  font-family: 'Fractul Black', 'Fractul', 'Inter', system-ui, sans-serif;
  font-weight: 900;
  text-transform: uppercase;
}

.registration-option-title {
  font-family: 'Fractul Black', 'Fractul', 'Inter', system-ui, sans-serif;
  font-size: 1.35rem;
  font-weight: 900;
  line-height: 1.1;
}

.registration-option-description {
  color: rgba(203, 209, 251, 0.78);
  font-size: 0.95rem;
  line-height: 1.45;
}

.registration-detail {
  display: grid;
  gap: 1rem;
  min-width: 0;
}

.registration-summary {
  display: grid;
  gap: 1.25rem;
  padding: clamp(1.25rem, 3vw, 1.6rem);
  background: rgba(13, 20, 40, 0.7);
  border: 1px solid rgba(25, 68, 240, 0.24);
  border-radius: 8px;
  backdrop-filter: blur(18px);
}

.registration-summary h2 {
  font-size: clamp(2rem, 4vw, 3.25rem);
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
  color: rgba(123, 138, 247, 0.92);
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
  .registration-options {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .registration-summary {
    grid-template-columns: minmax(0, 1fr) minmax(15rem, 0.42fr);
  }
}

@media (min-width: 1024px) {
  .registration-layout {
    grid-template-columns: minmax(17rem, 0.34fr) minmax(0, 0.66fr);
    align-items: start;
  }

  .registration-options {
    position: sticky;
    top: 6.5rem;
    grid-template-columns: 1fr;
  }
}
</style>
