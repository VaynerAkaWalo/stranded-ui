import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";
import path from 'path'

export default defineConfig({
  plugins: [react(), tailwindcss()],

  resolve: {
    alias: {
      '@shared': path.resolve(__dirname, './src/shared'),
      '@components': path.resolve(__dirname, './src/components')
    }
  },

  server: {
    host: '127.0.0.1',
    allowedHosts: ['stranded.blamedevs.local'],
    port: 3000,
  }
})
