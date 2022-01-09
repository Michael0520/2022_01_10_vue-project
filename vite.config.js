import vue from '@vitejs/plugin-vue'
import {
  fileURLToPath,
  URL
} from 'url'
import {
  defineConfig
} from 'vite'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    minify: true,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src',
        import.meta.url))
    }
  },
  base: process.env.NODE_ENV === 'production' ? '/<REPO>/' : './',
})