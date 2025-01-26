import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
<<<<<<< HEAD
  base: '/Boujnah-Yasmine-Portfolio/',
=======
  base: "/Boujnah-Yasmine-Portfolio",
>>>>>>> 232abe2913a7cc35df07f9823b986b7b043af1f6
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: ['mixed-decls'],
      },
    },
  },
})
