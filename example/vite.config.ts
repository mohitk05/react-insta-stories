import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  base: '/react-insta-stories/',
  server: {
    port: 5173,
    open: true,
  },
});
