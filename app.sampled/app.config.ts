export default defineAppConfig({
  ui: {
    colors: {
      primary: 'blue',
      neutral: 'zinc'
    },
    button: {
      slots: {
        base: 'font-semibold transition-all duration-300 cursor-pointer'
      },
      variants: {
        size: {
          xs: { base: 'px-3' },
          sm: { base: 'px-4' },
          md: { base: 'px-4' },
          lg: { base: 'px-5' },
          xl: { base: 'px-6' }
        }
      },
      compoundVariants: [{
        color: 'primary' as const,
        variant: 'solid' as const,
        class: 'bg-blue-600 hover:bg-blue-500 active:bg-blue-700 shadow-[0_0_20px_rgba(25,68,240,0.4)] hover:shadow-[0_0_35px_rgba(25,68,240,0.6)] hover:-translate-y-px active:translate-y-0 transition-all duration-300'
      }]
    }
  }
})
