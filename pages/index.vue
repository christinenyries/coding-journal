<script setup>
useSeoMeta({
  titleTemplate: "%s - Logs",
});
const route = useRoute();
const storyblokApi = useStoryblokApi();
const isDraft = route.query._storyblok || useRuntimeConfig().isDev;

const perPage = 10;
const page = ref(Number(route.query.page) || 1);

const getFilters = (query) =>
  Object.keys(query).reduce((_filters, key) => {
    if (["with_tag", "search_term", "page"].includes(key)) {
      _filters[key] = query[key];
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
const total = computed(() => data.value?.total);
const pages = computed(() => Math.ceil(total.value / perPage));
watch(
  () => route.query,
  () => refresh()
);
watch(page, (newValue) => navigateTo(`?page=${newValue}`));
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
    <div v-if="pages > 1" class="mt-10 flex justify-center gap-4">
      <button
        class="w-[100px] rounded border py-2 shadow enabled:hover:bg-gray-50 disabled:bg-slate-300"
        :class="{}"
        :disabled="page > 1"
        @click="page -= 1"
      >
        ⬅️ Prev
      </button>
      <button
        class="w-[100px] rounded border py-2 shadow enabled:hover:bg-gray-50 disabled:bg-slate-300"
        :disabled="page < pages"
        @click="page += 1"
      >
        Next ➡️
      </button>
    </div>
  </div>
</template>
