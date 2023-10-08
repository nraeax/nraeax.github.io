import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  darkMode: 'class',
  jit: true,
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        'dark': '#24143c',
        'light': '#eeeff3'
      }
    }, 
  },
  plugins: [
    require('@tailwindcss/container-queries'),
  ],
  content: []
}