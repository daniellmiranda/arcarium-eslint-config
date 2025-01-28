import type { Config } from 'prettier';
import type { ConfigArray } from 'typescript-eslint';

import { nodeConfig } from './configs/node';
import { prettierConfig } from './configs/prettier';
import { reactConfig } from './configs/react';

export interface ESLintConfig {
  configs: {
    node: ConfigArray;
    react: ConfigArray;
    prettier: Config;
  };
}

const eslintConfig: ESLintConfig = {
  configs: {
    node: nodeConfig,
    react: reactConfig,
    prettier: prettierConfig,
  },
};

export default eslintConfig;
