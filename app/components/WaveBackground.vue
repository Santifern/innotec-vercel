<script setup lang="ts">
const canvasRef = ref<HTMLCanvasElement | null>(null)

let context: CanvasRenderingContext2D | null = null
let width = 0
let height = 0
let dpr = 1
let resizeTimeout: ReturnType<typeof setTimeout> | undefined
const staticTime = 1.8

type Point = {
  x: number
  y: number
  depth: number
}

function resizeCanvas() {
  const canvas = canvasRef.value

  if (!canvas) {
    return
  }

  const rect = canvas.getBoundingClientRect()

  dpr = Math.min(window.devicePixelRatio || 1, 1.25)
  width = Math.max(1, rect.width)
  height = Math.max(1, rect.height)

  canvas.width = Math.floor(width * dpr)
  canvas.height = Math.floor(height * dpr)
  canvas.style.width = `${width}px`
  canvas.style.height = `${height}px`

  context = canvas.getContext('2d')
  context?.setTransform(dpr, 0, 0, dpr, 0, 0)
  drawTopology(staticTime)
}

function handleResize() {
  window.clearTimeout(resizeTimeout)
  resizeTimeout = window.setTimeout(resizeCanvas, 140)
}

function getWavePoint(column: number, row: number, time: number, columns: number, rows: number): Point {
  const progressX = column / (columns - 1)
  const progressY = row / (rows - 1)
  const strandOffset = (progressY - 0.5) * 2
  const x = (progressX * 1.18 - 0.09) * width
  const centerY = height * 0.29
  const envelope = Math.sin(progressX * Math.PI)
  const waist = 0.58 + Math.sin(progressX * Math.PI * 4.1 + 0.4) ** 2 * 0.42
  const thickness = height * (0.055 + envelope * 0.18) * waist
  const perspective = 1 - Math.abs(strandOffset) * 0.48
  const braidedOffset = Math.sin(progressX * Math.PI * 5.35 + strandOffset * 2.35 + time) * height * 0.046
  const primaryWave = Math.sin(progressX * Math.PI * 5.8 + time * 0.9) * height * 0.092
  const secondaryWave = Math.sin(progressX * Math.PI * 12.2 - time * 0.7 + strandOffset * 1.55) * height * 0.028
  const depthWave = Math.cos(progressX * Math.PI * 4.6 + strandOffset * 2.2)
  const xDrift = Math.sin(progressX * Math.PI * 3.6 + strandOffset * 1.8) * width * 0.014
  const depth = 0.34 + perspective * 0.48 + (depthWave + 1) * 0.09

  return {
    x: x + xDrift,
    y: centerY + primaryWave + secondaryWave + braidedOffset + strandOffset * thickness * perspective,
    depth
  }
}

function strokeSegment(from: Point, to: Point, alpha: number, lineWidth: number) {
  if (!context) {
    return
  }

  const gradient = context.createLinearGradient(from.x, from.y, to.x, to.y)

  gradient.addColorStop(0, `rgba(32, 136, 255, ${alpha * 0.55})`)
  gradient.addColorStop(0.5, `rgba(91, 238, 255, ${alpha})`)
  gradient.addColorStop(1, `rgba(120, 160, 255, ${alpha * 0.46})`)

  context.beginPath()
  context.moveTo(from.x, from.y)
  context.lineTo(to.x, to.y)
  context.strokeStyle = gradient
  context.lineWidth = lineWidth
  context.stroke()
}

function strokeRibbon(points: Point[], alpha: number, lineWidth: number) {
  if (!context || points.length < 2) {
    return
  }

  const gradient = context.createLinearGradient(0, height * 0.22, width, height * 0.44)

  gradient.addColorStop(0, `rgba(24, 119, 255, ${alpha * 0.32})`)
  gradient.addColorStop(0.28, `rgba(54, 205, 255, ${alpha * 0.84})`)
  gradient.addColorStop(0.5, `rgba(176, 253, 255, ${alpha})`)
  gradient.addColorStop(0.72, `rgba(70, 154, 255, ${alpha * 0.66})`)
  gradient.addColorStop(1, `rgba(40, 229, 255, ${alpha * 0.28})`)

  context.beginPath()
  context.moveTo(points[0]!.x, points[0]!.y)

  for (let index = 1; index < points.length - 2; index++) {
    const current = points[index]!
    const next = points[index + 1]!
    const midX = (current.x + next.x) * 0.5
    const midY = (current.y + next.y) * 0.5

    context.quadraticCurveTo(current.x, current.y, midX, midY)
  }

  const penultimate = points[points.length - 2]!
  const last = points[points.length - 1]!

  context.quadraticCurveTo(penultimate.x, penultimate.y, last.x, last.y)
  context.strokeStyle = gradient
  context.lineWidth = lineWidth
  context.stroke()
}

function drawTopology(time: number) {
  if (!context) {
    return
  }

  const columns = Math.max(72, Math.floor(width / 20))
  const rows = Math.max(17, Math.floor(height / 44))
  const points: Point[][] = []

  for (let row = 0; row < rows; row++) {
    const rowPoints: Point[] = []

    for (let column = 0; column < columns; column++) {
      rowPoints.push(getWavePoint(column, row, time, columns, rows))
    }

    points.push(rowPoints)
  }

  context.clearRect(0, 0, width, height)
  context.save()
  context.globalCompositeOperation = 'lighter'
  context.lineCap = 'round'
  context.lineJoin = 'round'
  context.shadowColor = 'rgba(35, 214, 255, 0.58)'
  context.shadowBlur = 9

  for (let row = 0; row < rows; row++) {
    const progressY = row / (rows - 1)
    const centerBias = 1 - Math.abs(progressY - 0.5) * 1.75
    const alpha = Math.max(0.065, 0.14 + centerBias * 0.24)

    strokeRibbon(points[row] ?? [], alpha, 0.34 + Math.max(0, centerBias) * 0.28)
  }

  context.shadowBlur = 7

  for (let column = 1; column < columns - 1; column += 4) {
    for (let row = 0; row < rows - 1; row += 2) {
      const from = points[row]?.[column]
      const to = points[row + 1]?.[column + ((row + column) % 2 === 0 ? 1 : -1)]

      if (!from || !to) {
        continue
      }

      const alpha = 0.04 + from.depth * 0.088

      strokeSegment(from, to, alpha, 0.26)
    }
  }

  context.shadowColor = 'rgba(134, 241, 255, 0.78)'
  context.shadowBlur = 12

  for (let row = 0; row < rows; row++) {
    const progressY = row / (rows - 1)
    const centerBias = 1 - Math.abs(progressY - 0.5) * 1.5

    for (let column = 0; column < columns; column += 2) {
      const point = points[row]?.[column]

      if (!point) {
        continue
      }

      const sparkle = 0.5 + Math.sin(row * 0.82 + column * 0.18 + time) * 0.5
      const radius = 0.32 + Math.max(0, centerBias) * 0.48 + sparkle * 0.18
      const alpha = 0.13 + point.depth * 0.28

      context.beginPath()
      context.arc(point.x, point.y, radius, 0, Math.PI * 2)
      context.fillStyle = `rgba(128, 239, 255, ${alpha})`
      context.fill()
    }
  }

  context.shadowBlur = 18

  for (let row = 4; row < rows - 4; row += 5) {
    strokeRibbon(points[row] ?? [], 0.36, 0.9)
  }

  context.shadowColor = 'rgba(96, 231, 255, 0.92)'
  context.shadowBlur = 28
  strokeRibbon(points[Math.floor(rows * 0.42)] ?? [], 0.66, 1.28)
  strokeRibbon(points[Math.floor(rows * 0.52)] ?? [], 0.78, 1.48)
  strokeRibbon(points[Math.floor(rows * 0.62)] ?? [], 0.48, 1.05)

  context.restore()
}

onMounted(() => {
  resizeCanvas()
  window.addEventListener('resize', handleResize, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
  window.clearTimeout(resizeTimeout)
})
</script>

<template>
  <canvas
    ref="canvasRef"
    class="wave-background"
    aria-hidden="true"
  />
</template>

<style scoped>
.wave-background {
  position: absolute;
  top: 0;
  left: -9%;
  z-index: 0;
  width: 118%;
  height: 100%;
  display: block;
  pointer-events: none;
  background: transparent;
  transform: translate3d(0, 0, 0) scale(1.03);
  transform-origin: center;
  animation:
    wave-background-drift 12s ease-in-out infinite,
    wave-background-pulse 7s ease-in-out infinite;
  will-change: transform, opacity;
}

@keyframes wave-background-drift {
  0% {
    transform: translate3d(-2.4%, -0.8%, 0) scale(1.03) skewX(-0.45deg);
  }

  28% {
    transform: translate3d(1.4%, 0.55%, 0) scale(1.045) skewX(0.25deg);
  }

  56% {
    transform: translate3d(2.6%, -0.25%, 0) scale(1.035) skewX(0.5deg);
  }

  82% {
    transform: translate3d(-0.8%, 0.9%, 0) scale(1.052) skewX(-0.2deg);
  }

  100% {
    transform: translate3d(-2.4%, -0.8%, 0) scale(1.03) skewX(-0.45deg);
  }
}

@keyframes wave-background-pulse {
  0%, 100% {
    opacity: 0.82;
  }

  45% {
    opacity: 1;
  }

  70% {
    opacity: 0.92;
  }
}

@media (prefers-reduced-motion: reduce) {
  .wave-background {
    animation: none;
  }
}
</style>
