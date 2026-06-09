<template>
  <svg
    class="wave-background"
    viewBox="0 0 1200 100"
    preserveAspectRatio="xMidYMid slice"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style="stop-color: rgba(25, 68, 240, 0.3); stop-opacity: 1" />
        <stop offset="100%" style="stop-color: rgba(25, 68, 240, 0); stop-opacity: 0" />
      </linearGradient>
    </defs>

    <!-- Wave 1 - Deep -->
    <path
      d="M 0,50 Q 150,30 300,50 T 600,50 T 900,50 T 1200,50 L 1200,100 Q 600,100 0,100 Z"
      fill="rgba(25, 68, 240, 0.15)"
      class="wave wave-1"
    />

    <!-- Wave 2 - Mid -->
    <path
      d="M 0,60 Q 100,40 200,60 T 600,60 T 1000,60 T 1200,60 L 1200,100 Q 600,100 0,100 Z"
      fill="url(#waveGradient)"
      class="wave wave-2"
    />

    <!-- Wave 3 - Surface -->
    <path
      d="M 0,70 Q 200,50 400,70 T 800,70 T 1200,70 L 1200,100 Q 600,100 0,100 Z"
      fill="rgba(55, 230, 241, 0.1)"
      class="wave wave-3"
    />
  </svg>
</template>

<style scoped>
.wave-background {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  z-index: 1;
  opacity: 0.6;
  pointer-events: none;
}

.wave {
  animation: wave-motion 8s ease-in-out infinite;
  transform-origin: center;
}

.wave-1 {
  animation-delay: 0s;
  animation-duration: 8s;
}

.wave-2 {
  animation-delay: -2s;
  animation-duration: 10s;
}

.wave-3 {
  animation-delay: -4s;
  animation-duration: 12s;
}

@keyframes wave-motion {
  0% {
    d: path("M 0,50 Q 150,30 300,50 T 600,50 T 900,50 T 1200,50 L 1200,100 Q 600,100 0,100 Z");
  }
  25% {
    d: path("M 0,55 Q 150,25 300,55 T 600,55 T 900,55 T 1200,55 L 1200,100 Q 600,100 0,100 Z");
  }
  50% {
    d: path("M 0,50 Q 150,35 300,50 T 600,50 T 900,50 T 1200,50 L 1200,100 Q 600,100 0,100 Z");
  }
  75% {
    d: path("M 0,55 Q 150,25 300,55 T 600,55 T 900,55 T 1200,55 L 1200,100 Q 600,100 0,100 Z");
  }
  100% {
    d: path("M 0,50 Q 150,30 300,50 T 600,50 T 900,50 T 1200,50 L 1200,100 Q 600,100 0,100 Z");
  }
}

@media (prefers-reduced-motion: reduce) {
  .wave {
    animation: none;
  }
}
</style>
