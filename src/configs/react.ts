import jsxA11y from 'eslint-plugin-jsx-a11y';
import react from 'eslint-plugin-react';
import reactCompiler from 'eslint-plugin-react-compiler'
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';
import tseslint from 'typescript-eslint';

import { baseConfig } from './base';

export const reactConfig = tseslint.config(
  ...baseConfig,
  react.configs.flat.recommended,
  react.configs.flat['jsx-runtime'],
  jsxA11y.flatConfigs.recommended,
  {
    plugins: {
      'react-hooks': reactHooks,
      'react-compiler': reactCompiler,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: { ...globals.browser },
    },
    rules: {
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react-compiler/react-compiler': 'error',
      'react/prop-types': 'off',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
);
