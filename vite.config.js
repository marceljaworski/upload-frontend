import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    origin: 'https://3.75.158.163' || 'https://3.125.183.140' || 'https://35.157.117.28',
    proxy: {
      '/fileitems': {
        target: 'https://upload-backend-4avq.onrender.com',
        changeOrigin: true,
      },
      '/uploadfile': {
        target: 'https://upload-backend-4avq.onrender.com',
        changeOrigin: true,
      }
    }
  }
})
