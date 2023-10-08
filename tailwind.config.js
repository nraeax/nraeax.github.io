import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  darkMode: 'class',
  jit: true,
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      display: [
        '"Sora", sans-serif'
      ],
      body: [
        '"Ubuntu", sans-serif'
      ]
    },
    extend: {
      colors: {
        'dark': '#24143c',
        'light': '#eeeff3'
      }
    }, 
  },
  plugins: [
  ],
  content: []
}