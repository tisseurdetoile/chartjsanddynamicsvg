import { fileURLToPath } from 'node:url'
import { mergeConfig } from 'vite'
import { configDefaults, defineConfig } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'jsdom',
      exclude: [...configDefaults.exclude, 'e2e/*'],
      setupFiles: ['./vitest.setup.js'],
      root: fileURLToPath(new URL('./', import.meta.url)),
      deps: {
        inline: ['vitest-canvas-mock']
      },
      transformMode: {
        web: [/\.[jt]sx$/]
      }
    }
  })
)
