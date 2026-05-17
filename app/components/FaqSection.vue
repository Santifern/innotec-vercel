<script setup lang="ts">
const smoothEase = [0.22, 1, 0.36, 1] as [number, number, number, number]
const scrollInViewOptions = { once: true, amount: 0.28, margin: '0px 0px -12% 0px' as const }

function scrollMotion(delay: number = 0) {
  return {
    initial: { opacity: 0, y: 34, filter: 'blur(8px)' },
    whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
    inViewOptions: scrollInViewOptions,
    transition: { duration: 0.82, delay, ease: smoothEase }
  }
}

function staggerMotion(index: number = 0) {
  return {
    initial: { opacity: 0, y: 20, filter: 'blur(4px)' },
    whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
    inViewOptions: scrollInViewOptions,
    transition: { duration: 0.62, delay: index * 0.07, ease: smoothEase }
  }
}

interface FaqItem {
  question: string
  answer: string
}

//? CAMBIAR LAS PREGUNTAS DEL ARRAY CON LAS PREGUNTAS Y RESPUESTAS REALES
const faqItems: FaqItem[] = [
  {
    question: '¿Quién puede asistir al INNOTEC 2026?',
    answer: 'El INNOTEC está abierto a estudiantes universitarios de cualquier institución, así como a profesionales y personas interesadas en las áreas de Tecnología, Ingeniería, Arquitectura y Diseño. ¡Todos son bienvenidos!'
  },
  {
    question: '¿Cuándo y dónde se realizará el evento?',
    answer: 'El INNOTEC 2026 se realizará el 20 de agosto de 2026 en Asunción, Paraguay. La ubicación exacta del venue será anunciada próximamente a través de nuestras redes sociales.'
  },
  {
    question: '¿Tiene costo la inscripción?',
    answer: 'La inscripción es completamente gratuita para todos los asistentes. Solo es necesario registrarse a través del formulario de inscripción para asegurar tu lugar, ya que los cupos son limitados.'
  },
  {
    question: '¿Cómo me inscribo al evento?',
    answer: 'Podés inscribirte haciendo clic en el botón "Inscribete ahora" en esta página. Completá el formulario con tus datos y recibirás una confirmación por correo electrónico con toda la información necesaria.'
  },
  {
    question: '¿Cuáles son las actividades del INNOTEC?',
    answer: 'El INNOTEC ofrece tres tipos de actividades: Charlas con expertos nacionales e internacionales que comparten las últimas tendencias en tecnología, Talleres interactivos donde aprenderás herramientas y técnicas aplicadas, y Visitas Técnicas a empresas e instalaciones referentes del sector tecnológico.'
  },
  {
    question: '¿Se entrega certificado de asistencia?',
    answer: 'Sí, todos los asistentes que completen el evento recibirán un certificado digital de asistencia emitido por la Facultad de Ciencias y Tecnología de la Universidad Católica del Paraguay.'
  },
  {
    question: '¿Puedo asistir si no soy estudiante de la UCA?',
    answer: 'Por supuesto. El INNOTEC es un evento abierto a la comunidad. No es necesario ser estudiante de la UCA para participar. Aceptamos estudiantes de cualquier universidad y también profesionales que quieran ser parte de la experiencia.'
  }
]

const openIndex = ref<number | null>(null)

function toggle(index: number) {
  openIndex.value = openIndex.value === index ? null : index
}
</script>

<template>
  <section
    id="faq"
    class="innotec-section faq-section"
  >
    <div class="faq-bg-glow" />

    <div class="section-container">
      <Motion
        v-bind="scrollMotion()"
        class="faq-header"
      >
        <span class="section-label">¿Tenés dudas?</span>
        <h2 class="section-title">
          Preguntas frecuentes
        </h2>
        <p class="section-description">
          Todo lo que necesitás saber sobre el INNOTEC 2026 antes de inscribirte.
        </p>
      </Motion>

      <div class="faq-list">
        <Motion
          v-for="(item, index) in faqItems"
          :key="item.question"
          v-bind="staggerMotion(index)"
        >
          <div
            class="faq-item"
            :class="{ 'faq-item--open': openIndex === index }"
          >
            <button
              class="faq-trigger"
              :aria-expanded="openIndex === index"
              @click="toggle(index)"
            >
              <span class="faq-question">{{ item.question }}</span>
              <span
                class="faq-icon"
                aria-hidden="true"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </span>
            </button>

            <div
              class="faq-body"
              :style="{ maxHeight: openIndex === index ? '400px' : '0px' }"
            >
              <p class="faq-answer">
                {{ item.answer }}
              </p>
            </div>
          </div>
        </Motion>
      </div>
    </div>
  </section>
</template>

<style scoped>
.faq-section {
  position: relative;
  z-index: 2;
  overflow: hidden;
  isolation: isolate;
  padding-top: clamp(3rem, 6vw, 5.5rem);
  padding-bottom: clamp(3rem, 6vw, 5.5rem);
  padding-inline: clamp(1.25rem, 4vw, 3rem);
}

.faq-bg-glow {
  position: absolute;
  z-index: -1;
  top: -10%;
  right: -20%;
  width: clamp(28rem, 55vw, 50rem);
  height: clamp(28rem, 55vw, 50rem);
  border-radius: 50%;
  background: radial-gradient(circle, rgba(25, 68, 240, 0.13) 0%, rgba(25, 68, 240, 0.06) 44%, transparent 70%);
  filter: blur(72px);
  pointer-events: none;
}

.section-container {
  max-width: 860px;
  margin: 0 auto;
}

.faq-header {
  text-align: center;
  margin-bottom: clamp(2.5rem, 5vw, 3.75rem);
}

.section-label {
  display: inline-block;
  font-size: 0.75rem;
  font-family: 'Fractul Black', 'Fractul', 'Inter', system-ui, sans-serif;
  font-weight: 900;
  color: #D946EF;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  margin-bottom: 0.75rem;
  text-shadow: 0 0 18px rgba(217, 70, 239, 0.3);
}

.section-title {
  font-family: 'Fractul Black', 'Fractul', 'Inter', system-ui, sans-serif;
  font-size: clamp(1.9rem, 4.5vw, 2.75rem);
  font-weight: 900;
  color: #F3F6FE;
  margin: 0 0 0.75rem;
  line-height: 1.1;
  letter-spacing: 0;
}

.section-description {
  font-family: 'Fractul Regular', 'Fractul', 'Inter', system-ui, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.7;
  color: rgba(203, 209, 251, 0.65);
  max-width: 480px;
  margin: 0 auto;
}

/* ===== FAQ LIST ===== */
.faq-list {
  display: flex;
  flex-direction: column;
  gap: 0;
  border-top: 1px solid rgba(123, 138, 247, 0.18);
}

/* ===== FAQ ITEM ===== */
.faq-item {
  border-bottom: 1px solid rgba(123, 138, 247, 0.18);
  transition: border-color 0.25s ease;
}

.faq-item--open {
  border-bottom-color: rgba(55, 230, 241, 0.32);
}

/* ===== FAQ TRIGGER ===== */
.faq-trigger {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.25rem;
  width: 100%;
  padding: 1.25rem 0.25rem;
  background: transparent;
  border: none;
  cursor: pointer;
  text-align: left;
  outline: none;
}

.faq-trigger:focus-visible .faq-question {
  color: #CBD1FB;
}

.faq-question {
  font-family: 'Fractul Black', 'Fractul', 'Inter', system-ui, sans-serif;
  font-size: clamp(0.925rem, 1.4vw, 1.04rem);
  font-weight: 900;
  color: rgba(243, 246, 254, 0.88);
  line-height: 1.45;
  transition: color 0.22s ease;
}

.faq-item--open .faq-question,
.faq-trigger:hover .faq-question {
  color: #F3F6FE;
}

.faq-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 1.75rem;
  height: 1.75rem;
  border-radius: 6px;
  border: 1px solid rgba(123, 138, 247, 0.28);
  background: rgba(25, 68, 240, 0.08);
  color: rgba(123, 138, 247, 0.7);
  transition: color 0.22s ease, border-color 0.22s ease, background 0.22s ease, transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.faq-icon svg {
  width: 1rem;
  height: 1rem;
}

.faq-trigger:hover .faq-icon {
  border-color: rgba(55, 230, 241, 0.46);
  background: rgba(55, 230, 241, 0.08);
  color: #37E6F1;
}

.faq-item--open .faq-icon {
  transform: rotate(180deg);
  border-color: rgba(55, 230, 241, 0.56);
  background: rgba(55, 230, 241, 0.1);
  color: #37E6F1;
}

/* ===== FAQ BODY ===== */
.faq-body {
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.42s cubic-bezier(0.22, 1, 0.36, 1);
}

.faq-answer {
  font-family: 'Fractul Regular', 'Fractul', 'Inter', system-ui, sans-serif;
  font-size: clamp(0.9rem, 1.2vw, 0.975rem);
  font-weight: 400;
  line-height: 1.72;
  color: rgba(203, 209, 251, 0.72);
  margin: 0;
  padding: 0 0.25rem 1.35rem;
  border-left: 2px solid rgba(55, 230, 241, 0.42);
  padding-left: 1rem;
}
</style>
