import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),],
  base: "/mrcl29/",
  server: {
    port: 3000 // Aquí cambias el puerto al que prefieras
  },
  resolve: {
    alias: {
      // Configura los alias
      '@': '/src',
    },
  },
})
