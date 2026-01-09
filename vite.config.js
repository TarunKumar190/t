import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/",
  server: { historyApiFallback: true },
  plugins: [react()],
  server: {
    host: true,
    strictPort: true,
    allowedHosts: true
  }
})
