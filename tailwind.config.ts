import tailwindcssTypography from "@tailwindcss/typography";

export default {
  content: [
    "./components/**/*.{vue,js,ts}",
    "./pages/**/*.{vue,js,ts}",
    "./storyblok/**/*.{vue,js,ts}",
    "./layouts/**/*.{vue,js,ts}",
  ],
  plugins: [tailwindcssTypography],
  daisyui: {
    themes: ["lofi"],
  },
};
