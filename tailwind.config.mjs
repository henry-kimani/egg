import colors from 'tailwindcss/colors';
import starlightPlugin from '@astrojs/starlight-tailwind';

// Generated color palettes
const accent = { 200: '#eebe95', 600: '#ea580c', 900: '#4c2800', 950: '#381c00' };
const gray = { 100: '#f7f6f5', 200: '#f0edeb', 300: '#c4c1bf', 400: '#908a85', 500: '#5c5753', 700: '#3c3733', 800: '#2b2622', 900: '#1a1816' };


/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
        accent,
        gray,
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      }
		},
	},
	plugins: [starlightPlugin()],
};
