import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),],
  // vite.config.js

  build: {
    chunkSizeWarningLimit: 1000, // Optional: suppress chunk warning
  },



})
