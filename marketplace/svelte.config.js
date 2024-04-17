import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

    kit: {
        files: {
			assets: 'static',
			lib: 'src/lib',
			params: 'src/params',
			routes: 'src/routes',
			appTemplate: 'src/app.html',
		},
        adapter: adapter({
            fallback: 'index.html',
    }),
    }

};

export default config;
