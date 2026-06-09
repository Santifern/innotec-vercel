/**
 * useScrollMotion
 * Composable para animaciones trigger al scrollear elementos en pantalla
 */
export const useScrollMotion = (delay = 0): any => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  inViewOptions: { once: true, margin: '-50px' } as any,
  transition: {
    type: 'spring',
    stiffness: 40,
    damping: 15,
    delay,
    mass: 0.8
  }
})

/**
 * useScrollMotionAdvanced
 * Variante más suave para animaciones complejas
 */
export const useScrollMotionAdvanced = (delay = 0): any => ({
  initial: { opacity: 0, y: 34, filter: 'blur(8px)' },
  whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
  inViewOptions: { once: true, amount: 0.28, margin: '0px 0px -12% 0px' } as any,
  transition: {
    duration: 0.82,
    delay,
    ease: [0.22, 1, 0.36, 1] as [number, number, number, number]
  }
})

/**
 * useHeroEnterMotion
 * Entrada ligera para elementos del hero above-the-fold
 */
export const useHeroEnterMotion = (delay = 0): any => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay }
})

/**
 * useEnterMotion
 * Composable para animaciones de entrada en página
 */
export const useEnterMotion = (delay = 0): any => ({
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: {
    type: 'spring',
    stiffness: 50,
    damping: 18,
    delay,
    mass: 0.8
  }
})

/**
 * useStaggerMotion
 * Composable para efecto stagger en listas
 */
export const useStaggerMotion = (index: number, baseDelay = 0.1): any => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  inViewOptions: { once: true, margin: '-50px' } as any,
  transition: {
    type: 'spring',
    stiffness: 45,
    damping: 14,
    delay: baseDelay + index * 0.12,
    mass: 0.8
  }
})

/**
 * useStaggerMotionAdvanced
 * Variante más compleja con scale y blur
 */
export const useStaggerMotionAdvanced = (index: number, baseDelay = 0.1): any => ({
  initial: { opacity: 0, y: 34, scale: 0.98, filter: 'blur(8px)' },
  whileInView: { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' },
  inViewOptions: { once: true, amount: 0.28, margin: '0px 0px -12% 0px' } as any,
  transition: {
    duration: 0.82,
    delay: baseDelay + index * 0.12,
    ease: [0.22, 1, 0.36, 1] as [number, number, number, number]
  }
})
