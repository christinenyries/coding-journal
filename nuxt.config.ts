// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@storyblok/nuxt", "@nuxtjs/tailwindcss", "@nuxtjs/eslint-module"],
  storyblok: {
    accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
    apiOptions: {
      region: "eu",
    },
  },
});
