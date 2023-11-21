import { defineConfig } from 'astro/config';
import { astroImageTools } from 'astro-imagetools';
import Tailwind from '@astrojs/tailwind';
import Compress from 'astro-compress';

// https://astro.build/config
export default defineConfig({
  integrations: [astroImageTools, Tailwind(), Compress()],
});
