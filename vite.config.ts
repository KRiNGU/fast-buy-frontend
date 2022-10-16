import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './srs'),
      '@components': path.resolve(__dirname, './srs/components'),
      '@assets': path.resolve(__dirname, './srs/assets'),
      '@api': path.resolve(__dirname, './srs/api'),
      '@pages': path.resolve(__dirname, './srs/pages'),
      '@models': path.resolve(__dirname, './srs/models'),
    },
  },
});
