import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import { codecovSvelteKitPlugin } from "@codecov/sveltekit-plugin";

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
});
