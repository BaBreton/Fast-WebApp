import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'
import path from 'path'

const envPath = path.resolve(__dirname, '../.env')
dotenv.config({ path: envPath })

export default defineConfig({
  plugins: [react()],
  server: {
	proxy: {
	  '/api': {
		target: process.env.VITE_FRONT_DEV_API_URL,
		changeOrigin: true,
	  }
	},
	host: true,
	port: process.env.VITE_FRONT_DEV_PORT,
  }
})
