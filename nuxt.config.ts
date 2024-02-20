// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['radix-vue/nuxt', '@nuxtjs/tailwindcss', '@nuxtjs/color-mode', 'radix-vue/nuxt', 'nuxt-icon'],
  css: ['~/assets/css/tailwind.css', '~/assets/css/fonts.css'],
})
