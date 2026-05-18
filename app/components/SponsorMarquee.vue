<script setup lang="ts">
const smoothEase = [0.22, 1, 0.36, 1] as [number, number, number, number]
const scrollInViewOptions = { once: true, amount: 0.3, margin: '0px 0px -12% 0px' as const }

function scrollMotion(delay: number = 0) {
  return {
    initial: { opacity: 0, y: 18 },
    whileInView: { opacity: 1, y: 0 },
    inViewOptions: scrollInViewOptions,
    transition: { duration: 0.48, delay, ease: smoothEase }
  }
}

const sponsorLogos = [
  {
    name: 'Itaú',
    src: '/logos/itau.svg',
    width: 300,
    height: 304
  },
  {
    name: 'Sudameris',
    src: '/logos/sudameris.svg',
    width: 253,
    height: 36
  },
  {
    name: 'VMA',
    src: '/logos/vma.svg',
    width: 369,
    height: 55
  },
  {
    name: 'Ferropar',
    src: '/logos/ferropar.svg',
    width: 608,
    height: 121
  },
  {
    name: 'Tecinci',
    src: '/logos/tecinci.svg',
    width: 200,
    height: 64
  },
  {
    name: 'L\'Acerie',
    src: '/logos/lacerie.svg',
    width: 258,
    height: 72
  },
  {
    name: 'SODEP',
    src: '/logos/sodep.svg',
    width: 450,
    height: 108
  },
  {
    name: 'Fabripar',
    src: '/logos/fabripar.svg',
    width: 355,
    height: 94
  },
  {
    name: 'Galvamax',
    src: '/logos/galvamax.svg',
    width: 828,
    height: 190
  }
]
</script>

<template>
  <section
    class="sponsor-marquee pb-6 pt-10 md:pb-8 md:pt-14"
    aria-labelledby="sponsor-marquee-title"
  >
    <div class="mx-auto w-full max-w-7xl px-5 sm:px-8">
      <Motion
        v-bind="scrollMotion()"
        class="mb-10 md:mb-12"
      >
        <h2
          id="sponsor-marquee-title"
          class="text-center text-4xl font-extrabold text-[#F3F6FE] md:text-5xl"
        >
          Empresas que confían en nosotros
        </h2>
      </Motion>

      <Motion
        v-bind="scrollMotion(0.08)"
        class="sponsor-marquee__viewport relative overflow-hidden"
      >
        <div class="sponsor-marquee__fade sponsor-marquee__fade--left" />
        <div class="sponsor-marquee__fade sponsor-marquee__fade--right" />

        <div class="sponsor-marquee__track flex w-max">
          <div
            v-for="loopIndex in 2"
            :key="loopIndex"
            class="sponsor-marquee__group flex shrink-0 items-center gap-10 pr-10 sm:gap-14 sm:pr-14 lg:gap-20 lg:pr-20"
            :aria-hidden="loopIndex === 2"
          >
            <a
              v-for="logo in sponsorLogos"
              :key="`${loopIndex}-${logo.name}`"
              href="#"
              class="group flex h-24 min-w-44 items-center justify-center sm:h-28 sm:min-w-52 lg:h-32 lg:min-w-60"
              :aria-label="logo.name"
            >
              <NuxtImg
                :src="logo.src"
                :alt="logo.name"
                :width="logo.width"
                :height="logo.height"
                class="h-auto max-h-[4.5rem] w-auto max-w-[13rem] object-contain grayscale opacity-70 transition-[filter,opacity] duration-200 group-hover:grayscale-0 group-hover:opacity-100 sm:max-h-20 sm:max-w-[16rem] lg:max-h-24 lg:max-w-[19rem]"
                :loading="loopIndex === 1 ? 'eager' : 'lazy'"
                decoding="async"
              >
            </a>
          </div>
        </div>
      </Motion>
    </div>
  </section>
</template>

<style scoped>
.sponsor-marquee {
  position: relative;
  z-index: 2;
  background: transparent;
}

.sponsor-marquee__viewport {
  mask-image: linear-gradient(90deg, transparent 0%, black 12%, black 88%, transparent 100%);
}

.sponsor-marquee__track {
  animation: sponsor-marquee-scroll 32s linear infinite;
  will-change: transform;
}

.sponsor-marquee__viewport:hover .sponsor-marquee__track {
  animation-play-state: paused;
}

.sponsor-marquee__fade {
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 2;
  width: min(7rem, 18vw);
  pointer-events: none;
}

.sponsor-marquee__fade--left {
  left: 0;
  background: linear-gradient(90deg, #080C16 0%, rgba(8, 12, 22, 0.72) 42%, rgba(8, 12, 22, 0) 100%);
}

.sponsor-marquee__fade--right {
  right: 0;
  background: linear-gradient(270deg, #080C16 0%, rgba(8, 12, 22, 0.72) 42%, rgba(8, 12, 22, 0) 100%);
}

@keyframes sponsor-marquee-scroll {
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    transform: translate3d(-50%, 0, 0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .sponsor-marquee__track {
    animation: none;
  }
}
</style>
