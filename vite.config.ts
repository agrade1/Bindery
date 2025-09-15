// vite.config.ts (또는 .js)
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  server: {
    proxy: {
      '/aladin': {
        target: 'http://www.aladin.co.kr/ttb/api', // 실제 API 주소
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/aladin/, ''), // /aladin 제거
      },
    },
  },
});
