import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/portifolio_jhon', // nome do repositório Github
  build: {
    outDir: 'dist', //pasta de saída do build
  },
})
