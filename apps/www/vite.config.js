import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vitest/config'
import { visualizer } from 'rollup-plugin-visualizer'

const plugins = [
  sveltekit(),
]

if (process.env.ANALYZE === 'true') {
  plugins.push(visualizer({
    emitFile: true,
    filename: 'stats.html',
  }))
}

/** @type {import('vite').UserConfig} */
export default defineConfig({
  plugins,
  test: {
    include: ['src/**/*.{test,spec}.{js,ts}'],
  },
})
