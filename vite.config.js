import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['react-i18next', 'i18next', 'i18next-browser-languagedetector']
  },
  resolve: {
    dedupe: ['react', 'react-dom', 'i18next', 'react-i18next']
  }
})