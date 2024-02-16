// eslint.config.js
import antfu from '@antfu/eslint-config'

export default antfu({
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
})
