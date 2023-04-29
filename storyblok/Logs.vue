<script setup lang="ts">
import VPagination from "@hennge/vue3-pagination";
import "@hennge/vue3-pagination/dist/vue3-pagination.css";

const router = useRouter();
const route = useRoute();
const env = useEnvVariables();
const storyblokApi = useStoryblokApi();

const perPage = 10;
const page = ref(Number(route.query.page) || 1);
const updatePage = () => {
  router.push({
    name: "index",
    query: { ...route.query, page: page.value },
  });
};

const tags = route.query.with_tag;
const searchTerm = route.query.search_term;
const isDev = route.query._storyblok || env.isDev;

const { data, total } = await storyblokApi.get("cdn/stories/", {
  is_startpage: 0,
  starts_with: "logs/",
  page: page.value,
  per_page: perPage,
  ...(typeof tags === "string" && { with_tag: tags }),
  ...(typeof searchTerm === "string" && { search_term: searchTerm }),
  version: isDev ? "draft" : "published",
});
const totalPages = Math.ceil(total / perPage);
const logs = ref(data.stories);
</script>

<template>
  <div v-if="logs.length > 0" class="flex flex-col gap-y-6">
    <LogCard
      v-for="log in logs"
      :key="log.uuid"
      :log="log.content"
      :slug="log.slug"
      :published="log.first_published_at || log.created_at"
      :last-edited="log.published_at"
      :tags="log.tag_list"
    />
    <v-pagination
      v-if="totalPages > 1"
      v-model="page"
      :pages="totalPages"
      :range-size="2"
      active-color="#F9FAFB"
      @update:model-value="updatePage"
    />
  </div>
  <div v-else>
    <p class="text-center text-lg italic">Will publish something soon.</p>
  </div>
</template>

<style scoped>
:deep(.Pagination) {
  justify-content: center;
}
</style>
