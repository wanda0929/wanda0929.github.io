# Wanda's Research Journal

A personal public research journal by Wanda, focused on quantum physics, neutral atoms, quantum control, and scientific ideas.

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

## Publishing an article

Create a Markdown file in `src/pages/writing/` with frontmatter:

```md
---
layout: ../../layouts/ArticleLayout.astro
title: "Your article title"
description: "A concise summary."
category: "Science Explained"
date: "2026-11-20"
readingTime: "8 min read"
draft: false
---
Your article in Markdown...
```

Set `draft: false` before publishing. Draft pages are currently excluded from the writing index but can be previewed locally. Do not put confidential, unpublished, or employer-owned research material in this public repository.

## Deployment

GitHub Actions builds the site and deploys it to GitHub Pages on every push to `main`. In the repository settings, set Pages → Build and deployment → Source to **GitHub Actions**.
