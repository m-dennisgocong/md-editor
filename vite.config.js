import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://m-dennisgocong.github.io/md-editor/",
  plugins: [react()]
})
