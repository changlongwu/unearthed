import { defineConfig } from 'vite'

export default defineConfig({
  // when we run npm run build, the resources in the public directory 
  // will be output to server/public directory
  build: {
    outDir: '../server/public',
    emptyOutDir: true
  },
  //
  server: {
    proxy: {
      '/gifts': {
        target: 'http://localhost:3001'
      }
    }
  }
})