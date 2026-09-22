import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://deku-klaudius.github.io/D_Pict.github.io/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})
