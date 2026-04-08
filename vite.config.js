import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/getihsan/',
  build: { outDir: 'docs', emptyOutDir: true },
  plugins: [react(), tailwindcss()],
})
