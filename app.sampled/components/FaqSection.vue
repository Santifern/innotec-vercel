<script setup lang="ts">
function updateFaqHover(event: PointerEvent) {
  const target = event.currentTarget as HTMLElement
  const rect = target.getBoundingClientRect()

  target.style.setProperty('--faq-hover-x', `${event.clientX - rect.left}px`)
  target.style.setProperty('--faq-hover-y', `${event.clientY - rect.top}px`)
}

function resetFaqHover(event: PointerEvent) {
  const target = event.currentTarget as HTMLElement

  target.style.removeProperty('--faq-hover-x')
  target.style.removeProperty('--faq-hover-y')
}

interface FaqItem {
  question: string
  answer: string
  link?: {
    label: string
    to: string
  }
}

// ? CAMBIAR LAS PREGUNTAS DEL ARRAY CON LAS PREGUNTAS Y RESPUESTAS REALES
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
const visibleFaqItems = ref<boolean[]>(faqItems.map(() => false))
const faqRevealElements = ref<HTMLElement[]>([])
let faqRevealObserver: IntersectionObserver | null = null

function revealFaqItem(index: number) {
  visibleFaqItems.value = visibleFaqItems.value.map((visible, itemIndex) => visible || itemIndex === index)
}

onMounted(async () => {
  await nextTick()

  if (!('IntersectionObserver' in window)) {
    visibleFaqItems.value = faqItems.map(() => true)
    return
  }

  faqRevealObserver = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) {
        continue
      }

      const index = Number((entry.target as HTMLElement).dataset.faqIndex)

      if (Number.isInteger(index)) {
        revealFaqItem(index)
        faqRevealObserver?.unobserve(entry.target)
      }
    }
  }, {
    threshold: 0.32,
    rootMargin: '0px 0px -24% 0px'
  })

  faqRevealElements.value.forEach((element, index) => {
    element.dataset.faqIndex = String(index)
    faqRevealObserver?.observe(element)
  })
})

onBeforeUnmount(() => {
  faqRevealObserver?.disconnect()
  faqRevealObserver = null
})

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
      <div class="faq-header">
        <span class="section-label">¿Tenés dudas?</span>
        <h2 class="section-title">
          Preguntas frecuentes
        </h2>
        <p class="section-description">
          Todo lo que necesitás saber sobre el INNOTEC 2026 antes de inscribirte.
        </p>
      </div>

      <div class="faq-list">
        <div
          v-for="(item, index) in faqItems"
          :key="item.question"
          ref="faqRevealElements"
          class="faq-motion-item"
          :class="{ 'faq-motion-item--visible': visibleFaqItems[index] }"
          :style="{ '--faq-reveal-delay': `${Math.min(index, 3) * 0.05}s` }"
        >
          <div
            class="faq-item"
            :class="{ 'faq-item--open': openIndex === index }"
            @pointermove="updateFaqHover"
            @pointerleave="resetFaqHover"
          >
            <button
              class="faq-trigger"
              type="button"
              :aria-expanded="openIndex === index"
              :aria-controls="`faq-answer-${index}`"
              @click="toggle(index)"
            >
              <span class="faq-question">{{ item.question }}</span>
            </button>

            <div
              :id="`faq-answer-${index}`"
              class="faq-body"
              :class="{ 'faq-body--open': openIndex === index }"
            >
              <div class="faq-body-inner">
                <p class="faq-answer">
                  {{ item.answer }}
                </p>
                <NuxtLink
                  v-if="item.link"
                  :to="item.link.to"
                  class="faq-link"
                >
                  <span>{{ item.link.label }}</span>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped src="~/assets/css/components/innotec-faq-section.css"></style>
