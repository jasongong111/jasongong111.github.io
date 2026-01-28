import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  base: './',
  root: '.',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});
