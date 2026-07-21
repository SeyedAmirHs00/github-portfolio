// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // Your live site URL (no trailing slash)
  site: "https://SeyedAmirHs00.github.io",
  // Project Pages live at /REPO_NAME/ — use "/" if the repo is USERNAME.github.io
  // Trailing slash keeps BASE_URL joinable as `${base}about`
  base: "/portfolio/",

  vite: {
    plugins: [tailwindcss()],
  },
});
