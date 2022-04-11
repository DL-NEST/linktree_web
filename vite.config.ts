/* eslint-disable */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3000,
    proxy:{
      "/api": {
        target: "http://localhost:8000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    }
  },
  resolve: {
    alias: [
      {
        find:'@',
        replacement: path.resolve(__dirname, './src'),
      },
      {
        find:'views',
        replacement: path.resolve(__dirname, './src/views'),
      }
    ],
  },
});
