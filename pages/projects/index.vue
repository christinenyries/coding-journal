<script setup lang="ts">
import { ISbStoryData } from "storyblok-js-client";

const route = useRoute();
const env = useEnvVariables();
const api = useStoryblokApi();

const isDev = route.query._storyblok || env.isDev;
const tags = route.query.with_tag;
const searchTerm = route.query.search_term;

const stories = ref<ISbStoryData[]>([]);

onMounted(async () => {
  const { data } = await useAsyncData(
    "projects",
    async () =>
      await api.get("cdn/stories/", {
        starts_with: "projects/",
        ...(typeof tags === "string" && { with_tag: tags }),
        ...(typeof searchTerm === "string" && { search_term: searchTerm }),
        version: isDev ? "draft" : "published",
      })
  );
  stories.value = data.value?.data.stories || [];
});
</script>

<template>
  <div v-if="stories.length > 0" class="flex gap-6 flex-wrap justify-center">
    <ProjectCard
      v-for="story in stories"
      :key="story.content._uid"
      :slug="story.slug"
      :tags="story.tag_list"
      :title="story.content.title"
      :image="story.content.image.filename"
    />
  </div>
  <div v-else>
    <p class="italic text-lg text-center">Will build something soon.</p>
  </div>
</template>
