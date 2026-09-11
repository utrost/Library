import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  define: {
    appName: JSON.stringify('library'),
    appVersion: JSON.stringify('0.1.0-alpha.163'),
    'process.env.NODE_ENV': JSON.stringify('production'),
    'process.env': '{}',
  },
  build: {
    outDir: 'build/vue',
    emptyOutDir: false,
    sourcemap: false,
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
