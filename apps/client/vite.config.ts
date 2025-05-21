import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: Number(process.env.CLIENT_PORT) || 5174,
  },
  base: process.env.NODE_ENV === 'production' ? '/' : '/',
  preview: {
    port: 80,
    strictPort: true,
  },
})
