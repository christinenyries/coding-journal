<script setup>
const route = useRoute();
const storyblokApi = useStoryblokApi();
const isDraft = route.query._storyblok || useRuntimeConfig().isDev;

const perPage = 10;
const page = ref(Number(route.query.page) || 1);

const getFilters = (query) =>
  Object.keys(query).reduce((_filters, key) => {
    if (["with_tag", "search_term"].includes(key)) {
      _filters[key] = query[key];
    }
    return _filters;
  }, {});

const { data, refresh } = await useAsyncData(route.fullPath, () => {
  const filters = getFilters(route.query);
  return storyblokApi.get("cdn/stories/", {
    is_startpage: 0,
    starts_with: "projects/",
    page: page.value,
    per_page: perPage,
    ...filters,
    version: isDraft ? "draft" : "published",
  });
});
const projects = computed(() => data.value?.data.stories);

watch(
  () => route.query,
  () => refresh()
);
</script>

<template>
  <div v-if="projects" class="flex flex-wrap gap-4">
    <ProjectCard
      v-for="project in projects"
      :key="project.uuid"
      :slug="project.slug"
      :tags="project.tag_list"
      :project="project.content"
    />
  </div>
</template>
