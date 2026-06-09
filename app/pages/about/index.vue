<script setup lang="ts">
useHead({
  title: 'Acerca de - Innotec 2026',
  meta: [
    { name: 'description', content: 'Conoce más acerca del congreso Innotec 2026, sus ejes temáticos, fechas, sede y el equipo organizador.' }
  ]
})

const scrollMotion = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  inViewOptions: { once: true, margin: '-50px' },
  transition: {
    type: 'spring',
    stiffness: 40,
    damping: 15,
    delay,
    mass: 0.8
  }
})

const staggerMotion = (index: number, baseDelay = 0.1) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  inViewOptions: { once: true, margin: '-50px' },
  transition: {
    type: 'spring',
    stiffness: 45,
    damping: 14,
    delay: baseDelay + index * 0.12,
    mass: 0.8
  }
})
</script>

<template>
  <div class="innotec-page">
    <!-- HERO SECTION -->
    <section class="acerca-hero">
      <div class="acerca-hero-container">
        <Motion v-bind="scrollMotion()" class="acerca-hero-header">
          <div class="acerca-hero-glow-line" />
          <h1 class="acerca-title">Acerca del Congreso</h1>
          <p class="acerca-subtitle">INNOVAR PARA TRANSFORMAR : Del conocimiento a la acción</p>
        </Motion>

        <Motion v-bind="scrollMotion(0.2)" class="acerca-why">
          <h2 class="why-title">¿POR QUÉ INNOTEC?</h2>
          <p class="why-text">
            Cada edición de INNOTEC propone acercar a los estudiantes a experiencias, herramientas e ideas que amplíen su formación más allá del ámbito académico, mostrando cómo la innovación, el diseño, la ingeniería y la arquitectura pueden articularse para transformar ideas en acciones con impacto en el mundo profesional y en la sociedad.
          </p>
        </Motion>
      </div>
    </section>

    <!-- EJES TEMATICOS SECTION -->
    <section class="acerca-ejes-section">
      <div class="section-container">
        <Motion v-bind="scrollMotion()" class="section-header-center">
          <h2 class="section-title">Éjes Temáticos</h2>
        </Motion>

        <div class="ejes-grid">
          <Motion v-bind="staggerMotion(0)">
            <div class="eje-card">
              <span class="eje-num">01</span>
              <h3 class="eje-title">Tecnología Aplicada y Sistemas Inteligentes</h3>
              <p class="eje-desc">
                Cómo las tecnologías actuales se transforman en soluciones concretas, conectando innovación con implementación real, prototipos y validación en escenarios reales adaptados al contexto local.
              </p>
            </div>
          </Motion>

          <Motion v-bind="staggerMotion(1)">
            <div class="eje-card">
              <span class="eje-num">02</span>
              <h3 class="eje-title">De la Teoría al Territorio : proyectos, decisiones y aplicación en el campo</h3>
              <p class="eje-desc">
                Vincular conocimiento con observación directa del territorio. Proyectos urbanos, criterios de diseño, planificación y gestión, decisiones y desafíos en la práctica.
              </p>
            </div>
          </Motion>

          <Motion v-bind="staggerMotion(2)">
            <div class="eje-card">
              <span class="eje-num">03</span>
              <h3 class="eje-title">Diseño, Innovación y Experiencia</h3>
              <p class="eje-desc">
                El diseño como herramienta más allá de lo estético. Diseño centrado en el usuario, urbanismo táctico, arquitectura del futuro, vínculo entre lo conceptual y lo real.
              </p>
            </div>
          </Motion>
        </div>
      </div>
    </section>

    <!-- INFO GRID SECTION -->
    <section class="acerca-info-section">
      <div class="section-container">
        <div class="info-grid">
          <!-- Left Column -->
          <div class="info-left-col">
            <!-- Fechas y Horarios -->
            <Motion v-bind="scrollMotion(0.1)">
              <div class="info-card">
                <div class="info-card-header">
                  <div class="info-icon">
                    <!-- Icon Calendar -->
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                  </div>
                  <h3 class="info-card-title">Fechas y Horarios</h3>
                </div>
                <div class="info-card-content">
                  <div class="date-block">
                    <span class="date-badge">JORNADA 1</span>
                    <p class="date-text"><strong>Jueves 20 de agosto, 2026</strong><br>8:00 - 21:30</p>
                  </div>
                  <div class="date-block">
                    <span class="date-badge">JORNADA 2</span>
                    <p class="date-text"><strong>Viernes 21 de agosto, 2026</strong><br>8:00 - 15:00</p>
                  </div>
                </div>
              </div>
            </Motion>

            <!-- ¿Para quién? -->
            <Motion v-bind="scrollMotion(0.2)">
              <div class="info-card">
                <div class="info-card-header">
                  <div class="info-icon">
                    <!-- Icon Users -->
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                  </div>
                  <h3 class="info-card-title">¿Para quién?</h3>
                </div>
                <div class="info-card-content">
                  <p class="para-quien-text">
                    Estudiantes de ingeniería, arquitectura, diseño, informática, electrónica y análisis de sistemas de diferentes universidades del país.<br><br>
                    Profesionales, académicos y expertos en las temáticas del congreso.
                  </p>
                </div>
              </div>
            </Motion>
          </div>

          <!-- Right Column (Sede) -->
          <div class="info-right-col">
            <Motion v-bind="scrollMotion(0.3)" style="height: 100%;">
              <div class="info-card info-card-map">
                <div class="info-card-header">
                  <div class="info-icon">
                    <!-- Icon Map Pin -->
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  </div>
                  <h3 class="info-card-title">Sede</h3>
                </div>
                <div class="info-card-content" style="flex: 1; display: flex; flex-direction: column;">
                  <p class="sede-text">Salón Bicentenario del Paseo La Galería, Asunción, Paraguay.</p>
                  <div class="map-placeholder">
                    <!-- Google Maps Iframe Placeholder -->
                    <div class="map-mockup">
                      <span>Google Maps Placeholder</span>
                    </div>
                  </div>
                  <button class="btn-maps">Ver en Google Maps</button>
                </div>
              </div>
            </Motion>
          </div>
        </div>
      </div>
    </section>

    <!-- ORGANIZADORAS SECTION -->
    <section class="acerca-org-section">
      <div class="section-container">
        <Motion v-bind="scrollMotion()" class="section-header-center">
          <div class="org-glow-line" />
          <h2 class="section-title">Organizadoras</h2>
          <p class="section-subtitle">El equipo detrás de INNOTEC 2026</p>
        </Motion>

        <div class="org-grid">
          <Motion v-bind="staggerMotion(0)">
            <div class="org-card">
              <div class="org-image-placeholder">
                <NuxtImg
                  src="/placeholder-person-1.jpg"
                  alt="Ma. Eugenia Pointis"
                  class="org-image"
                  fallback="/logo-innotec.svg"
                />
              </div>
              <div class="org-info">
                <span class="org-badge">ORGANIZADORA</span>
                <h3 class="org-name">Ma. Eugenia Pointis</h3>
                <p class="org-role">Directora general</p>
              </div>
            </div>
          </Motion>

          <Motion v-bind="staggerMotion(1)">
            <div class="org-card">
              <div class="org-image-placeholder">
                <NuxtImg
                  src="/placeholder-person-2.jpg"
                  alt="Mónica Zacarías"
                  class="org-image"
                  fallback="/logo-innotec.svg"
                />
              </div>
              <div class="org-info">
                <span class="org-badge">ORGANIZADORA</span>
                <h3 class="org-name">Mónica Zacarías</h3>
                <p class="org-role">Presidente del CECYT</p>
              </div>
            </div>
          </Motion>

          <Motion v-bind="staggerMotion(2)">
            <div class="org-card">
              <div class="org-image-placeholder">
                <NuxtImg
                  src="/placeholder-person-3.jpg"
                  alt="Amelia Nery Huerta"
                  class="org-image"
                  fallback="/logo-innotec.svg"
                />
              </div>
              <div class="org-info">
                <span class="org-badge">ORGANIZADORA</span>
                <h3 class="org-name">Amelia Nery Huerta</h3>
                <p class="org-role">Directora general</p>
              </div>
            </div>
          </Motion>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* ===== PAGE BASE ===== */
.innotec-page {
  position: relative;
  background: #080C16;
  min-height: 100vh;
  overflow: hidden;
  font-family: 'Fractul Regular', 'Fractul', 'Inter', system-ui, sans-serif;
  color: #F3F6FE;
}

.innotec-page::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: 0;
  background-image:
    linear-gradient(rgba(25, 68, 240, 0.055) 1px, transparent 1px),
    linear-gradient(90deg, rgba(25, 68, 240, 0.055) 1px, transparent 1px);
  background-size: 72px 72px;
  mask-image: linear-gradient(180deg, black 0%, rgba(0, 0, 0, 0.86) 42%, rgba(0, 0, 0, 0.72) 100%);
  pointer-events: none;
}

.section-container {
  position: relative;
  z-index: 1;
  width: min(100%, 1100px);
  max-width: 1100px;
  margin-inline: auto;
  padding-inline: clamp(1.25rem, 4vw, 3rem);
}

/* ===== HERO SECTION ===== */
.acerca-hero {
  position: relative;
  z-index: 1;
  padding-top: clamp(8rem, 12vw, 12rem);
  padding-bottom: clamp(3rem, 6vw, 5rem);
  display: flex;
  justify-content: center;
}

.acerca-hero-container {
  width: 100%;
  max-width: 800px;
  text-align: center;
  padding-inline: clamp(1.25rem, 4vw, 3rem);
}

.acerca-hero-header {
  position: relative;
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.acerca-hero-glow-line {
  width: 120px;
  height: 2px;
  background: linear-gradient(90deg, transparent, rgba(55, 230, 241, 0.8), rgba(25, 68, 240, 0.8), transparent);
  margin-bottom: 1.5rem;
  box-shadow: 0 0 12px rgba(55, 230, 241, 0.4);
}

.acerca-title {
  font-family: 'Fractul Black', 'Fractul', 'Inter', system-ui, sans-serif;
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 900;
  margin: 0 0 0.5rem;
  letter-spacing: -0.02em;
  line-height: 1.1;
  color: #F3F6FE;
}

.acerca-subtitle {
  font-size: clamp(0.9rem, 2vw, 1.1rem);
  font-weight: 400;
  color: rgba(203, 209, 251, 0.8);
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin: 0;
}

.acerca-why {
  margin-top: 2rem;
  padding: 0 1rem;
}

.why-title {
  font-family: 'Fractul Black', 'Fractul', 'Inter', system-ui, sans-serif;
  font-size: 1.25rem;
  font-weight: 900;
  color: #7B8AF7; /* Light purple/blue */
  margin: 0 0 1rem;
  letter-spacing: 0.05em;
}

.why-text {
  font-size: clamp(0.95rem, 1.5vw, 1.05rem);
  line-height: 1.7;
  color: rgba(203, 209, 251, 0.85);
  margin: 0;
}

/* ===== EJES TEMATICOS SECTION ===== */
.acerca-ejes-section {
  position: relative;
  z-index: 1;
  padding: clamp(5rem, 10vw, 8rem) clamp(1.25rem, 4vw, 3rem);
}

.section-header-center {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: clamp(3rem, 6vw, 5rem);
}

.section-title {
  font-family: 'Fractul Black', 'Fractul', 'Inter', system-ui, sans-serif;
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 900;
  margin: 0;
  color: #F3F6FE;
  letter-spacing: -0.01em;
}

.section-subtitle {
  font-size: 1rem;
  color: rgba(203, 209, 251, 0.7);
  margin-top: 0.5rem;
  margin-bottom: 0;
}

.ejes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: clamp(2rem, 4vw, 3rem);
}

.eje-card {
  position: relative;
  padding: clamp(2rem, 4vw, 2.5rem);
  border: 1px solid rgba(25, 68, 240, 0.24);
  border-radius: 12px;
  background: linear-gradient(135deg, rgba(14, 21, 46, 0.4), rgba(8, 12, 22, 0.3));
  backdrop-filter: blur(8px);
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.eje-card:hover {
  border-color: rgba(123, 138, 247, 0.5);
  background: linear-gradient(135deg, rgba(14, 21, 46, 0.6), rgba(8, 12, 22, 0.5));
  transform: translateY(-4px);
  box-shadow: 0 8px 32px rgba(25, 68, 240, 0.2);
}

.eje-num {
  display: block;
  font-family: 'Fractul Black', 'Fractul', 'Inter', system-ui, sans-serif;
  font-size: 2.5rem;
  font-weight: 900;
  color: rgba(123, 138, 247, 0.4);
  margin-bottom: 1rem;
  line-height: 1;
}

.eje-title {
  font-family: 'Fractul Black', 'Fractul', 'Inter', system-ui, sans-serif;
  font-size: 1.25rem;
  font-weight: 900;
  color: #CBD1FB;
  margin: 0 0 1rem;
  line-height: 1.3;
}

.eje-desc {
  font-size: 0.95rem;
  line-height: 1.6;
  color: rgba(203, 209, 251, 0.75);
  margin: 0;
}

/* ===== INFO GRID SECTION ===== */
.acerca-info-section {
  position: relative;
  z-index: 1;
  padding: clamp(5rem, 10vw, 8rem) clamp(1.25rem, 4vw, 3rem);
}

.info-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(2rem, 4vw, 3.5rem);
  align-items: start;
}

.info-left-col {
  display: flex;
  flex-direction: column;
  gap: clamp(2rem, 4vw, 2.5rem);
}

.info-card {
  border: 1px solid rgba(25, 68, 240, 0.24);
  border-radius: 12px;
  background: linear-gradient(135deg, rgba(14, 21, 46, 0.4), rgba(8, 12, 22, 0.3));
  padding: clamp(1.5rem, 3vw, 2rem);
  transition: all 0.3s ease;
}

.info-card:hover {
  border-color: rgba(123, 138, 247, 0.5);
  background: linear-gradient(135deg, rgba(14, 21, 46, 0.6), rgba(8, 12, 22, 0.5));
  transform: translateY(-4px);
  box-shadow: 0 8px 32px rgba(25, 68, 240, 0.2);
}

.info-card-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.info-icon {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #7B8AF7;
}

.info-card-title {
  font-family: 'Fractul Black', 'Fractul', 'Inter', system-ui, sans-serif;
  font-size: 1.1rem;
  font-weight: 900;
  color: #CBD1FB;
  margin: 0;
}

.info-card-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.date-block {
  padding-bottom: 1rem;
}

.date-block:last-child {
  padding-bottom: 0;
}

.date-badge {
  display: inline-block;
  font-family: 'Fractul Black', 'Fractul', 'Inter', system-ui, sans-serif;
  font-size: 0.7rem;
  font-weight: 900;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #7B8AF7;
  margin-bottom: 0.5rem;
}

.date-text {
  font-size: 0.95rem;
  line-height: 1.6;
  color: rgba(203, 209, 251, 0.85);
  margin: 0;
}

.para-quien-text {
  font-size: 0.95rem;
  line-height: 1.7;
  color: rgba(203, 209, 251, 0.8);
  margin: 0;
}

.info-card-map {
  display: flex;
  flex-direction: column;
}

.sede-text {
  font-size: 0.95rem;
  color: rgba(203, 209, 251, 0.8);
  margin: 0 0 1rem;
  line-height: 1.6;
}

.map-placeholder {
  flex: 1;
  min-height: 300px;
  border: 1px solid rgba(25, 68, 240, 0.24);
  border-radius: 8px;
  background: rgba(8, 12, 22, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
}

.map-mockup {
  color: rgba(203, 209, 251, 0.5);
  font-size: 0.9rem;
}

.btn-maps {
  padding: 0.75rem 1.5rem;
  border: 1px solid rgba(123, 138, 247, 0.5);
  border-radius: 8px;
  background: linear-gradient(135deg, rgba(25, 68, 240, 0.2), rgba(123, 138, 247, 0.1));
  color: #7B8AF7;
  font-family: 'Fractul Black', 'Fractul', 'Inter', system-ui, sans-serif;
  font-size: 0.9rem;
  font-weight: 900;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-maps:hover {
  border-color: rgba(123, 138, 247, 0.8);
  background: linear-gradient(135deg, rgba(25, 68, 240, 0.35), rgba(123, 138, 247, 0.2));
  color: #CBD1FB;
  box-shadow: 0 4px 16px rgba(25, 68, 240, 0.2);
}

/* ===== ORGANIZADORAS SECTION ===== */
.acerca-org-section {
  position: relative;
  z-index: 1;
  padding: clamp(5rem, 10vw, 8rem) clamp(1.25rem, 4vw, 3rem);
}

.org-glow-line {
  width: 100px;
  height: 2px;
  background: linear-gradient(90deg, transparent, rgba(123, 138, 247, 0.6), transparent);
  margin-bottom: 1.5rem;
  box-shadow: 0 0 12px rgba(123, 138, 247, 0.3);
}

.org-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: clamp(2rem, 4vw, 3rem);
}

.org-card {
  text-align: center;
  transition: all 0.3s ease;
}

.org-card:hover {
  transform: translateY(-8px);
}

.org-image-placeholder {
  width: 100%;
  aspect-ratio: 1;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 1.5rem;
  border: 1px solid rgba(25, 68, 240, 0.24);
}

.org-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.org-badge {
  display: inline-block;
  font-family: 'Fractul Black', 'Fractul', 'Inter', system-ui, sans-serif;
  font-size: 0.7rem;
  font-weight: 900;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #7B8AF7;
  margin-bottom: 0.5rem;
}

.org-name {
  font-family: 'Fractul Black', 'Fractul', 'Inter', system-ui, sans-serif;
  font-size: 1.1rem;
  font-weight: 900;
  color: #CBD1FB;
  margin: 0.5rem 0;
}

.org-role {
  font-size: 0.9rem;
  color: rgba(203, 209, 251, 0.7);
  margin: 0;
}

.org-info {
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* ===== RESPONSIVE ===== */
@media (max-width: 768px) {
  .info-grid {
    grid-template-columns: 1fr;
  }

  .org-grid {
    grid-template-columns: 1fr;
  }
}
</style>
