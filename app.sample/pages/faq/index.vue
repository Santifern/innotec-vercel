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

definePageMeta({
  colorMode: 'dark'
})

useSeoMeta({
  title: 'FAQ - INNOTEC 2026',
  ogTitle: 'FAQ - INNOTEC 2026',
  description: 'Preguntas frecuentes sobre INNOTEC 2026.',
  ogDescription: 'Preguntas frecuentes sobre INNOTEC 2026.'
})
</script>

<template>
  <section
    id="faq"
    class="relative z-[2] overflow-hidden isolate py-[clamp(3rem,6vw,5.5rem)] px-[clamp(1.25rem,4vw,3rem)]"
  >
    <div class="absolute -z-10 -top-[10%] -right-[20%] w-[clamp(28rem,55vw,50rem)] h-[clamp(28rem,55vw,50rem)] rounded-full bg-[radial-gradient(circle,rgba(25,68,240,0.13)_0%,rgba(25,68,240,0.06)_44%,transparent_70%)] blur-[72px] pointer-events-none" />

    <div class="max-w-[860px] mx-auto">
      <div class="text-center mb-[clamp(2.5rem,5vw,3.75rem)]">
        <h1 class="text-[clamp(1.9rem,4.5vw,2.75rem)] font-black text-[#F3F6FE] m-0 mb-[0.75rem] leading-[1.1] tracking-normal">
          Preguntas frecuentes
        </h1>
        <p class="text-[1rem] font-normal leading-[1.7] text-[rgba(203,209,251,0.65)] max-w-[480px] mx-auto">
          Todo lo que necesitás saber sobre INNOTEC 2026.
        </p>
      </div>

      <div class="flex flex-col gap-0 border-t border-[rgba(25,68,240,0.18)]">
        <div
          v-for="(item, index) in faqItems"
          :key="item.question"
          ref="faqRevealElements"
          class="transition-all duration-700 ease-out opacity-0 translate-y-6"
          :class="{ 'opacity-100 translate-y-0': visibleFaqItems[index] }"
          :style="{ transitionDelay: `${Math.min(index, 3) * 0.05}s` }"
        >
          <div
            class="group relative border-b border-[rgba(25,68,240,0.18)] transition-colors duration-250 ease-in-out"
            :class="{ 'border-[rgba(25,68,240,0.32)]': openIndex === index }"
            @pointermove="updateFaqHover"
            @pointerleave="resetFaqHover"
          >
            <!-- Flashlight hover effect -->
            <div 
              class="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style="background: radial-gradient(600px circle at var(--faq-hover-x, 50%) var(--faq-hover-y, 50%), rgba(25,68,240,0.06), transparent 40%);"
            />

            <button
              class="flex items-center justify-between gap-5 w-full py-5 px-1 bg-transparent border-none cursor-pointer text-left outline-none"
              type="button"
              :aria-expanded="openIndex === index"
              :aria-controls="`faq-answer-${index}`"
              @click="toggle(index)"
            >
              <span class="text-[clamp(0.925rem,1.4vw,1.04rem)] font-black leading-[1.45] text-[rgba(243,246,254,0.88)] transition-colors duration-200 group-hover:text-[#F3F6FE]"
                :class="{ 'text-[#F3F6FE]': openIndex === index }"
              >
                {{ item.question }}
              </span>

              <!-- Icon -->
              <span class="flex items-center justify-center shrink-0 w-7 h-7 rounded-md border border-[rgba(25,68,240,0.28)] bg-[rgba(25,68,240,0.08)] text-[rgba(25,68,240,0.7)] transition-all duration-300 group-hover:border-[rgba(25,68,240,0.46)] group-hover:bg-[rgba(25,68,240,0.08)] group-hover:text-[#1944F0]"
                :class="{ 'rotate-180 border-[rgba(25,68,240,0.56)] bg-[rgba(25,68,240,0.1)] text-[#1944F0]': openIndex === index }"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </span>
            </button>

            <div
              :id="`faq-answer-${index}`"
              class="overflow-hidden transition-all duration-500 ease-in-out"
              :style="{ maxHeight: openIndex === index ? '400px' : '0px', opacity: openIndex === index ? 1 : 0 }"
            >
              <div class="pb-[1.35rem]">
                <p class="text-[clamp(0.9rem,1.2vw,0.975rem)] font-normal leading-[1.72] text-[rgba(203,209,251,0.72)] m-0 pl-4 border-l-2 border-[rgba(25,68,240,0.42)]">
                  {{ item.answer }}
                </p>
                <NuxtLink
                  v-if="item.link"
                  :to="item.link.to"
                  class="inline-block mt-3 ml-4 text-[0.9rem] font-bold text-[#1944F0] hover:text-[#F3F6FE] transition-colors"
                >
                  {{ item.link.label }}
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
