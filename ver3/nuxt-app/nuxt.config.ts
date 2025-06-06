// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  ssr: false,
  postcss: {
    plugins: {
      '@tailwindcss/postcss': {},
      autoprefixer: {},
    },
  },
  modules: [
    '@pinia/nuxt',
  ],
  app: {
    head: {
      link: [
        {rel: 'icon', type: 'image/x-icon', href: '/leti-big.png'},
      ]
    },
  },
})
