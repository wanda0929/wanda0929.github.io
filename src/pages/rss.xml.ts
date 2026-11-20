import rss from "@astrojs/rss";
import type { APIRoute } from "astro";
import { publishedNotes } from "../data/notes";

export const GET: APIRoute = async (context) => {
  return rss({
    title: "Wanda's Research Journal",
    description: "Research notes on neutral atoms, quantum control, and computational methods by Wanda.",
    site: context.site!,
    items: publishedNotes.map((note) => ({
      title: note.title,
      description: note.description,
      pubDate: new Date(note.date),
      link: note.href,
      categories: [note.category],
    })),
  });
};
