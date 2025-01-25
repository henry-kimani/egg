// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';
import { sidebar } from './astro.sidebar';
import { devServerFileWatcher } from './config/dev-server-file-watcher';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [devServerFileWatcher([
    './config/*', // custom functions 
    './astro.sidebar.ts', // Sidebar configuration file
    './src/content/nav/*.ts' // Sidebar labels
  ]), starlight({
    title: 'Egg',
    components: {
      Sidebar: "./src/components/starlight/Sidebar.astro",
    },
    social: {
      github: 'https://github.com/withastro/starlight',
    },
    sidebar,
    customCss: [
      './src/tailwind.css',
      '@fontsource-variable/nunito',
      '@fontsource/poppins',
      '@fontsource/roboto',
      '@fontsource/dejavu-sans',
      '@fontsource-variable/inter',
      '@fontsource-variable/fredoka',
      '@fontsource-variable/quicksand',
      '@fontsource-variable/noto-sans-lao',
    ],
  }), tailwind({ applyBaseStyles: false }), react()],
});
