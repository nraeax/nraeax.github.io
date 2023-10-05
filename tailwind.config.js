import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  darkMode: 'class',
  jit: true,
  theme: {
    extend: {
      colors: {
        'navy': '#191835',
      }
    }, 
  },
  plugins: [],
  content: []
}