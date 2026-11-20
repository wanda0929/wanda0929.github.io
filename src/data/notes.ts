import type { MarkdownInstance } from "astro";

interface NoteFrontmatter {
  title: string;
  description: string;
  category?: string;
  date: string;
  draft?: boolean;
}

export interface ResearchNote {
  id: string;
  title: string;
  description: string;
  category: string;
  href?: string;
  date?: string;
  status?: string;
}

export interface PublishedResearchNote extends ResearchNote {
  href: string;
  date: string;
}

const noteFiles = import.meta.glob<MarkdownInstance<NoteFrontmatter>>(
  ["../pages/notes/**/*.md", "../pages/writing/**/*.md"],
  { eager: true },
);

const categoryNames: Record<string, string> = {
  "Science Explained": "Explainer",
  "Paper Reviews": "Paper note",
  "Research Notes": "Technical note",
};

export const publishedNotes: PublishedResearchNote[] = Object.values(noteFiles)
  .filter((note) => note.frontmatter.draft !== true && Boolean(note.url))
  .map((note) => ({
    id: note.url!.split("/").filter(Boolean).at(-1)!,
    title: note.frontmatter.title,
    description: note.frontmatter.description,
    category: categoryNames[note.frontmatter.category ?? ""]
      ?? note.frontmatter.category
      ?? "Technical note",
    href: note.url!,
    date: note.frontmatter.date,
  }))
  .sort((a, b) => Date.parse(b.date) - Date.parse(a.date));

const upcomingNotes: ResearchNote[] = [
  {
    id: "sr-single-qubit-gates",
    title: "Why Are Single-Qubit Gates in Strontium Challenging?",
    description: "A guided look at encoding strategies and the physical origins of gate errors in strontium atoms.",
    category: "Explainer",
    status: "In preparation",
  },
  {
    id: "optical-clock-transitions",
    title: "What Makes an Atomic Transition an Optical Clock?",
    description: "The atomic properties that make a transition useful as a stable frequency reference.",
    category: "Explainer",
    status: "In preparation",
  },
  {
    id: "automated-rydberg-gates",
    title: "Automating the Search for High-Fidelity Rydberg Gates",
    description: "Pulse optimization, independent verification, and the role of automation in quantum control.",
    category: "Technical note",
    status: "In preparation",
  },
];

const publishedIds = new Set(publishedNotes.map((note) => note.id));
const publishedTitles = new Set(publishedNotes.map((note) => note.title.trim().toLowerCase()));

export const researchNotes: ResearchNote[] = [
  ...publishedNotes,
  ...upcomingNotes.filter((note) =>
    !publishedIds.has(note.id)
    && !publishedTitles.has(note.title.trim().toLowerCase()),
  ),
];
