import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      external: ['@tanstack/react-query-devtools', '@tanstack/react-query']
    }
  },
  server: {
    proxy: {
      '/api': 'http://localhost:8080',
      '/images': ''
    }
  }
})
