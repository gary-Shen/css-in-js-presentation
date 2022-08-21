import { resolve } from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { ViteEjsPlugin } from 'vite-plugin-ejs';

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    base: '/',
    plugins: [
      react(),
      ViteEjsPlugin({
        NODE_ENV: process.env.NODE_ENV,
      }),
    ],
    resolve: {
      alias: [{ find: '@', replacement: resolve(__dirname, 'src') }],
    },
    server: {
      port: 5333,
    },
    publicDir: 'public',
  };
});
