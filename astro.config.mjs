// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { sidebar } from "./astro.sidebar";
import { devServerFileWatcher } from "./config/astroIntergrations/dev-server-file-watcher";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import preact from "@astrojs/preact";
import SeoHeadConfig from './seo.config';

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://egglious-web.web.app",

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
      './src/content/nav/*.ts',
      './src/middleware.ts',
    ]),
    starlight({
      title: 'Egg',
      logo: {
        src: "./public/egglogo.svg",
        alt: "Egg's Logo",
      },
      head: SeoHeadConfig(),
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
      social: [
        { icon: "github", label: "Github", href: "https://github.com/henry-kimani" }
      ],
      sidebar,
      customCss: [
        './src/tailwind.css',
        '@fontsource-variable/quicksand',
      ],
      favicon: "egglogo.svg",
      prerender: true,
    }),
    preact()
  ],
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
