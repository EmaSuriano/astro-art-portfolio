/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: process.env.FORCE_THEME ? 'class' : 'media',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [],
}
