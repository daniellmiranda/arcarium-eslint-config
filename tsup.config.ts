import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  outDir: 'dist',
  splitting: false,
  sourcemap: false,
  clean: true,
  minify: true,
  external: ['eslint', 'prettier']
});
