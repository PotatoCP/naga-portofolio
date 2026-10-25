# Naga's Portfolio

Personal portfolio website for Kenzie Raditya Tirtarahardja, designed with an
old-school 8-bit visual style.

The site is built with:

- [Astro](https://astro.build/) for static pages and content collections.
- [NES.css](https://nostalgic-css.github.io/NES.css/) for the 8-bit components
  and icons.
- [Tailwind CSS](https://tailwindcss.com/) for layout, spacing, responsive
  styling, and small utilities.
- [Press Start 2P](https://fontsource.org/fonts/press-start-2p) bundled locally
  through Fontsource.

The production site is available at
[naga-portofolio.vercel.app](https://naga-portofolio.vercel.app/).

## Requirements

- A Node.js version supported by the installed Astro release.
- npm.

NES.css declares an old Node.js engine in its package metadata. Modern Node.js
versions may show an installation warning, but the stylesheet itself is bundled
and works in the Astro build.

## Development

Install the exact dependency versions from the lockfile:

```bash
npm ci
```

Start the development server:

```bash
npm run dev
```

Run Astro and TypeScript diagnostics:

```bash
npm run check
```

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

The generated static site is written to `dist/`.

## Adding portfolio content

Portfolio entries are Markdown files validated by schemas in
`src/content.config.ts`. A schema error stops the build and points to the
invalid file.

Entries are displayed by ascending `order`: `1` appears before `2`. Set
`draft: true` to keep an entry out of the rendered site.

### Add an experience

Create a file in `src/content/experiences/`, for example
`src/content/experiences/example-company.md`:

```md
---
title: Example Company - Software Engineer
period: January 2026 - Present
order: 1
location: Jakarta, Indonesia
link: https://example.com
featured: false
draft: false
---

Describe the role here. The Markdown body is displayed in the details dialog,
so it can contain paragraphs, links, and lists.
```

Required fields are `title`, `period`, and `order`. The `location`, `link`,
`featured`, and `draft` fields are optional.

### Add an achievement

Create a file in `src/content/achievements/`:

```md
---
title: Example Competition - First Place
time: October 2026
order: 1
link: https://example.com
draft: false
---
```

Required fields are `title`, `time`, and `order`. The `link` and `draft` fields
are optional.

### Add education

Create a file in `src/content/education/`:

```md
---
institution: Example University
period: August 2026 - June 2030
order: 1
location: Jakarta, Indonesia
link: https://example.edu
draft: false
---
```

Required fields are `institution`, `period`, and `order`. The `location`,
`link`, and `draft` fields are optional.

## Project structure

```text
src/
├── components/        Astro UI components
├── content/           Markdown portfolio entries
├── content.config.ts  Collection schemas
├── layouts/           Shared HTML document layout
├── pages/             File-based routes
├── scripts/           Browser-side TypeScript
└── styles/            Global Tailwind and NES.css setup
```

Important maintenance locations:

- Page metadata and favicon: `src/layouts/Layout.astro`.
- Name, role, and social links: `src/components/Header.astro` and
  `src/components/SocialMedia.astro`.
- Portfolio rendering: `src/components/PortfolioContent.astro`.
- Dropdown, dialog, focus, and sound behavior:
  `src/scripts/portfolio-interactions.ts`.
- Global colors, font, accessibility, and component adjustments:
  `src/styles/global.css`.
- Images, sounds, and favicon: `public/`.

NES.css remains an installed dependency and is imported globally in the CSS
`components` layer. This keeps its visual styles while allowing Tailwind utility
classes to override NES.css resets when necessary.

## Deployment

Astro generates a static site, so no Vercel server adapter is required. Vercel
can detect Astro automatically and use `npm run build`, with `dist/` as the
output directory.

Push a branch to create a preview deployment, verify it, and merge only after
the preview matches the local production build.
