import react from '@vitejs/plugin-react-swc'
import { defineConfig, configDefaults } from 'vitest/config'

const config = defineConfig({
  plugins: [react()],
  test: {
    alias: { '~/': '/src/' },
    environment: 'happy-dom',
    exclude: [...configDefaults.exclude],
    globals: true,
    include: [...configDefaults.include, 'src/app/**/test.tsx'],
  },
})

export default config
