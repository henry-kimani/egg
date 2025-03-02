// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';
import { sidebar } from "./astro.sidebar";

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Egg',
      components: {
        Hero: "./src/components/starlight/Hero.astro",
        Footer: "./src/components/starlight/Footer.astro",
        Sidebar: "./src/components/starlight/Sidebar.astro",
      },
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar,
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
