import { defineCollection, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';
import { glob } from 'astro/loaders';

const releaseNotes = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/releaseNotes"}),
  schema: docsSchema({
    extend: z.object({
      version: z.string(),
      features: z.array(z.string()),
      date: z.date({ coerce: true })
    })
  }),
});

const docs = defineCollection({
  loader: docsLoader(), 
  schema: docsSchema(), 
});

export const collections = { docs, releaseNotes };
