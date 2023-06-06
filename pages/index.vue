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
    starts_with: "logs/",
    page: page.value,
    per_page: perPage,
    ...filters,
    version: isDraft ? "draft" : "published",
  });
});
const logs = computed(() => data.value?.data.stories);

watch(
  () => route.query,
  () => refresh()
);
</script>

<template>
  <div v-if="logs" class="flex flex-col gap-8">
    <LogCard
      v-for="log in logs"
      :key="log.id"
      :log="log.content"
      :slug="log.slug"
      :published="log.first_published_at || log.created_at"
      :last-edited="log.published_at"
      :tags="log.tag_list"
    />
  </div>
</template>
