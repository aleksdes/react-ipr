import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [react(), tsconfigPaths(), nodePolyfills()],
    server: {
      host: '0.0.0.0',
      port: 3000,
    },
    css: {
      devSourcemap: mode === 'development',
    },
  };
});
