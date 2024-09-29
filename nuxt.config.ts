// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxtjs/i18n", "@nuxtjs/tailwindcss"],
  plugins:['~/plugins/i18n'],
  i18n: {
    vueI18n: "./i18n.config.ts",
  },
});
