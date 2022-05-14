/* eslint-disable */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    base:"./",
    port: 3000,
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
