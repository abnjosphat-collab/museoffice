import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    rules: {
      // Copied workspace logic predates strict any-free typing; keep visible, not blocking.
      '@typescript-eslint/no-explicit-any': 'warn',
      // Mount/subscription effects are the established pattern in this codebase.
      'react-hooks/set-state-in-effect': 'warn',
    },
  },
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts", "coverage/**"]),
]);

export default eslintConfig;
