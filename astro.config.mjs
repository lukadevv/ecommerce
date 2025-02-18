// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import AstroPWA from "@vite-pwa/astro";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://lukadevv.github.io",
  base: "/ecommerce",
  integrations: [
    react(),
    AstroPWA({
      manifestFilename: "/ecommerce/manifest.json",
      devOptions: {
        enabled: true,
        type: "module",
      },
      registerType: "autoUpdate",
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    build: {
      minify: true,
      sourcemap: false,
    },
  },
});
