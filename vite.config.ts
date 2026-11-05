import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/test/setup.ts',
    css: false,
    include: ['src/**/*.{test,spec}.{ts,tsx}'],
    coverage: {
      provider: 'v8',
      include: ['src/**'],
      exclude: [
        'src/main.tsx',
        'src/test/**',
        'src/**/*.test.*',
        'src/**/*.spec.*',
        'src/**/*.d.ts',
      ],
      reporter: ['text', 'lcov', 'json-summary'],
      // Single source of truth for the coverage gate (QG-005). Local and CI
      // both run `npm run test:cov`. Changes only via a DEC-###.
      thresholds: {
        lines: 80,
        functions: 80,
        statements: 80,
        branches: 75,
      },
    },
  },
});
