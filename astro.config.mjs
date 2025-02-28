// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Docs with Tailwind',
      components: {
        Hero: "./src/components/starlight/Hero.astro",
      },
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
			customCss: [
        './src/tailwind.css',
        '@fontsource-variable/quicksand',
        '@fontsource-variable/fredoka',
        '@fontsource-variable/noto-sans-lao'
      ],
      favicon: "egglogo.svg",
		}),
		tailwind({ applyBaseStyles: false }),
	],
});
