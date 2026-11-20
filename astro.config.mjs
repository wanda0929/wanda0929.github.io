import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://wanda0929.github.io",
  integrations: [sitemap()],
  output: "static",
  markdown: {
    shikiConfig: { theme: "github-light" }
  }
});
