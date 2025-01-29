import { sveltekit } from "@sveltejs/kit/vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { defineConfig } from "vite";
import { codecovSvelteKitPlugin } from "@codecov/sveltekit-plugin";
import { configDefaults } from 'vitest/config'

export default defineConfig({
  plugins: [
    sveltekit(),
    // Put the Codecov SvelteKit plugin after all other plugins
    codecovSvelteKitPlugin({
      enableBundleAnalysis: true,
      bundleName: "example-sveltekit-bundle",
      uploadToken: process.env.CODECOV_TOKEN,
    }),
  ],
  test: {
    globals: true,
    exclude: [
      ...configDefaults.exclude, 
    ],
    coverage: {
      exclude: [
        ...configDefaults.exclude, 
        '**/node_modules/**',
        '**/dist/**',
        '**/cypress/**',
        '**/.{idea,git,cache,build,output,temp}/**',
        './src/config/**',
        '.svelte-kit/',
        'svelte.config.js',
      ],
    }
  },
});
