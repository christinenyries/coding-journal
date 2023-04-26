<script setup lang="ts">
// TODO: Import via plugin
import VPagination from "@hennge/vue3-pagination";
import "@hennge/vue3-pagination/dist/vue3-pagination.css";

import { ISbStoryData } from "storyblok-js-client";

const router = useRouter();
const route = useRoute();
const env = useEnvVariables();
const storyblokApi = useStoryblokApi();

const perPage = 10;
const page = ref(Number(route.query.page) || 1);
const tags = route.query.with_tag;
const searchTerm = route.query.search_term;
const isDev = route.query._storyblok || env.isDev;

const stories = ref<ISbStoryData[]>([]);
const { data } = await useAsyncData("logs", async () => {
  return await storyblokApi.get("cdn/stories/", {
    starts_with: "logs/",
    page: page.value,
    per_page: perPage,
    ...(typeof tags === "string" && { with_tag: tags }),
    ...(typeof searchTerm === "string" && { search_term: searchTerm }),
    version: isDev ? "draft" : "published",
  });
});
const totalPages = Math.ceil((data.value?.total || 0) / perPage);
stories.value = data.value?.data.stories || [];

const updatePage = () => {
  route.name &&
    router.push({
      name: route.name,
      query: { ...route.query, page: page.value },
    });
};
</script>

<template>
  <div v-if="stories.length" class="flex flex-col gap-y-6">
    <LogCard
      v-for="story in stories"
      :key="story.content._uid"
      :slug="story.slug"
      :published="story.first_published_at || story.created_at"
      :last-edited="story.published_at || undefined"
      :tags="story.tag_list"
      :title="story.content.title"
    />
    <v-pagination
      v-model="page"
      :pages="totalPages"
      :range-size="2"
      active-color="#F9FAFB"
      @update:model-value="updatePage"
    />
  </div>
  <div v-else>
    <p class="italic text-lg text-center">Will publish something soon.</p>
  </div>
</template>

<style scoped>
:deep(.Pagination) {
  justify-content: center;
}
</style>
