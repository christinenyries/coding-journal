// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    isDev: process.env.NODE_ENV !== "production",
  },

  modules: ["@storyblok/nuxt", "@nuxtjs/tailwindcss", "@nuxtjs/eslint-module"],

  storyblok: {
    accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
    apiOptions: {
      region: "eu",
    },
  },

  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },

  eslint: {
    lintOnStart: false,
  },

  experimental: {
    payloadExtraction: false,
  },

  devtools: {
    enabled: false,
  },
});
