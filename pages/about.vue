<template>
  <article class="text-lg">
    <h1 class="pb-6 text-3xl font-semibold">About</h1>
    <section>
      <h2>this.website</h2>
      <p>
        A humble place to document the author's personal coding projects and
        learnings.
      </p>
      <p>This would probably include:</p>
      <ul>
        <li>New technology study plans.</li>
        <li>Project brainstorming.</li>
        <li>
          Project implementation plans (e.g. desired features, design mockups,
          modules required, routes, etc.).
        </li>
        <li>Programming concepts review</li>
        <li>Bugs encountered discussions</li>
      </ul>
    </section>
    <section>
      <h2>this.website.author</h2>
      <p>
        Have started her programming career in systems/embedded development
        writing C++ code ensuring
        <a
          class="border-b-2 border-dashed underline-offset-4 border-gray-400"
          href="https://cplusplus.com/doc/tutorial/pointers/"
          target="_blank"
          >pointers</a
        >
        are handled with care. She had recently moved to web development,
        somehow overwhelmed by the myriad of technologies available, and by how
        blazingly fast things are moving. Hopefully, maintaining this website
        will provide the necessary space to guide her learnings. Her front-end
        framework of choice at the moment is VueJS.
      </p>
      <p>You can reach her via:</p>
      <ul>
        <li v-for="(contact, index) in contacts" :key="index" class="">
          <a :href="contact.link" target="_blank">
            <img :src="contact.imageURL" :alt="contact.name" />
          </a>
        </li>
      </ul>
    </section>
    <section>
      <h2>this.website.technologies</h2>
      <p>This website is powered by:</p>
      <ul>
        <li v-for="(technology, index) in technologies" :key="index">
          <a :href="technology.link" target="_blank">
            <img :src="technology.imageURL" :alt="technology.name" />
          </a>
        </li>
      </ul>
    </section>
  </article>
</template>

<script setup lang="ts">
const technologies: { name: string; imageURL: string; link: string }[] = [
  {
    name: "TypeScript",
    imageURL:
      "https://a.storyblok.com/f/224118/2500x2500/5f6802589a/typescript.svg",
    link: "https://www.typescriptlang.org/",
  },
  {
    name: "Vue",
    imageURL: "https://a.storyblok.com/f/224118/2500x2158/d9db8a3dea/vue-9.svg",
    link: "https://vuejs.org/",
  },
  {
    name: "Tailwind",
    imageURL:
      "https://a.storyblok.com/f/224118/2500x1504/5db286642a/tailwindcss.svg",
    link: "https://tailwindcss.com/",
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
const contacts: { name: string; imageURL: string; link: string }[] = [
  {
    name: "Gmail",
    imageURL: "https://a.storyblok.com/f/224118/150x150/ef9fa8b449/gmail.svg",
    link: "mailto:yambao.cn@gmail.com",
  },
  {
    name: "LinkedIn",
    imageURL:
      "https://a.storyblok.com/f/224118/150x150/03146228a9/linkedin.svg",
    link: "https://ph.linkedin.com/in/christine-nyries-yambao",
  },
  {
    name: "Github",
    imageURL: "https://a.storyblok.com/f/224118/512x512/82c75ba52d/github.svg",
    link: "https://github.com/christinenyries",
  },
];
</script>

<style scoped>
section {
  @apply my-6;
}
p {
  @apply mb-2;
}
h2 {
  @apply text-2xl font-semibold mb-2;
}
ul {
  @apply my-6 flex flex-wrap gap-4;
}
li {
  @apply border rounded-lg p-4 pb-3;
}
img {
  @apply w-12;
}
</style>
