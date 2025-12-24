/// <reference types="vitest/config" />
// Vite config for Eduveris Sandbox (React 18 + Storybook + Vitest)
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';

// Resolve __dirname for ESM
const dirname = typeof __dirname !== 'undefined'
  ? __dirname
  : path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    react({ babel: {} }),
    svgr({
      svgrOptions: { plugins: ["@svgr/plugin-jsx"] }
    })
  ],
  define: {
    'process.env': {}
  },
  test: {
    projects: [
      {
        extends: true,
        plugins: [
          // Storybook Vitest integration
          storybookTest({
            configDir: path.join(dirname, '.storybook')
          })
        ],
        test: {
          name: 'storybook', // Ensure this name is unique if you have multiple projects
          browser: {
            enabled: true,
            headless: true,
            provider: playwright({}),
            instances: [
              { browser: 'chromium' }
            ]
          },
          setupFiles: ['.storybook/vitest.setup.ts']
        }
      }
    ]
  }
});