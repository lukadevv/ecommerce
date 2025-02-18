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
      manifestFilename: "manifest.json",
      devOptions: {
        enabled: true,
        type: "module",
      },
      registerType: "autoUpdate",
      manifest: {
        name: "E-commerce",
        short_name: "e-commerce",
        icons: [
          {
            src: "/ecommerce/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/ecommerce/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
        theme_color: "#db6b42",
        background_color: "#db6b42",
        display: "standalone",
      },
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
