// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages project site: https://wibby-web.github.io/business_restaurant_sample/
  // The repo lives under the Wibby-Web org, and Pages serves a project site from
  // a subpath, so assets must be prefixed with that subpath.
  site: 'https://wibby-web.github.io',
  base: '/business_restaurant_sample',

  integrations: [react()],

  vite: {
    plugins: [tailwindcss()]
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});