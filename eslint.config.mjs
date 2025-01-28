import eslintConfig from './dist/index.js';

export default [{ ...eslintConfig.configs.node, ignores: ['dist/**'] }];
