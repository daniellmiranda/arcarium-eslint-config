# Arcarium ESLint + Prettier config

## Setup

Install the package, ESLint and Prettier as dev dependencies:

##### NPM

```shell
npm i -D @arcarium/eslint-config eslint prettier
```

##### PNPM

```shell
pnpm add -D @arcarium/eslint-config eslint prettier
```

##### Bun

```shell
bun add -D @arcarium/eslint-config eslint prettier
```

### Node.js/Bun

`eslint.config.mjs`

```javascript
import eslintConfig from '@arcarium/eslint-config';

export default eslintConfig.configs.node;
```

### React

`eslint.config.mjs`

```javascript
import eslintConfig from '@arcarium/eslint-config';

export default eslintConfig.configs.react;
```

### Extend the configuration

If you want to extend or override the configuration you can just spread the config inside an array, and add configuration objects:

`eslint.config.mjs`

```javascript
import eslintConfig from '@arcarium/eslint-config';

export default [
  ...eslintConfig.configs.node,
  {
    rules: {
      semi: 'error',
    },
  },
];
```

Refer to [ESLint official documentation](https://eslint.org/docs/latest/use/configure/configuration-files) for more information.

### CommonJS

If you need to use CommonJS, you can use the following configuration:

`eslint.config.cjs`

```javascript
const eslintConfig = require('@arcarium/eslint-config');

module.exports = eslintConfig.configs.react; // react | node
```

### Prettier Configuration

To use Prettier, simply create a `prettier.config.mjs` file in the root of your project and export the config:

```javascript
import eslintConfig from '@arcarium/eslint-config';

export default eslintConfig.configs.prettier;
```

### Override or Extend Prettier Configuration

If you need to override or extend the Prettier configuration, spread the config object and add any rule you want. Alternatively, you can ignore the config and use your own.

The following code is an example of extending the Prettier configuration with `prettier-plugin-tailwindcss`:

`prettier.config.mjs`

```javascript
import prettierConfig from '@arcarium/eslint-config';

export default {
  ...prettierConfig.configs.prettier, // Omit this line to use the default Prettier configuration and/or use your own
  plugins: ['prettier-plugin-tailwindcss'],
  // Add your custom rules and settings here
};
```
