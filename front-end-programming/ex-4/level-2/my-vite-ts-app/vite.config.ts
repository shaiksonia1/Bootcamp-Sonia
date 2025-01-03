import { defineConfig } from 'vite';
import eslintPlugin from 'vite-plugin-eslint';

export default defineConfig({
  plugins: [
    eslintPlugin({
      fix: true,
      include: ['src/**/*.{ts,tsx,js,jsx}'], 
    }),
  ],
});
