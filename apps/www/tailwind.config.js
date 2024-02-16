import { preset } from 'tailwind-config-base'

/** @type {import('tailwindcss').Config} */
const config = {
  ...preset,
  content: [
    ...preset.content,
    './src/**/*.{svelte,js,ts}',
  ],
}
export default config
