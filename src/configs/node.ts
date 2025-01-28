import globals from 'globals';

import { baseConfig } from './base';

export const nodeConfig = [
  ...baseConfig,
  {
    languageOptions: {
      globals: { ...globals.node },
    },
  },
];
