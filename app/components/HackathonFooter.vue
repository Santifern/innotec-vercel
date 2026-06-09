<script setup lang="ts">
const currentYear = new Date().getFullYear()

const leftNavLinks = [
  { label: 'Inicio', to: '/hackathon#inicio' },
  { label: 'Acerca de', to: '/hackathon/about' },
  { label: 'Ponencias y Tracks', to: '/hackathon#tracks' },
  { label: 'Cronograma', to: '/hackathon/schedule' }
]

const rightNavLinks = [
  { label: 'Inscripción', to: '/registration-hackathon' },
  { label: 'Galería', to: '/hackathon/gallery' },
  { label: 'FAQ', to: '/hackathon/faq' },
  { label: 'Innotec', to: '/' }
]

const contacts = [
  { name: 'VICTORIA PAREDES', phone: '(+595) 973 838471', href: 'tel:+595973838471' },
  { name: 'JUAN PABLO LEÓN', phone: '(+595) 972 992752', href: 'tel:+595972992752' },
  { name: 'FABRICIO CHASE', phone: '(+595) 982 711908', href: 'tel:+595982711908' }
]
</script>

<template>
  <footer class="hackathon-footer">
    <div class="footer-bg-grid" />
    <div class="footer-separator" />

    <div class="footer-container">
      <div class="footer-main">
        <!-- BRAND COLUMN -->
        <div class="footer-brand">
          <NuxtImg
            src="/logo-hackathon-navbar.svg"
            alt="HACKATHON"
            class="footer-logo"
            fallback="/logo-innotec-blanco.svg"
          />
          <h2 class="footer-tagline">
            INNOVACIÓN &bull; EQUIPOS &bull; PROTOTIPOS
          </h2>
          <p class="footer-description">
            Un espacio de colaboración interdisciplinaria para transformar problemas reales en propuestas con impacto.
          </p>
        </div>

        <!-- NAVIGATION COLUMN -->
        <div class="footer-col footer-nav-col">
          <h3 class="footer-col-title">
            NAVEGACIÓN
          </h3>
          <nav
            aria-label="Navegación Hackathon"
            class="nav-grid"
          >
            <ul class="nav-list">
              <li
                v-for="link in leftNavLinks"
                :key="link.label"
              >
                <NuxtLink
                  :to="link.to"
                  class="nav-link"
                >
                  <span class="nav-dot" />
                  {{ link.label }}
                </NuxtLink>
              </li>
            </ul>
            <ul class="nav-list">
              <li
                v-for="link in rightNavLinks"
                :key="link.label"
              >
                <NuxtLink
                  :to="link.to"
                  class="nav-link"
                >
                  <span class="nav-dot" />
                  {{ link.label }}
                </NuxtLink>
              </li>
            </ul>
          </nav>
        </div>

        <!-- CONTACTS COLUMN -->
        <div class="footer-col footer-contact-col">
          <h3 class="footer-col-title">
            CONTACTOS
          </h3>
          <div class="footer-contacts">
            <a
              v-for="contact in contacts"
              :key="contact.name"
              :href="contact.href"
              class="contact-item"
            >
              <span class="contact-name">{{ contact.name }}</span>
              <span class="contact-phone">{{ contact.phone }}</span>
            </a>
          </div>
          <div class="footer-socials">
            <a
              href="#"
              class="social-btn"
              aria-label="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect
                  x="2"
                  y="2"
                  width="20"
                  height="20"
                  rx="5"
                  ry="5"
                />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line
                  x1="17.5"
                  y1="6.5"
                  x2="17.51"
                  y2="6.5"
                />
              </svg>
            </a>
            <a
              href="mailto:innotec@uca.edu.py"
              class="social-btn"
              aria-label="Email"
            >
              <!-- Gmail / Mail icon (M shape) -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.907 1.528-1.148C21.69 2.28 24 3.434 24 5.457z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- BOTTOM BAR -->
      <div class="footer-bottom">
        <div class="footer-bottom-separator" />
        <div class="footer-bottom-content">
          <p class="copyright">
            © {{ currentYear }} HACKATHON INNOTEC — Todos los derechos reservados.
          </p>
          <p class="credit">
            Facultad de Ciencias y Tecnología Universidad Católica Nuestra Señora de la Asunción - Sede Santa Librada
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.hackathon-footer {
  position: relative;
  background: #090614; /* Darker purple to match image */
  font-family: 'Fractul Regular', 'Fractul', 'Inter', sans-serif;
  color: #F3F6FE;
  overflow: hidden;
}

.footer-bg-grid {
  position: absolute;
  inset: 0;
  z-index: 0;
  background-image:
    linear-gradient(rgba(163, 114, 248, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(163, 114, 248, 0.04) 1px, transparent 1px);
  background-size: 72px 72px;
  pointer-events: none;
}

.footer-separator {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background: rgba(163, 114, 248, 0.2);
  z-index: 1;
}

.footer-container {
  position: relative;
  z-index: 2;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 1.5rem 2rem;
}

@media (min-width: 1024px) {
  .footer-container {
    padding: 4rem 2rem 2.5rem;
  }
}

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

/* BRAND COLUMN */
.footer-brand {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.footer-logo {
  height: 36px;
  width: auto;
  max-width: min(100%, 27rem);
  object-fit: contain;
  margin-bottom: 0.75rem;
}

.footer-tagline {
  font-family: 'Fractul Black', 'Fractul', 'Inter', sans-serif;
  font-size: 0.72rem;
  font-weight: 900;
  color: #a372f8;
  letter-spacing: 0.12em;
  margin: 0 0 1rem;
  text-transform: uppercase;
}

.footer-description {
  font-family: 'Fractul Regular', 'Fractul', 'Inter', sans-serif;
  font-weight: 400;
  font-size: 0.84rem;
  line-height: 1.7;
  color: rgba(203, 209, 251, 0.75);
  margin: 0;
}

/* COLUMN TITLES */
.footer-col-title {
  font-family: 'Fractul Black', 'Fractul', 'Inter', sans-serif;
  font-size: 0.72rem;
  font-weight: 900;
  color: #F3F6FE;
  margin: 0 0 1.25rem;
  padding-bottom: 0.625rem;
  border-bottom: 1px solid rgba(163, 114, 248, 0.25);
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

/* NAVIGATION */
.nav-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 1rem;
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: 'Fractul Regular', 'Fractul', 'Inter', sans-serif;
  font-weight: 400;
  font-size: 0.875rem;
  color: rgba(203, 209, 251, 0.75);
  text-decoration: none;
  padding: 0.35rem 0;
  transition: color 0.2s;
}

.nav-link:hover {
  color: #a372f8;
}

.nav-dot {
  flex-shrink: 0;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: rgba(163, 114, 248, 0.62);
  transition: background 0.2s ease, box-shadow 0.2s ease;
}

.nav-link:hover .nav-dot {
  background: rgba(163, 114, 248, 0.95);
  box-shadow: 0 0 6px rgba(163, 114, 248, 0.58);
}

/* CONTACTS */
.footer-contacts {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.85rem 1rem;
  margin-bottom: 1.5rem;
}

.contact-item {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  transition: opacity 0.2s;
  gap: 0.15rem;
  min-width: 0;
}

.contact-item:hover {
  opacity: 0.8;
}

.contact-name {
  font-family: 'Fractul Black', 'Fractul', 'Inter', sans-serif;
  font-size: 0.775rem;
  font-weight: 900;
  color: #a372f8;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.contact-phone {
  font-family: 'Fractul Regular', 'Fractul', 'Inter', sans-serif;
  font-size: 0.875rem;
  color: rgba(203, 209, 251, 0.85);
  white-space: nowrap;
}

@media (min-width: 520px) {
  .footer-contacts {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .contact-item:nth-child(3) {
    grid-column: 1 / -1;
  }
}

/* SOCIALS */
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
  border-radius: 8px;
  background: rgba(14, 8, 36, 0.8);
  border: 1px solid rgba(163, 114, 248, 0.2);
  color: #d0bef6;
  transition: all 0.2s ease;
}

.social-btn:hover {
  background: rgba(163, 114, 248, 0.15);
  border-color: rgba(163, 114, 248, 0.4);
  color: #F3F6FE;
  transform: translateY(-2px);
}

.social-btn svg {
  width: 15px;
  height: 15px;
  display: block;
}

/* BOTTOM BAR */
.footer-bottom {
  padding-top: 1.25rem;
}

.footer-bottom-separator {
  height: 1px;
  background: rgba(163, 114, 248, 0.12);
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

.copyright {
  font-family: 'Fractul Regular', 'Fractul', 'Inter', sans-serif;
  font-weight: 400;
  font-size: 0.8rem;
  color: rgba(203, 209, 251, 0.4);
  margin: 0;
}

.credit {
  font-family: 'Fractul Thin', 'Fractul', 'Inter', sans-serif;
  font-weight: 100;
  font-size: 0.74rem;
  color: rgba(163, 114, 248, 0.4);
  margin: 0;
}
</style>
