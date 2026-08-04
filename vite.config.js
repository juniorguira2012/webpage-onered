import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        secure: false,
      },
      // Si vas a llamar directamente a bancard o puntoagil desde Vite
      '/bancard': {
        target: 'https://mikrowisp.oneredrd.com',
        changeOrigin: true,
        secure: false,
      },
      '/puntoagil': {
        target: 'https://mikrowisp.oneredrd.com',
        changeOrigin: true,
        secure: false,
      }
    },
  },
})

// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })