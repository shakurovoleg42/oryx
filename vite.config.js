import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  assetsInclude: ['assets/img/icons'],
  server: {
    // Не нужно указывать mimeTypes
  },
});
