import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const repository = 'RTR';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // https://kit.svelte.dev/docs/integrations#preprocessors
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter(),
    appDir: 'app',
    paths: {
      base: `/${repository}`
    },
    prerender: {
      handleHttpError: 'warn'  /* Don't fail build on missing files */
    },
  }
};

export default config;
