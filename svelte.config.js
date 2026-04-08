import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

export default {
  extensions: ['.svelte'],
  preprocess: [vitePreprocess()],
  kit: { adapter: adapter() }
};
