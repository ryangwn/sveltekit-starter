// eslint.config.js
import antfu from '@antfu/eslint-config'

export default antfu(
  {
    svelte: true,
    formatters: {
      /**
       * Format CSS, LESS, SCSS files, also the `<style>` blocks in Vue
       * By default uses Prettier
       */
      css: true,
      /**
       * Format HTML files
       * By default uses Prettier
       */
      html: true,
      /**
       * Format Markdown files
       * Supports Prettier and dprint
       * By default uses Prettier
       */
      markdown: 'prettier'
    }
  },
  {
    ignores: [
      '.DS_Store',
      'node_modules',
      '/build',
      '/.svelte-kit',
      '/package',
      '.env',
      '.env.*',
      '!.env.example',

      // Ignore files for PNPM, NPM and YARN
      'pnpm-lock.yaml',
      'package-lock.json',
      'yarn.lock',
    ],
  },
  {
    rules: {
      'node/prefer-global/process': ['error', 'always' | 'never'],
    },
  }
)
