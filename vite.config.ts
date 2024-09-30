import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [react(), tsconfigPaths(), nodePolyfills()],
    resolve: {
      alias: {
        'tailwind-config': path.resolve(__dirname, './tailwind.config.js'),
        '@/': path.resolve(__dirname, './src/'),
        '~/': path.resolve(__dirname, './src/'),
      },
    },
    server: {
      host: '0.0.0.0',
      port: 3000,
    },
    optimizeDeps: {
      include: ['**/*.scss'], // Include all .scss files
    },
    css: {
      devSourcemap: mode === 'development',
      preprocessorOptions: { scss: { modules: true } },
    },
  };
});
