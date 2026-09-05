import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: 'js',
    emptyOutDir: false,
    sourcemap: true,
    lib: {
      entry: 'src/main.js',
      formats: ['es'],
      fileName: () => 'library-main.mjs',
    },
    rollupOptions: {
      output: {
        entryFileNames: 'library-main.mjs',
        chunkFileNames: 'library-[name]-[hash].chunk.mjs',
        assetFileNames: 'library-[name]-[hash][extname]',
      },
    },
  },
  test: {
    environment: 'happy-dom',
  },
})
