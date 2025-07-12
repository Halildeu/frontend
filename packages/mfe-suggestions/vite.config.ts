// packages/mfe-suggestions/vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'suggestions',            // ⬅️  global değişken adı
      filename: 'remoteEntry.js',     // ⬅️  mutlaka düz isim olsun
      exposes: {
        './SuggestionsApp': './src/App.tsx',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  server: { port: 5001 },
})