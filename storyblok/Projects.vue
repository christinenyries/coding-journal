<script setup lang="ts">
const route = useRoute();
const env = useEnvVariables();
const api = useStoryblokApi();

const isDev = route.query._storyblok || env.isDev;
const tags = route.query.with_tag;
const searchTerm = route.query.search_term;

const { data } = await api.get("cdn/stories/", {
  is_startpage: 0,
  starts_with: "projects/",
  ...(typeof tags === "string" && { with_tag: tags }),
  ...(typeof searchTerm === "string" && { search_term: searchTerm }),
  version: isDev ? "draft" : "published",
});
const projects = ref(data.stories);
</script>

<template>
  <div v-if="projects.length > 0" class="flex flex-wrap justify-center gap-6">
    <ProjectCard
      v-for="project in projects"
      :key="project.uuid"
      :slug="project.slug"
      :tags="project.tag_list"
      :project="project.content"
    />
  </div>
  <div v-else>
    <p class="text-center text-lg italic">Will build something soon.</p>
  </div>
</template>
