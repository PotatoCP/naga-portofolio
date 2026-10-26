import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const commonFields = {
  order: z.number().int().positive(),
  link: z.url().optional(),
  draft: z.boolean().default(false),
};

const experiences = defineCollection({
  loader: glob({
    base: "./src/content/experiences",
    pattern: "**/*.md",
  }),
  schema: z.object({
    ...commonFields,
    title: z.string(),
    period: z.string(),
    location: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

const achievements = defineCollection({
  loader: glob({
    base: "./src/content/achievements",
    pattern: "**/*.md",
  }),
  schema: z.object({
    ...commonFields,
    title: z.string(),
    time: z.string(),
  }),
});

const projects = defineCollection({
  loader: glob({
    base: "./src/content/projects",
    pattern: "**/*.md",
  }),
  schema: z.object({
    ...commonFields,
    title: z.string(),
    kind: z.string(),
    link: z.url(),
    linkLabel: z.string(),
  }),
});

const blog = defineCollection({
  loader: glob({
    base: "./src/content/blog",
    pattern: "**/*.md",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    published: z.coerce.date(),
    updated: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const education = defineCollection({
  loader: glob({
    base: "./src/content/education",
    pattern: "**/*.md",
  }),
  schema: z.object({
    ...commonFields,
    institution: z.string(),
    period: z.string(),
    location: z.string().optional(),
  }),
});

export const collections = {
  experiences,
  projects,
  blog,
  achievements,
  education,
};
