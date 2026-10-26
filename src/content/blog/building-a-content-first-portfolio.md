---
title: Building a Content-First Portfolio with Astro
description: Why this portfolio moved to Astro and Markdown content collections while keeping its NES-inspired identity.
published: 2026-10-26
tags:
  - Astro
  - Web Development
  - Portfolio
---

This portfolio started as a conventional application, but most of its pages are content. Experience, education, achievements, and projects do not need complex client-side state; they need a structure that is easy to update.

Moving to Astro made that structure much clearer:

- Portfolio entries live in Markdown files instead of being embedded in components.
- Content collections validate frontmatter before the site is built.
- Astro components keep the NES-inspired interface reusable and consistent.
- JavaScript is reserved for interactive details such as disclosures, dialogs, and sound effects.

The result is still the same personal portfolio visually, but adding or revising content now involves editing a focused Markdown file. This blog follows the same approach: each article is a Markdown document, while Astro handles routing, layout, and static generation.
