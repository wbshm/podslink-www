import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1]
const pagesBasePath =
  process.env.PAGES_BASE_PATH ?? (repositoryName ? `/${repositoryName}/` : '/')

export default defineConfig({
  base: pagesBasePath,
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: [
      // Alias @ to the src directory
      { find: '@', replacement: path.resolve(__dirname, './src') },
      // Map Figma asset imports to the local assets folder
      {
        find: /^figma:asset\//,
        replacement: path.resolve(__dirname, './src/assets') + '/',
      },
    ],
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],

  server: {
    host: '192.168.31.114',
  },
})
