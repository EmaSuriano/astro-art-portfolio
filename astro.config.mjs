import { defineConfig } from 'astro/config';
import { astroImageTools } from 'astro-imagetools';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [astroImageTools, tailwind()],
});
