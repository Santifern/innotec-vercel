<script setup lang="ts">
import { ref } from 'vue'
import { motion } from 'motion-v'
import type { VariantType } from 'motion-v'

const props = defineProps<{
  theme?: 'innotec' | 'hackathon'
  items: any[]
  desktopItems: any[]
  largeBreakpoint?: boolean
}>()

const nuxtApp = useNuxtApp()
const isScrolled = ref(false)
const mobileMenuOpen = ref(false)

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
    class="app-navbar fixed top-0 left-0 right-0 z-50 transition-all duration-500"
    :class="[
      isScrolled ? 'scrolled' : '',
      `theme-${theme || 'innotec'}`,
      largeBreakpoint ? 'use-large-breakpoint' : ''
    ]"
  >
    <!-- Top glow line -->
    <div class="navbar-glow-line" />

    <div class="navbar-container">
      <slot name="logo" />

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
        <slot name="action" />

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
              x1="4" y1="6" x2="20" y2="6"
              :variants="variants"
              :animate="mobileMenuOpen ? 'close' : 'normal'"
              :custom="1" class="outline-none"
            />
            <motion.line
              x1="4" y1="12" x2="20" y2="12"
              :variants="variants"
              :animate="mobileMenuOpen ? 'close' : 'normal'"
              :custom="2" class="outline-none"
            />
            <motion.line
              x1="4" y1="18" x2="20" y2="18"
              :variants="variants"
              :animate="mobileMenuOpen ? 'close' : 'normal'"
              :custom="3" class="outline-none"
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
              :class="[item.mobileClass || '']"
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
/* Base theme variables */
.app-navbar {
  --nav-accent-rgb: 25, 68, 240;
  --nav-accent-secondary-rgb: 123, 138, 247;
  --nav-accent-hex: #1944F0;
  --nav-accent-secondary-hex: #7B8AF7;
  
  --nav-item-color: rgba(203, 209, 251, 0.8);
  --nav-item-hover: #F3F6FE;
  --nav-item-active: #CBD1FB;
}

.app-navbar.theme-hackathon {
  --nav-accent-rgb: 163, 114, 248;
  --nav-accent-secondary-rgb: 187, 153, 248;
  --nav-accent-hex: #a372f8;
  --nav-accent-secondary-hex: #bb99f8;
  
  --nav-item-color: rgba(208, 190, 246, 0.8);
  --nav-item-hover: #F3F6FE;
  --nav-item-active: #d0bef6;
}

/* ===== NAVBAR BASE ===== */
.app-navbar {
  font-family: 'Fractul Regular', 'Fractul', 'Inter', system-ui, sans-serif;
  font-weight: 400;
  isolation: isolate;
}

.app-navbar {
  background:
    linear-gradient(180deg, rgba(8, 12, 22, 0.78) 0%, rgba(8, 12, 22, 0.48) 62%, rgba(8, 12, 22, 0.08) 100%);
  backdrop-filter: blur(18px) saturate(140%);
  -webkit-backdrop-filter: blur(18px) saturate(140%);
  border-bottom: 1px solid rgba(var(--nav-accent-rgb), 0.14);
  box-shadow: 0 10px 36px rgba(0, 0, 0, 0.18);
}

.app-navbar.scrolled {
  background:
    linear-gradient(180deg, rgba(8, 12, 22, 0.94) 0%, rgba(8, 12, 22, 0.82) 100%);
  backdrop-filter: blur(24px) saturate(155%);
  -webkit-backdrop-filter: blur(24px) saturate(155%);
  border-bottom: 1px solid rgba(var(--nav-accent-rgb), 0.2);
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.32);
}

.app-navbar::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  background:
    radial-gradient(ellipse at 18% 0%, rgba(var(--nav-accent-rgb), 0.22), transparent 42%),
    radial-gradient(ellipse at 82% 0%, rgba(var(--nav-accent-secondary-rgb), 0.16), transparent 38%);
  filter: blur(22px);
  opacity: 0.72;
}

.app-navbar.scrolled::before {
  opacity: 0.9;
}

/* Top glow line */
.navbar-glow-line {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(var(--nav-accent-rgb), 0.8), rgba(var(--nav-accent-secondary-rgb), 0.6), rgba(var(--nav-accent-rgb), 0.8), transparent);
  opacity: 0;
  transition: opacity 0.5s ease;
}

.app-navbar.scrolled .navbar-glow-line {
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

/* ===== DESKTOP NAVIGATION ===== */
.navbar-nav-desktop {
  display: none;
  align-items: center;
  gap: 0.125rem;
  flex: 1;
  justify-content: center;
}

@media (min-width: 1024px) {
  .navbar-nav-desktop {
    display: flex;
  }
  .use-large-breakpoint .navbar-nav-desktop {
    display: none;
  }
}

@media (min-width: 1180px) {
  .use-large-breakpoint .navbar-nav-desktop {
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
  color: var(--nav-item-color);
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.25s ease;
  letter-spacing: 0;
  white-space: nowrap;
}

.navbar-nav-item:hover {
  color: var(--nav-item-hover);
  background: rgba(var(--nav-accent-rgb), 0.1);
}

.navbar-nav-item--static {
  cursor: default;
}

.navbar-nav-item--static:hover {
  color: var(--nav-item-color);
  background: transparent;
}

.navbar-nav-item.active,
.navbar-nav-item.router-link-active {
  color: var(--nav-item-active);
  background: rgba(var(--nav-accent-rgb), 0.08);
}

.nav-item-indicator {
  position: absolute;
  bottom: 4px;
  left: 50%;
  transform: translateX(-50%);
  height: 2px;
  width: 0;
  background: linear-gradient(90deg, var(--nav-accent-hex), var(--nav-accent-secondary-hex));
  border-radius: 2px;
  opacity: 0;
  transition: width 0.25s ease, opacity 0.25s ease;
}

.navbar-nav-item.active .nav-item-indicator,
.navbar-nav-item.router-link-active .nav-item-indicator {
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
  color: var(--nav-item-active);
  background: transparent;
  border: 1px solid rgba(var(--nav-accent-rgb), 0.3);
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
  background: rgba(var(--nav-accent-rgb), 0.15);
  border-color: rgba(var(--nav-accent-rgb), 0.6);
  color: var(--nav-item-hover);
}

.navbar-mobile-toggle.active {
  background: rgba(var(--nav-accent-rgb), 0.2);
  border-color: rgba(var(--nav-accent-rgb), 0.7);
}

@media (min-width: 1024px) {
  .navbar-mobile-toggle {
    display: none;
  }
  .use-large-breakpoint .navbar-mobile-toggle {
    display: flex;
  }
}

@media (min-width: 1180px) {
  .use-large-breakpoint .navbar-mobile-toggle {
    display: none;
  }
}

/* ===== MOBILE MENU ===== */
.navbar-mobile-menu {
  position: relative;
  z-index: 1;
  border-top: 1px solid rgba(var(--nav-accent-rgb), 0.2);
  background: linear-gradient(180deg, rgba(8, 12, 22, 0.94), rgba(8, 12, 22, 0.86));
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  padding: 1rem 1.5rem 1.5rem;
}

@media (min-width: 1024px) {
  .navbar-mobile-menu {
    display: none;
  }
  .use-large-breakpoint .navbar-mobile-menu {
    display: block;
  }
}

@media (min-width: 1180px) {
  .use-large-breakpoint .navbar-mobile-menu {
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
  color: var(--nav-item-color);
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.2s ease;
  border: 1px solid transparent;
}

.mobile-nav-item:hover {
  color: var(--nav-item-hover);
  background: rgba(var(--nav-accent-rgb), 0.12);
  border-color: rgba(var(--nav-accent-rgb), 0.25);
}

.mobile-nav-item--static {
  cursor: default;
}

.mobile-nav-item--static:hover {
  color: var(--nav-item-color);
  background: transparent;
  border-color: transparent;
}

.mobile-nav-item.active,
.mobile-nav-item.router-link-active {
  color: var(--nav-item-active);
  background: rgba(var(--nav-accent-rgb), 0.1);
  border-color: rgba(var(--nav-accent-rgb), 0.3);
}

/* Special mobile nav items */
.mobile-nav-item--hackathon {
  color: #F3F6FE !important;
  background:
    linear-gradient(135deg, rgba(217, 70, 239, 0.16), rgba(25, 68, 240, 0.1)),
    rgba(25, 68, 240, 0.08) !important;
  border-color: rgba(217, 70, 239, 0.34) !important;
}

.mobile-nav-item--hackathon:hover,
.mobile-nav-item--hackathon.active,
.mobile-nav-item--hackathon.router-link-active {
  border-color: rgba(217, 70, 239, 0.62) !important;
  box-shadow: 0 0 18px rgba(217, 70, 239, 0.2) !important;
}

.mobile-nav-item--innotec {
  color: #F3F6FE !important;
  background:
    linear-gradient(135deg, rgba(25, 68, 240, 0.16), rgba(123, 138, 247, 0.1)),
    rgba(25, 68, 240, 0.08) !important;
  border-color: rgba(25, 68, 240, 0.34) !important;
}

.mobile-nav-item--innotec:hover {
  border-color: rgba(25, 68, 240, 0.62) !important;
  box-shadow: 0 0 18px rgba(25, 68, 240, 0.2) !important;
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
