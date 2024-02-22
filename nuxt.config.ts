// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/tailwind.css", "~/assets/css/fonts.css"],
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode", "radix-vue/nuxt", "nuxt-icon", "@nuxt/image"],
  colorMode: {
    classSuffix: "",
  },
  tailwindcss: {
    editorSupport: true,
  },
});
