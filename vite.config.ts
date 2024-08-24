

import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  build: {
    sourcemap: false,
  },

  plugins: [react()],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@assets': path.resolve(__dirname, 'src/assets')
    }
  },
  test: {
    environment: 'jsdom',
    globals: true,
    include: ['src/tests/**/*.test.ts*'],
  }
});
