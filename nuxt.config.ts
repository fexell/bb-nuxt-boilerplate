import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/image', '@pinia/nuxt'],
  build: {
    transpile: [
      '@fortawesome/vue-fontawesome',
    ],
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  css: [
    '~/assets/sass/tailwind.sass',
    '@fortawesome/fontawesome-svg-core/styles.css',
  ],
})