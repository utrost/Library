import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
  },
  build: {
    outDir: 'build/vue',
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
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith('.css')) {
            return 'library-vue.css'
          }
          return 'library-[name]-[hash][extname]'
        },
      },
    },
  },
  test: {
    include: ['src/**/*.test.js'],
    exclude: ['dist/**', 'build/**', 'node_modules/**'],
    environment: 'happy-dom',
    css: true,
    server: {
      deps: {
        inline: ['@nextcloud/vue'],
      },
    },
  },
})
