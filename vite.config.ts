import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/wolf-dao/' // 👈 Important for GitHub Codespaces and Pages
});
