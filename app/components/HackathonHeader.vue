<script setup lang="ts">
import { motion } from 'motion-v'
import type { VariantType } from 'motion-v'

const nuxtApp = useNuxtApp()
const isScrolled = ref(false)
const mobileMenuOpen = ref(false)

// Navigation items for Hackathon
const items = computed(() => [
  {
    label: 'Acerca del Congreso',
    to: '#acerca',
    exactHash: true,
    active: false
  },
  {
    label: 'Ponencias y Tracks',
    to: '#actividades',
    exactHash: true,
    active: false
  },
  {
    label: 'Programa',
    to: undefined,
    exactHash: true,
    active: false
  },
  {
    label: 'Inscripción',
    to: '#inscripcion',
    exactHash: true,
    active: false
  },
  {
    label: 'Galería',
    to: undefined,
    exactHash: true,
    active: false
  },
  {
    label: 'FAQ',
    to: undefined,
    exactHash: true,
    active: false
  },
  {
    label: 'Innotec',
    to: '/',
    exactHash: false,
    active: false,
    isAction: true
  }
])

const desktopItems = computed(() => items.value.filter(item => !item.isAction))

nuxtApp.hooks.hookOnce('page:loading:end', () => {
  const updateScrolledState = () => {
    isScrolled.value = window.scrollY > 20
  }

  updateScrolledState()
  window.addEventListener('scroll', updateScrolledState, { passive: true })
  window.addEventListener('resize', updateScrolledState, { passive: true })
})

// Hamburger menu animation variants
const variants: Record<string, VariantType | ((custom: unknown) => VariantType)> = {
  normal: { rotate: 0, y: 0, opacity: 1 },
  close: (custom: unknown) => {
    const c = custom as number
    return {
      rotate: c === 1 ? 45 : c === 3 ? -45 : 0,
      y: c === 1 ? 6 : c === 3 ? -6 : 0,
      opacity: c === 2 ? 0 : 1,
      transition: { type: 'spring', stiffness: 260, damping: 20 }
    }
  }
}
</script>

<template>
  <header
    class="hackathon-navbar fixed top-0 left-0 right-0 z-50 transition-all duration-500"
    :class="isScrolled ? 'scrolled' : ''"
  >
    <!-- Top glow line -->
    <div class="navbar-glow-line" />

    <div class="navbar-container">
      <!-- Logo -->
      <NuxtLink
        to="/hackathon"
        class="navbar-logo-link"
        aria-label="Hackathon - Inicio"
      >
        <NuxtImg
          src="/logo-hackathon-navbar.svg"
          alt="HACKATHON"
          class="navbar-logo"
        />
      </NuxtLink>

      <!-- Desktop Navigation -->
      <nav
        class="navbar-nav-desktop"
        aria-label="Navegación principal"
      >
        <template
          v-for="item in desktopItems"
          :key="item.label"
        >
          <NuxtLink
            v-if="item.to"
            :to="item.to"
            class="navbar-nav-item"
            :class="{ active: item.active }"
          >
            {{ item.label }}
            <span class="nav-item-indicator" />
          </NuxtLink>
          <span
            v-else
            class="navbar-nav-item navbar-nav-item--static"
          >
            {{ item.label }}
            <span class="nav-item-indicator" />
          </span>
        </template>
      </nav>

      <div class="navbar-actions">
        <!-- Innotec button (desktop) -->
        <NuxtLink
          to="/"
          class="navbar-innotec-link"
          aria-label="Ir a Innotec"
        >
          <NuxtImg
            src="/logo-innotec-blanco.svg"
            alt="Innotec"
            class="navbar-innotec-logo"
          />
        </NuxtLink>

        <!-- Mobile menu button -->
        <button
          class="navbar-mobile-toggle"
          :class="{ active: mobileMenuOpen }"
          :aria-label="mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'"
          :aria-expanded="mobileMenuOpen"
          @click="mobileMenuOpen = !mobileMenuOpen"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="size-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <motion.line
              x1="4"
              y1="6"
              x2="20"
              y2="6"
              :variants="variants"
              :animate="mobileMenuOpen ? 'close' : 'normal'"
              :custom="1"
              class="outline-none"
            />
            <motion.line
              x1="4"
              y1="12"
              x2="20"
              y2="12"
              :variants="variants"
              :animate="mobileMenuOpen ? 'close' : 'normal'"
              :custom="2"
              class="outline-none"
            />
            <motion.line
              x1="4"
              y1="18"
              x2="20"
              y2="18"
              :variants="variants"
              :animate="mobileMenuOpen ? 'close' : 'normal'"
              :custom="3"
              class="outline-none"
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <Transition name="mobile-menu">
      <div
        v-if="mobileMenuOpen"
        class="navbar-mobile-menu"
      >
        <nav
          class="mobile-nav"
          aria-label="Navegación móvil"
        >
          <template
            v-for="item in items"
            :key="item.label"
          >
            <NuxtLink
              v-if="item.to"
              :to="item.to"
              class="mobile-nav-item"
              :class="{ active: item.active, 'mobile-nav-item--innotec': item.isAction }"
              @click="mobileMenuOpen = false"
            >
              {{ item.label }}
            </NuxtLink>
            <span
              v-else
              class="mobile-nav-item mobile-nav-item--static"
            >
              {{ item.label }}
            </span>
          </template>
        </nav>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
/* ===== NAVBAR BASE ===== */
.hackathon-navbar {
  font-family: 'Fractul Regular', 'Fractul', 'Inter', system-ui, sans-serif;
  font-weight: 400;
  isolation: isolate;
}

/* Navbar background: transparent → glass on scroll */
.hackathon-navbar {
  background:
    linear-gradient(180deg, rgba(8, 12, 22, 0.78) 0%, rgba(8, 12, 22, 0.48) 62%, rgba(8, 12, 22, 0.08) 100%);
  backdrop-filter: blur(18px) saturate(140%);
  -webkit-backdrop-filter: blur(18px) saturate(140%);
  border-bottom: 1px solid rgba(163, 114, 248, 0.14);
  box-shadow: 0 10px 36px rgba(0, 0, 0, 0.18);
}

.hackathon-navbar.scrolled {
  background:
    linear-gradient(180deg, rgba(8, 12, 22, 0.94) 0%, rgba(8, 12, 22, 0.82) 100%);
  backdrop-filter: blur(24px) saturate(155%);
  -webkit-backdrop-filter: blur(24px) saturate(155%);
  border-bottom: 1px solid rgba(163, 114, 248, 0.2);
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.32);
}

.hackathon-navbar::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  background:
    radial-gradient(ellipse at 18% 0%, rgba(163, 114, 248, 0.22), transparent 42%),
    radial-gradient(ellipse at 82% 0%, rgba(187, 153, 248, 0.16), transparent 38%);
  filter: blur(22px);
  opacity: 0.72;
}

.hackathon-navbar.scrolled::before {
  opacity: 0.9;
}

/* Top glow line */
.navbar-glow-line {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(163, 114, 248, 0.8), rgba(187, 153, 248, 0.6), rgba(163, 114, 248, 0.8), transparent);
  opacity: 0;
  transition: opacity 0.5s ease;
}

.hackathon-navbar.scrolled .navbar-glow-line {
  opacity: 1;
}

/* Container */
.navbar-container {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0.75rem 1.5rem;
  gap: 1rem;
}

@media (min-width: 1024px) {
  .navbar-container {
    padding: 0.75rem 2rem;
  }
}

@media (max-width: 640px) {
  .navbar-container {
    padding: 0.6rem 1rem;
    gap: 0.5rem;
  }
}

/* ===== LOGO ===== */
.navbar-logo-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  flex-shrink: 0;
}

.navbar-logo {
  height: 26px;
  width: auto;
  object-fit: contain;
  filter: brightness(1);
  transition: filter 0.3s ease, transform 0.3s ease;
}

.navbar-logo-link:hover .navbar-logo {
  filter: drop-shadow(0 0 8px rgba(163, 114, 248, 0.8));
  transform: scale(1.03);
}

/* ===== DESKTOP NAVIGATION ===== */
.navbar-nav-desktop {
  display: none;
  align-items: center;
  gap: 0.125rem;
  flex: 1;
  justify-content: center;
}

@media (min-width: 1180px) {
  .navbar-nav-desktop {
    display: flex;
  }
}

.navbar-nav-item {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem 0.5rem;
  font-size: 0.78rem;
  font-weight: 400;
  color: rgba(208, 190, 246, 0.8);
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.25s ease;
  letter-spacing: 0;
  white-space: nowrap;
}

.navbar-nav-item:hover {
  color: #F3F6FE;
  background: rgba(163, 114, 248, 0.1);
}

.navbar-nav-item--static {
  cursor: default;
}

.navbar-nav-item--static:hover {
  color: rgba(208, 190, 246, 0.8);
  background: transparent;
}

.navbar-nav-item.active {
  color: #d0bef6;
  background: rgba(163, 114, 248, 0.08);
}

.nav-item-indicator {
  position: absolute;
  bottom: 4px;
  left: 50%;
  transform: translateX(-50%);
  height: 2px;
  width: 0;
  background: linear-gradient(90deg, #a372f8, #bb99f8);
  border-radius: 2px;
  opacity: 0;
  transition: width 0.25s ease, opacity 0.25s ease;
}

.navbar-nav-item.active .nav-item-indicator {
  width: calc(100% - 1.5rem);
  opacity: 1;
}

.navbar-nav-item:hover .nav-item-indicator {
  width: calc(100% - 1.5rem);
  opacity: 0.5;
}

.navbar-nav-item--static:hover .nav-item-indicator {
  width: 0;
  opacity: 0;
}

/* ===== INNOTEC BUTTON ===== */
.navbar-innotec-link {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 34px;
  padding: 0 0.55rem;
  border: 1px solid rgba(25, 68, 240, 0.3);
  border-radius: 8px;
  background:
    linear-gradient(135deg, rgba(25, 68, 240, 0.14), rgba(123, 138, 247, 0.08)),
    rgba(25, 68, 240, 0.04);
  text-decoration: none;
  transition: background 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease;
}

.navbar-innotec-logo {
  width: 100px;
  height: auto;
  display: block;
  opacity: 0.92;
  filter: drop-shadow(0 0 8px rgba(25, 68, 240, 0.2));
  transition: opacity 0.25s ease, filter 0.25s ease, transform 0.25s ease;
}

@media (max-width: 640px) {
  .navbar-innotec-link {
    height: 30px;
    padding: 0 0.45rem;
  }
  .navbar-innotec-logo {
    width: 75px;
  }
}

.navbar-innotec-link:hover {
  background:
    linear-gradient(135deg, rgba(25, 68, 240, 0.24), rgba(123, 138, 247, 0.16)),
    rgba(25, 68, 240, 0.08);
  border-color: rgba(25, 68, 240, 0.64);
  box-shadow: 0 0 18px rgba(25, 68, 240, 0.26), 0 0 24px rgba(123, 138, 247, 0.18);
  transform: translateY(-1px);
}

.navbar-innotec-link:hover .navbar-innotec-logo {
  opacity: 1;
  filter: drop-shadow(0 0 10px rgba(25, 68, 240, 0.45));
  transform: translateY(-1px);
}

/* ===== ACTIONS ===== */
.navbar-actions {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-shrink: 0;
}

@media (max-width: 640px) {
  .navbar-actions {
    gap: 0.4rem;
  }
}

/* Mobile toggle */
.navbar-mobile-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  color: #d0bef6;
  background: transparent;
  border: 1px solid rgba(163, 114, 248, 0.3);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.25s ease;
}

@media (max-width: 640px) {
  .navbar-mobile-toggle {
    width: 32px;
    height: 32px;
  }
}

.navbar-mobile-toggle:hover {
  background: rgba(163, 114, 248, 0.15);
  border-color: rgba(163, 114, 248, 0.6);
  color: #F3F6FE;
}

.navbar-mobile-toggle.active {
  background: rgba(163, 114, 248, 0.2);
  border-color: rgba(163, 114, 248, 0.7);
}

@media (min-width: 1180px) {
  .navbar-mobile-toggle {
    display: none;
  }
}

/* ===== MOBILE MENU ===== */
.navbar-mobile-menu {
  position: relative;
  z-index: 1;
  border-top: 1px solid rgba(163, 114, 248, 0.2);
  background: linear-gradient(180deg, rgba(8, 12, 22, 0.94), rgba(8, 12, 22, 0.86));
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  padding: 1rem 1.5rem 1.5rem;
}

@media (min-width: 1180px) {
  .navbar-mobile-menu {
    display: none;
  }
}

.mobile-nav {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  margin-bottom: 1rem;
}

.mobile-nav-item {
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  font-size: 0.9375rem;
  font-weight: 400;
  color: rgba(208, 190, 246, 0.8);
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.2s ease;
  border: 1px solid transparent;
}

.mobile-nav-item:hover {
  color: #F3F6FE;
  background: rgba(163, 114, 248, 0.12);
  border-color: rgba(163, 114, 248, 0.25);
}

.mobile-nav-item--static {
  cursor: default;
}

.mobile-nav-item--static:hover {
  color: rgba(208, 190, 246, 0.8);
  background: transparent;
  border-color: transparent;
}

.mobile-nav-item.active {
  color: #d0bef6;
  background: rgba(163, 114, 248, 0.1);
  border-color: rgba(163, 114, 248, 0.3);
}

.mobile-nav-item--innotec {
  color: #F3F6FE;
  background:
    linear-gradient(135deg, rgba(25, 68, 240, 0.16), rgba(123, 138, 247, 0.1)),
    rgba(25, 68, 240, 0.08);
  border-color: rgba(25, 68, 240, 0.34);
}

.mobile-nav-item--innotec:hover {
  border-color: rgba(25, 68, 240, 0.62);
  box-shadow: 0 0 18px rgba(25, 68, 240, 0.2);
}

/* ===== MOBILE MENU TRANSITIONS ===== */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.35s ease;
}

.mobile-menu-enter-from {
  opacity: 0;
  transform: translateY(-12px);
}

.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
