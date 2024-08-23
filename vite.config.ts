import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';



// https://vitejs.dev/config/
export default defineConfig({
  build: {
    sourcemap: false,
  },

  plugins: [react()],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@assets': path.resolve(__dirname, 'src/assets')
    }
  },
  test: {
    environment: 'jsdom', // Используем jsdom для тестов
    globals: true, // Для использования глобальных тестовых функций, таких как describe и it
  },
})



