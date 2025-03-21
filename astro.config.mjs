// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';
import { sidebar } from "./astro.sidebar";
import { devServerFileWatcher } from "./config/dev-server-file-watcher";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [
      [rehypeKatex, { /* Katex plugin options */ }]
    ],
  },
	integrations: [
    devServerFileWatcher([
      './config/*',
      './astro.sidebar.ts',
      './src/content/nav/*.ts'
    ]),
		starlight({
      title: 'Egg',
      logo: {
        src: "./src/assets/egglogo.png",
        alt: "Egg's Logo",
      },
      components: {
        Hero: "./src/components/starlight/Hero.astro",
        Footer: "./src/components/starlight/Footer.astro",
        Sidebar: "./src/components/starlight/Sidebar.astro",
        Header: "./src/components/starlight/Header.astro",
        MobileMenuFooter: "./src/components/starlight/MobileMenuFooter.astro",
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
    react()
	],
});
