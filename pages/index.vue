<script setup>
useSeoMeta({
  titleTemplate: "%s - Logs",
});
const route = useRoute();
const storyblokApi = useStoryblokApi();
const isDraft = route.query._storyblok || useRuntimeConfig().isDev;

const getFilters = (query) =>
  Object.keys(query).reduce((_filters, key) => {
    if (!["page", "search_term", "with_tag"].includes(key)) return _filters;

    const value = query[key];
    if (key === "page" && !isNaN(parseInt(value))) {
      _filters[key] = parseInt(value);
    } else if (key === "search_term") {
      _filters[key] = decodeURIComponent(value);
    } else if (key === "with_tag") {
      _filters[key] = value;
    }

    return _filters;
  }, {});

const { data, refresh } = await useAsyncData(route.fullPath, () => {
  const filters = getFilters(route.query);
  return storyblokApi.get("cdn/stories/", {
    is_startpage: 0,
    starts_with: "logs/",
    per_page: perPage,
    ...filters,
    version: isDraft ? "draft" : "published",
  });
});
const logs = computed(() => data.value?.data.stories);
const logsCount = computed(() => data.value?.total || 0);

const defaultPage = 1;
const perPage = 10;
const currentPage = computed(() => parseInt(route.query.page) || defaultPage);
const pagesCount = computed(() => Math.ceil(logsCount.value / perPage));

watch(
  () => route.query,
  () => refresh()
);
</script>

<template>
  <div>
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

    <AppPagination
      v-if="pagesCount > 1"
      :page="currentPage"
      :pages="pagesCount"
    />
  </div>
</template>
