<script setup lang="ts">
const currentYear = new Date().getFullYear()

const navLinks = [
  { label: 'Inicio', to: '#inicio' },
  { label: 'Acerca' },
  { label: 'Actividades' },
  { label: 'Programa' },
  { label: 'FAQ' },
  { label: 'Hackathon' },
  { label: 'Inscripción' },
  { label: 'Galería' }
]

const contactLinks = [
  { name: 'María Eugenia Pointis', phone: '(+595) 982 386063', href: 'tel:+595982386063' },
  { name: 'Amelia Nery Huerta', phone: '(+595) 971 650525', href: 'tel:+595971650525' }
]

const socialLinks = [
  {
    label: 'Instagram',
    to: 'https://instagram.com',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>`
  },
  {
    label: 'Facebook',
    to: 'https://facebook.com',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>`
  },
  {
    label: 'LinkedIn',
    to: 'https://linkedin.com',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`
  }
]
</script>

<template>
  <footer class="innotec-footer">
    <!-- Top separator with glow -->
    <div class="footer-separator" />

    <!-- Background glow effects -->
    <div class="footer-glow footer-glow--left" />
    <div class="footer-glow footer-glow--right" />

    <div class="footer-container">
      <!-- Main footer content -->
      <div class="footer-main">
        <!-- Brand column -->
        <div class="footer-brand">
          <NuxtLink
            to="/"
            class="footer-logo-link"
            aria-label="Innotec 2026"
          >
            <img
              src="/logo-innotec-blanco.png"
              alt="INNOTEC"
              class="footer-logo"
            >
          </NuxtLink>
          <p class="footer-tagline">
            Innovación • Tecnología • Colaboración
          </p>
          <p class="footer-description">
            El congreso anual de tecnología e innovación organizado por estudiantes de la Facultad de Ciencias y Tecnología de la Universidad Católica "Nuestra Señora de la Asunción".
          </p>

          <div
            class="footer-contacts"
            aria-label="Contactos"
          >
            <a
              v-for="contact in contactLinks"
              :key="contact.name"
              :href="contact.href"
              class="footer-contact-link"
            >
              <span class="footer-contact-name">{{ contact.name }}</span>
              <span class="footer-contact-phone">{{ contact.phone }}</span>
            </a>
          </div>

          <!-- Social Links -->
          <div class="footer-socials">
            <a
              v-for="social in socialLinks"
              :key="social.label"
              :href="social.to"
              :aria-label="social.label"
              target="_blank"
              rel="noopener noreferrer"
              class="social-btn"
            >
              <!-- eslint-disable-next-line vue/no-v-html -->
              <span v-html="social.icon" />
            </a>
          </div>
        </div>

        <!-- Navigation links -->
        <div class="footer-nav-col">
          <h3 class="footer-col-title">
            Navegación
          </h3>
          <nav aria-label="Footer navigation">
            <ul class="footer-nav-list">
              <li
                v-for="link in navLinks"
                :key="link.label"
              >
                <NuxtLink
                  v-if="link.to"
                  :to="link.to"
                  class="footer-nav-link"
                >
                  <span class="nav-link-arrow">&rarr;</span>
                  {{ link.label }}
                </NuxtLink>
                <span
                  v-else
                  class="footer-nav-link footer-nav-link--static"
                >
                  <span class="nav-link-arrow">&rarr;</span>
                  {{ link.label }}
                </span>
              </li>
            </ul>
          </nav>
        </div>

        <!-- Event details -->
        <div class="footer-event-col">
          <h3 class="footer-col-title">
            El Evento
          </h3>
          <div class="footer-event-details">
            <div class="event-detail-item">
              <div>
                <p class="detail-label">
                  Fecha
                </p>
                <p class="detail-value">
                  20 de agosto, 2026
                </p>
              </div>
            </div>
            <div class="event-detail-item">
              <div>
                <p class="detail-label">
                  Sede
                </p>
                <p class="detail-value">
                  Universidad Católica del Paraguay
                </p>
              </div>
            </div>
            <div class="event-detail-item">
              <div>
                <p class="detail-label">
                  Actividades
                </p>
                <p class="detail-value">
                  Charlas • Talleres • Visitas Técnicas
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom bar -->
      <div class="footer-bottom">
        <div class="footer-bottom-separator" />
        <div class="footer-bottom-content">
          <p class="footer-copyright">
            © {{ currentYear }} INNOTEC — Todos los derechos reservados.
          </p>
          <p class="footer-credit">
            Facultad de Ciencias y Tecnología · Universidad Católica del Paraguay
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* ===== FOOTER BASE ===== */
.innotec-footer {
  position: relative;
  background: #04060D;
  font-family: 'Fractul Thin', 'Fractul', 'Inter', sans-serif;
  font-weight: 100;
  overflow: hidden;
}

/* Top separator with gradient */
.footer-separator {
  height: 1px;
  background: linear-gradient(90deg, transparent 0%, rgba(25, 68, 240, 0.6) 25%, rgba(123, 138, 247, 0.8) 50%, rgba(25, 68, 240, 0.6) 75%, transparent 100%);
}

/* Background glow effects */
.footer-glow {
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  filter: blur(120px);
  pointer-events: none;
  opacity: 0.08;
}

.footer-glow--left {
  bottom: -100px;
  left: -100px;
  background: #1944F0;
}

.footer-glow--right {
  bottom: -100px;
  right: -100px;
  background: #7B8AF7;
}

/* Container */
.footer-container {
  position: relative;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 1.5rem 2rem;
}

@media (min-width: 1024px) {
  .footer-container {
    padding: 4rem 2rem 2.5rem;
  }
}

/* ===== MAIN FOOTER LAYOUT ===== */
.footer-main {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  margin-bottom: 3rem;
}

@media (min-width: 768px) {
  .footer-main {
    grid-template-columns: 1.5fr 1fr 1.5fr;
    gap: 2.5rem;
  }
}

/* ===== BRAND COLUMN ===== */
.footer-logo-link {
  display: inline-block;
  text-decoration: none;
  margin-bottom: 0.75rem;
}

.footer-logo {
  height: 32px;
  width: auto;
  object-fit: contain;
  transition: filter 0.3s ease;
}

.footer-logo-link:hover .footer-logo {
  filter: drop-shadow(0 0 10px rgba(25, 68, 240, 0.7));
}

.footer-tagline {
  font-size: 0.75rem;
  font-family: 'Fractul Black', 'Fractul', 'Inter', sans-serif;
  font-weight: 900;
  color: #1944F0;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 0.875rem;
}

.footer-description {
  font-family: 'Fractul Regular', 'Fractul', 'Inter', sans-serif;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.65;
  color: rgba(203, 209, 251, 0.6);
  margin-bottom: 1.125rem;
}

.footer-contacts {
  display: grid;
  gap: 0.625rem;
  margin-bottom: 1.5rem;
}

.footer-contact-link {
  display: grid;
  gap: 0.15rem;
  width: fit-content;
  color: rgba(203, 209, 251, 0.74);
  text-decoration: none;
  transition: color 0.25s ease;
}

.footer-contact-link:hover {
  color: #F3F6FE;
}

.footer-contact-name {
  font-family: 'Fractul Black', 'Fractul', 'Inter', sans-serif;
  font-size: 0.78rem;
  font-weight: 900;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.footer-contact-phone {
  font-family: 'Fractul Regular', 'Fractul', 'Inter', sans-serif;
  font-size: 0.875rem;
  color: rgba(123, 138, 247, 0.88);
}

/* Social buttons */
.footer-socials {
  display: flex;
  gap: 0.625rem;
}

.social-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  color: rgba(203, 209, 251, 0.7);
  background: rgba(25, 68, 240, 0.1);
  border: 1px solid rgba(25, 68, 240, 0.25);
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.25s ease;
}

.social-btn:hover {
  color: #F3F6FE;
  background: rgba(25, 68, 240, 0.25);
  border-color: rgba(25, 68, 240, 0.6);
  box-shadow: 0 0 15px rgba(25, 68, 240, 0.3);
  transform: translateY(-2px);
}

.social-btn :deep(svg) {
  width: 16px;
  height: 16px;
}

/* ===== COLUMN TITLES ===== */
.footer-col-title {
  font-size: 0.75rem;
  font-family: 'Fractul Black', 'Fractul', 'Inter', sans-serif;
  font-weight: 900;
  color: #CBD1FB;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 1.25rem;
  padding-bottom: 0.625rem;
  border-bottom: 1px solid rgba(25, 68, 240, 0.2);
}

/* ===== NAV LINKS ===== */
.footer-nav-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 1rem;
  row-gap: 0.25rem;
}

@media (min-width: 768px) {
  .footer-nav-list {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-template-rows: repeat(4, auto);
    grid-auto-flow: column;
  }
}

.footer-nav-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: 'Fractul Regular', 'Fractul', 'Inter', sans-serif;
  font-weight: 400;
  font-size: 0.875rem;
  color: rgba(203, 209, 251, 0.6);
  text-decoration: none;
  cursor: pointer;
  padding: 0.375rem 0;
  transition: all 0.2s ease;
}

.footer-nav-link--static {
  cursor: default;
}

.footer-nav-link:hover {
  color: #CBD1FB;
}

.footer-nav-link--static:hover {
  color: rgba(203, 209, 251, 0.6);
}

.nav-link-arrow {
  font-size: 0.75rem;
  color: rgba(25, 68, 240, 0.6);
  transition: all 0.2s ease;
}

.footer-nav-link:hover .nav-link-arrow {
  color: #1944F0;
  transform: translateX(2px);
}

.footer-nav-link--static:hover .nav-link-arrow {
  color: rgba(25, 68, 240, 0.6);
  transform: none;
}

/* ===== EVENT DETAILS ===== */
.footer-event-details {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.event-detail-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
}

.detail-icon {
  font-size: 1rem;
  flex-shrink: 0;
  margin-top: 2px;
}

.detail-label {
  font-size: 0.7rem;
  font-family: 'Fractul Black', 'Fractul', 'Inter', sans-serif;
  font-weight: 900;
  color: rgba(25, 68, 240, 0.8);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 2px;
}

.detail-value {
  font-family: 'Fractul Regular', 'Fractul', 'Inter', sans-serif;
  font-weight: 400;
  font-size: 0.8125rem;
  color: rgba(203, 209, 251, 0.7);
  line-height: 1.4;
}

/* ===== BOTTOM BAR ===== */
.footer-bottom {
  padding-top: 1.5rem;
}

.footer-bottom-separator {
  height: 1px;
  background: rgba(25, 68, 240, 0.15);
  margin-bottom: 1.5rem;
}

.footer-bottom-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.375rem;
  text-align: center;
}

@media (min-width: 768px) {
  .footer-bottom-content {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }
}

.footer-copyright {
  font-family: 'Fractul Regular', 'Fractul', 'Inter', sans-serif;
  font-weight: 400;
  font-size: 0.8125rem;
  color: rgba(203, 209, 251, 0.5);
}

.footer-credit {
  font-family: 'Fractul Thin', 'Fractul', 'Inter', sans-serif;
  font-weight: 100;
  font-size: 0.75rem;
  color: rgba(203, 209, 251, 0.35);
}
</style>
