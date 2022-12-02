import { defineConfig } from 'astro/config';
import { astroImageTools } from 'astro-imagetools';
import tailwind from '@astrojs/tailwind';

import compress from 'astro-compress';

// https://astro.build/config
export default defineConfig({
  loading: 'lazy',
  preload: 'webp',
  integrations: [astroImageTools, tailwind(), compress()],
});
