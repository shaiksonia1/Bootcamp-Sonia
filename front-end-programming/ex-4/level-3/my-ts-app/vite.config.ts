import { defineConfig } from 'vite';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    visualizer({ open: true }),
  ],
  build: {
    minify: 'terser', // Ensures terser is used for minification
    terserOptions: {
      compress: {
        drop_console: true, // Removes console logs from production builds
      },
    },
  },
});
