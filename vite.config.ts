import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig(({mode})=>{
  let base = '/'
  if(mode === 'production'){
    base = './'
  }
  return {
    base: base,
    plugins: [vue()],
  }
})
