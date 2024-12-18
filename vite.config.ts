import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: '/src',
    },
  },
  envDir: './src',
  define: {
    'process.env.VITE_SERVICE_ID': JSON.stringify(process.env.VITE_SERVICE_ID),
    'process.env.VITE_TEMPLATE_ID': JSON.stringify(
      process.env.VITE_TEMPLATE_ID,
    ),
    'process.env.VITE_USER_ID': JSON.stringify(process.env.VITE_USER_ID),
    'process.env.VITE_API_URL': JSON.stringify(process.env.VITE_API_URL),
    'process.env.VITE_CAPTCHA_SEKRET_KEY': JSON.stringify(
      process.env.VITE_CAPTCHA_SEKRET_KEY,
    ),
    'process.env.VITE_CAPTCHA_SITE_KEY': JSON.stringify(
      process.env.VITE_CAPTCHA_SITE_KEY,
    ),
  },
  server: {
    open: true,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: 'src/setupTests',
    mockReset: true,
  },
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        robots: 'robots.txt',
      },
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id
              .toString()
              .split('node_modules/')[1]
              .split('/')[0]
              .toString()
          }
        },
      },
    },
  },
})
