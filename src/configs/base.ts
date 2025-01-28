import eslint from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export const baseConfig = tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  tseslint.configs.stylistic,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      globals: {
        ...globals.commonjs,
        ...globals.jest,
      },
    },
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
    },
  },
  eslintConfigPrettier,
);
