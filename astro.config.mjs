import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  base: '/casper-gambini-s-zayouna/',
  output: 'static',
  integrations: [tailwind()],
});