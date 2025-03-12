import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 3000,
  },
  preview: {
    port: 80,
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
}); 