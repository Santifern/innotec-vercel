<script setup lang="ts">
const currentYear = new Date().getFullYear()

const leftNavLinks = [
  { label: 'Inicio', to: '/' },
  { label: 'Acerca', to: '/about' },
  { label: 'Actividades', to: '/activities' },
  { label: 'Programa', to: '/schedule' }
]

const rightNavLinks = [
  { label: 'FAQ', to: '/faq' },
  { label: 'Hackathon', to: '/hackathon' },
  { label: 'Inscripción', to: '/registration-innotec' },
  { label: 'Galería', to: '/gallery' }
]

const contactLinks = [
  { name: 'María Eugenia Pointis', phone: '(+595) 982 386063', href: 'tel:+595982386063' },
  { name: 'Amelia Nery Huerta', phone: '(+595) 971 650525', href: 'tel:+595971650525' }
]
</script>

<template>
  <footer class="innotec-footer">
    <!-- Top separator -->
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
            <NuxtImg
              src="/logo-innotec-blanco.svg"
              alt="INNOTEC"
              class="footer-logo"
            />
          </NuxtLink>
          <p class="footer-tagline">
            Innovación · Tecnología · Colaboración
          </p>
          <p class="footer-description">
            El congreso anual de tecnología e innovación organizado por estudiantes de la Facultad de Ciencias y Tecnología de la Universidad Católica "Nuestra Señora de la Asunción".
          </p>
        </div>

        <!-- Navigation column -->
        <div class="footer-nav-col">
          <h3 class="footer-col-title">
            Navegación
          </h3>
          <nav aria-label="Footer navigation">
            <div class="footer-nav-grid">
              <!-- Left nav items -->
              <ul class="footer-nav-list">
                <li
                  v-for="link in leftNavLinks"
                  :key="link.label"
                >
                  <NuxtLink
                    :to="link.to"
                    class="footer-nav-link"
                  >
                    <span class="nav-dot" />
                    {{ link.label }}
                  </NuxtLink>
                </li>
              </ul>
              <!-- Right nav items -->
              <ul class="footer-nav-list">
                <li
                  v-for="link in rightNavLinks"
                  :key="link.label"
                >
                  <NuxtLink
                    :to="link.to"
                    class="footer-nav-link"
                  >
                    <span class="nav-dot" />
                    {{ link.label }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <!-- Contacts column -->
        <div class="footer-contacts-col">
          <h3 class="footer-col-title">
            Contactos
          </h3>
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
              href="https://instagram.com"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              class="social-btn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="mailto:innotec@uca.edu.py"
              aria-label="Email"
              class="social-btn"
            >
              <!-- Gmail / Mail icon (M shape) -->
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.907 1.528-1.148C21.69 2.28 24 3.434 24 5.457z" />
              </svg>
            </a>
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
            Facultad de Ciencias y Tecnología · Universidad Católica Nuestra Señora de la Asunción · Sede Santa Librada
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
  font-family: 'Fractul Regular', 'Fractul', 'Inter', sans-serif;
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
  opacity: 0.06;
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
  gap: 2.5rem;
  margin-bottom: 3rem;
}

@media (min-width: 768px) {
  .footer-main {
    grid-template-columns: 1.6fr 1.4fr 1fr;
    gap: 3rem;
    align-items: start;
  }
}

/* ===== BRAND COLUMN ===== */
.footer-brand {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.footer-logo-link {
  display: inline-block;
  text-decoration: none;
  margin-bottom: 0.75rem;
}

.footer-logo {
  height: 36px;
  width: auto;
  object-fit: contain;
  transition: filter 0.3s ease;
}

.footer-logo-link:hover .footer-logo {
  filter: drop-shadow(0 0 10px rgba(25, 68, 240, 0.7));
}

.footer-tagline {
  font-size: 0.72rem;
  font-family: 'Fractul Black', 'Fractul', 'Inter', sans-serif;
  font-weight: 900;
  color: #1944F0;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin: 0 0 1rem;
}

.footer-description {
  font-family: 'Fractul Regular', 'Fractul', 'Inter', sans-serif;
  font-weight: 400;
  font-size: 0.84rem;
  line-height: 1.7;
  color: rgba(203, 209, 251, 0.55);
  margin: 0;
}

/* ===== COLUMN TITLES ===== */
.footer-col-title {
  font-size: 0.72rem;
  font-family: 'Fractul Black', 'Fractul', 'Inter', sans-serif;
  font-weight: 900;
  color: rgba(203, 209, 251, 0.9);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  margin: 0 0 1.25rem;
  padding-bottom: 0.625rem;
  border-bottom: 1px solid rgba(25, 68, 240, 0.2);
}

/* ===== NAVIGATION COLUMN ===== */
.footer-nav-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 1rem;
}

.footer-nav-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
}

.footer-nav-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: 'Fractul Regular', 'Fractul', 'Inter', sans-serif;
  font-weight: 400;
  font-size: 0.875rem;
  color: rgba(203, 209, 251, 0.65);
  text-decoration: none;
  padding: 0.35rem 0;
  transition: color 0.2s ease;
}

.footer-nav-link:hover {
  color: #CBD1FB;
}

/* Active route highlight */
.footer-nav-link.router-link-active {
  color: #CBD1FB;
}

.footer-nav-link.router-link-active .nav-dot {
  background: #1944F0;
  box-shadow: 0 0 6px rgba(25, 68, 240, 0.8);
}

.nav-dot {
  flex-shrink: 0;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: rgba(25, 68, 240, 0.55);
  transition: background 0.2s ease, box-shadow 0.2s ease;
}

.footer-nav-link:hover .nav-dot {
  background: rgba(25, 68, 240, 0.9);
  box-shadow: 0 0 6px rgba(25, 68, 240, 0.5);
}

/* ===== CONTACTS COLUMN ===== */
.footer-contacts-col {
  display: flex;
  flex-direction: column;
}

.footer-contacts {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  margin-bottom: 1.5rem;
}

.footer-contact-link {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  text-decoration: none;
  transition: opacity 0.25s ease;
}

.footer-contact-link:hover {
  opacity: 0.85;
}

.footer-contact-name {
  font-family: 'Fractul Black', 'Fractul', 'Inter', sans-serif;
  font-size: 0.775rem;
  font-weight: 900;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #CBD1FB;
}

.footer-contact-phone {
  font-family: 'Fractul Regular', 'Fractul', 'Inter', sans-serif;
  font-size: 0.875rem;
  color: rgba(123, 138, 247, 0.9);
  transition: color 0.25s ease;
}

.footer-contact-link:hover .footer-contact-phone {
  color: #7B8AF7;
}

/* Social buttons */
.footer-socials {
  display: flex;
  gap: 0.5rem;
}

.social-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  color: rgba(203, 209, 251, 0.65);
  background: rgba(25, 68, 240, 0.08);
  border: 1px solid rgba(25, 68, 240, 0.22);
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.25s ease;
}

.social-btn:hover {
  color: #F3F6FE;
  background: rgba(25, 68, 240, 0.2);
  border-color: rgba(25, 68, 240, 0.55);
  box-shadow: 0 0 14px rgba(25, 68, 240, 0.28);
  transform: translateY(-2px);
}

.social-btn svg {
  width: 15px;
  height: 15px;
}

/* ===== BOTTOM BAR ===== */
.footer-bottom {
  padding-top: 1.25rem;
}

.footer-bottom-separator {
  height: 1px;
  background: rgba(25, 68, 240, 0.12);
  margin-bottom: 1.25rem;
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
  font-size: 0.8rem;
  color: rgba(203, 209, 251, 0.45);
  margin: 0;
}

.footer-credit {
  font-family: 'Fractul Thin', 'Fractul', 'Inter', sans-serif;
  font-weight: 100;
  font-size: 0.74rem;
  color: rgba(203, 209, 251, 0.3);
  margin: 0;
}
</style>
