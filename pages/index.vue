<script setup lang="ts">
// TODO: Import via plugin
import VPagination from "@hennge/vue3-pagination";
import "@hennge/vue3-pagination/dist/vue3-pagination.css";

import { ISbStoriesParams, ISbStories } from "storyblok-js-client";
import useAsyncDataStatus from "~/composables/useAsyncDataStatus";

const key = "logs";
const route = useRoute();
const storyblokApi = useStoryblokApi();
const { makeReady } = useAsyncDataStatus();
const stories = ref<ISbStories | null>(null);
const page = ref(Number(route.query.page) || 1);
const perPage = 10;
let totalPages = 0;
const storiesParams: ISbStoriesParams = {
  starts_with: key,
  per_page: perPage,
  page: page.value,
  version: "draft",
};

if (route.query.with_tag) {
  const tags = route.query.with_tag;
  storiesParams.with_tag = Array.isArray(tags) ? tags.join(",") : tags;
}
if (typeof route.query.search_term === "string") {
  storiesParams.search_term = route.query.search_term;
}

const { data } = await useAsyncData(
  key,
  async () => await storyblokApi.get("cdn/stories/", storiesParams)
);
stories.value = data.value;
totalPages = Math.ceil((stories.value?.total || 0) / perPage);

const logs = computed(
  () =>
    stories.value?.data.stories.map((story) => ({
      uid: story.content._uid,
      title: story.content.title,
      published: story.first_published_at || story.created_at,
      lastEdited: story.published_at || undefined,
      tags: story.tag_list,
      slug: story.full_slug,
    })) || []
);

const updatePage = () => {
  useRouter().push({
    name: "index",
    query: { ...route.query, page: page.value },
  });
};
makeReady();
</script>

<template>
  <div v-if="logs.length" class="flex flex-col gap-y-6">
    <!-- TODO: Fixed "Hydration mismatch" err. Research why. -->
    <ClientOnly>
      <LogCard
        v-for="log in logs"
        :key="log.uid"
        :slug="log.slug"
        :title="log.title"
        :tags="log.tags"
        :published="log.published"
        :last-edited="log.lastEdited"
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
