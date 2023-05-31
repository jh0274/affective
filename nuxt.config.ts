export default defineNuxtConfig({
  // https://github.com/nuxt-themes/alpine
  extends: '@jh0274/alpinecustom',

  modules: [
    // https://github.com/nuxt-modules/plausible
    '@nuxtjs/plausible',
    // https://github.com/nuxt/devtools
    '@nuxt/devtools'
  ]
})
