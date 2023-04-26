<script setup lang="ts">
// TODO: Import via plugin
import VPagination from "@hennge/vue3-pagination";
import "@hennge/vue3-pagination/dist/vue3-pagination.css";

import { ISbStoriesParams, ISbStoryData } from "storyblok-js-client";

const key = "logs";
const { query } = useRoute();
const env = useEnvVariables();
const storyblokApi = useStoryblokApi();
const { makeReady } = useAsyncDataStatus();
const stories = ref<ISbStoryData[]>([]);
const page = ref(Number(query.page) || 1);
const perPage = 10;
let totalPages = 0;

const storiesParams: ISbStoriesParams = {
  starts_with: key,
  per_page: perPage,
  page: page.value,
};

if (query.with_tag) {
  const tags = query.with_tag;
  storiesParams.with_tag = Array.isArray(tags) ? tags.join(",") : tags;
}
if (typeof query.search_term === "string") {
  storiesParams.search_term = query.search_term;
}

const { data } = await useAsyncData(key, async () => {
  return await storyblokApi.get("cdn/stories/", {
    ...storiesParams,
    version: query._storyblok || env.isDev ? "draft" : "published",
  });
});
totalPages = Math.ceil((data.value?.total || 0) / perPage);
stories.value = data.value?.data.stories || [];

const updatePage = () => {
  useRouter().push({
    name: "index",
    query: { ...query, page: page.value },
  });
};
makeReady();
</script>

<template>
  <div v-if="stories.length" class="flex flex-col gap-y-6">
    <!-- TODO: Fixed "Hydration mismatch" err. Research why. -->
    <ClientOnly>
      <LogCard
        v-for="story in stories"
        :key="story.content._uid"
        :slug="story.full_slug"
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
    </ClientOnly>
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
