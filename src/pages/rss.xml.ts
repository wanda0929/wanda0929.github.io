import rss from "@astrojs/rss";
import type { APIRoute } from "astro";

export const GET: APIRoute = async (context) => {
  return rss({
    title: "Wanda's Research Journal",
    description: "Quantum physics, research, and ideas by Wanda.",
    site: context.site!,
    items: []
  });
};
