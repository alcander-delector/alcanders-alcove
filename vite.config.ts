import tailwindcss from '@tailwindcss/vite';
import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit({
			compilerOptions: {
				// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
				runes: ({ filename }) => filename.split(/[/\\]/).includes('node_modules') ? undefined : true
			},

			// Static adapter: every page is prerendered to plain files for GitHub Pages.
			adapter: adapter(),

			// GitHub Pages serves the site from /alcanders-alcove, so asset URLs need that
			// prefix at build time. The deploy workflow sets BASE_PATH; local dev stays at the root.
			paths: {
				base: process.env.BASE_PATH ?? ''
			}
		})
	]
});
