// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';
import { sidebar } from "./astro.sidebar";
import { devServerFileWatcher } from "./config/dev-server-file-watcher";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

import node from "@astrojs/node";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [
      [rehypeKatex, { /* Katex plugin options */ }]
    ],
  },
  integrations: [devServerFileWatcher([
    './config/*',
    './astro.sidebar.ts',
    './src/content/nav/*.ts',
    './src/middleware.ts',
  ]), starlight({
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
      PageTitle: "./src/components/starlight/PageTitle.astro",
      PageFrame: "./src/components/starlight/PageFrame.astro",
      PageSidebar: "./src/components/starlight/PageSidebar.astro", 
      ThemeSelect: "./src/components/starlight/ThemeSelect.astro",
      TwoColumnContent: "./src/components/starlight/TwoColumnContent.astro",
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
    routeMiddleware: './src/routeData.ts',
    prerender: false,
  }), tailwind({ applyBaseStyles: false }), preact()],
  adapter: node({
    mode: "standalone",
  }),
  output: 'server',
});
