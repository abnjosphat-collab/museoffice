import { defineConfig } from 'vitest/config';
import { fileURLToPath } from 'node:url';

// Mirrors the tsconfig "@/*" -> "./*" mapping so tests import the same way app code does.
export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./', import.meta.url)),
    },
  },
  test: {
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    include: ['lib/**/*.test.ts', 'lib/**/*.test.tsx', 'app/**/*.test.ts', 'app/**/*.test.tsx', 'components/**/*.test.ts', 'components/**/*.test.tsx'],
    coverage: {
      provider: 'v8',
      include: ['lib/**/*.{ts,tsx}', 'app/**/*.{ts,tsx}', 'components/**/*.{ts,tsx}'],
      exclude: ['**/*.test.ts', '**/*.test.tsx', '**/types.ts'],
    },
  },
});
