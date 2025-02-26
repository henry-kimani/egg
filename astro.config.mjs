// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';
import { sidebar } from './astro.sidebar';
import { devServerFileWatcher } from './config/dev-server-file-watcher';
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

import react from '@astrojs/react';

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
    './config/*', // custom functions 
    './astro.sidebar.ts', // Sidebar configuration file
    './src/content/nav/*.ts' // Sidebar labels
    ]),
    starlight({
      title: '🥚Egg',
      favicon: "/egglogo.svg",
      components: {
        Hero: "./src/components/starlight/Hero.astro",
        Sidebar: "./src/components/starlight/Sidebar.astro",
        Footer: "./src/components/starlight/ConditionalFooter.astro",
      },
      social: {
      github: 'https://github.com/withastro/starlight',
    },
    sidebar,
    customCss: [
      './src/tailwind.css',
      '@fontsource/dejavu-sans',
      '@fontsource-variable/fredoka',
      '@fontsource-variable/quicksand',
      '@fontsource-variable/noto-sans-lao',
    ],
  }),
  tailwind({ applyBaseStyles: false }), react()],
});
