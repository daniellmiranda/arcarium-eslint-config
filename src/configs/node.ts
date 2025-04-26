import globals from 'globals';
import tseslint from 'typescript-eslint';
import { baseConfig } from './base';

export const nodeConfig = tseslint.config(
  ...baseConfig,
  {
    languageOptions: {
      globals: { ...globals.node },
    },
  },
);