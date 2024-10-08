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
        '@/': '/src/',
        '~/': '/src/',
      },
    },
    server: {
      host: '0.0.0.0',
      port: 3000,
    },
    css: {
      devSourcemap: mode === 'development',
    },
  };
});
