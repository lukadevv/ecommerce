// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://lukadevv.github.io",
  base: "/ecommerce",
  output: "static",
  integrations: [react()],
  vite: {
    ssr: {
      noExternal: /@mui\/.*?/,
    },
    plugins: [tailwindcss()],
  },
});
