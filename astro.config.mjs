import { defineConfig } from "astro/config";
import { astroImageTools } from "astro-imagetools";
import Tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [astroImageTools, Tailwind(), icon()],
});
