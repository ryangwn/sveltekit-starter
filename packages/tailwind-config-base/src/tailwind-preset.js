/** @type {import('tailwindcss').Config} */
const config = {
  content: [],
  darkMode: "class",
  theme: {
    extend: {
      colors: {}
    }
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
    require('@savvywombat/tailwindcss-grid-areas')
  ]
}
export default config
