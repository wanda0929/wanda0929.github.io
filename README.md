# Wanda's Research Journal

A personal public research journal by Wanda, focused on neutral-atom quantum computing, quantum control, and computational methods.

## Site structure

- **Research Notes** (`/notes/`) is the research notebook: physics explanations, paper notes, and technical explorations. Each entry has the same place in the list; categories describe the kind of note, not separate top-level sections.
- **Selected Work** (`/work/`) brings together selected papers, research projects, and computational tools. Its entries and verified resource links are maintained in `src/data/work.ts`.
- **About** (`/about/`) introduces Wanda's research and the purpose of the site.

The former `/writing/` index redirects to `/notes/`. Existing Markdown article URLs under `/writing/` remain supported.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Publishing a research note

Keep unfinished outlines in `drafts/`, outside `src/pages/`, so they do not create website pages. The existing outlines appear only as equally weighted **In preparation** entries in `src/data/notes.ts`; they have no article links or publication dates.

When a note is ready, move or create its Markdown file in `src/pages/notes/` with frontmatter:

```md
---
layout: ../../layouts/ArticleLayout.astro
title: "Your article title"
description: "A concise summary."
category: "Explainer"
date: "2026-11-20"
readingTime: "8 min read"
draft: false
---
Your article in Markdown...
```

Use `Explainer`, `Paper note`, or `Technical note` for the category. Set the date to the note's actual publication date and update its reading time. The layout path above assumes the Markdown file is directly inside `src/pages/notes/`; adjust the relative path for nested folders.

`src/data/notes.ts` automatically loads Markdown from both `src/pages/notes/` and the legacy `src/pages/writing/` directory. Published notes are sorted by date, displayed in the notebook and homepage lists, and included in the RSS feed. A corresponding pending entry is automatically omitted when its slug or title matches a published note.

`draft: true` excludes a page from those lists and the feed, but keeping an outline in `drafts/` is the way to avoid creating a page route. Source files in `drafts/` are still visible in this public repository. Do not put confidential, unpublished, or employer-owned research material in this public repository.

## Updating selected work

Edit `src/data/work.ts` to add or revise a work entry. Keep the title, description, type, year, and resource links aligned with the actual paper or project. Preprints remain labeled as preprints. The homepage and `/work/` use the same data, so an update stays consistent across both pages.

## Deployment

GitHub Actions builds the site and deploys it to GitHub Pages on every push to `main`. In the repository settings, set Pages → Build and deployment → Source to **GitHub Actions**.
