import { defineCollection, reference, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';
import { glob } from 'astro/loaders';

const docs = defineCollection({
  loader: docsLoader(),
  schema: docsSchema(), 
});

const changelogs = defineCollection({
	loader: glob({ base: './src/content/changelogs/', pattern: '*/**/*.md' }),
	// Type check the frontmatter
	schema: z.object({
		title: z.string(),
		description: z.string(),
		versionNumber: z.string(),
		image: z.object({
			url: z.string(),
			alt: z.string(),
		}).optional(),
		// Transform string to date
		date: z.date({ coerce: true })
	})
});

const releaseNotes = defineCollection({
	loader: glob({ base: "./src/content/release-notes/", pattern: '**/*.mdx'}),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		versionNumber: z.string(),
		image: z.object({
			url: z.string(),
			alt: z.string(),
		}).optional(),
		overview: z.boolean(),
		// Transform string to date
		date: z.date({ coerce: true })
	})
});


export const collections = {
	docs, changelogs, releaseNotes
};
