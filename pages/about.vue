<template>
  <article class="p-6">
    <h1 class="text-xl font-semibold">About</h1>
    <p>
      A humble place to document my personal coding projects. Probably includes
      why I decided to start a project, how do I plan to get there, what the
      actual process looked like, what bugs have I encountered and how did I fix
      them, etc.
    </p>
    <section>
      <h2>This website is powered by</h2>
      <ul class="flex gap-x-4">
        <li
          v-for="(technology, index) in technologies"
          :key="index"
          class="border rounded-lg p-4 pb-3"
        >
          <a :href="technology.link" target="_blank">
            <img
              class="w-12"
              :src="technology.imageURL"
              :alt="technology.name"
            />
          </a>
        </li>
      </ul>
    </section>
  </article>
</template>

<script setup lang="ts">
import useAsyncDataStatus from "~/composables/useAsyncDataStatus";

const { makeReady } = useAsyncDataStatus();
const technologies: { name: string; imageURL: string; link: string }[] = [
  {
    name: "Vue",
    imageURL: "https://a.storyblok.com/f/224118/2500x2158/d9db8a3dea/vue-9.svg",
    link: "https://vuejs.org/",
  },
  {
    name: "TypeScript",
    imageURL:
      "https://a.storyblok.com/f/224118/2500x2500/5f6802589a/typescript.svg",
    link: "https://www.typescriptlang.org/",
  },
  {
    name: "Nuxt",
    imageURL:
      "https://a.storyblok.com/f/224118/2500x2500/4937122eca/nuxt-2.svg",
    link: "https://nuxtjs.org/",
  },
  {
    name: "Storyblok",
    imageURL:
      "https://a.storyblok.com/f/224118/256x302/820a7d3f34/storyblok.svg",
    link: "https://www.storyblok.com/home",
  },
  {
    name: "Netlify",
    imageURL:
      "https://a.storyblok.com/f/224118/2500x2500/e15c574f55/netlify.svg",
    link: "https://www.netlify.com/",
  },
];
makeReady();
// TODO: Add tailwind
</script>
