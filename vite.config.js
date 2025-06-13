import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite"
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],

  // Defining the path for the application as alias
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
