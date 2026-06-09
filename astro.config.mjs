import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://andejecruher.com',
  integrations: [tailwind(), sitemap(), mdx(), icon()],

  // Evita reinicios dobles por el watcher y permite puerto alternativo si ya está en uso
  server: {
    strictPort: false,
  },

  vite: {
    server: {
      watch: {
        ignored: ['**/.astro/**', '**/dist/**', '**/node_modules/**'],
      },
    },
  },
});
