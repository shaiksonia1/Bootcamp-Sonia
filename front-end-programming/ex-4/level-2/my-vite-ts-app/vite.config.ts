import { defineConfig } from 'vite';
import eslintPlugin from 'vite-plugin-eslint';

export default defineConfig({
  plugins: [
    eslintPlugin({
      fix: true, // Automatically fix linting issues when possible
      include: ['src/**/*.{ts,tsx,js,jsx}'], // Make sure to lint TypeScript and JavaScript files
    }),
  ],
});
