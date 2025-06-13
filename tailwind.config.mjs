/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'brand-blue': '#29ABE2',
				'brand-orange': '#F38A32',
				'brand-red': '#EC1C24',
			}
		},
	},
	plugins: [],
} 