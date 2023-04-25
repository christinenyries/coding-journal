<script setup lang="ts">
import { ISbStoryData, ISbStoriesParams } from "storyblok-js-client";
import { LocationQuery } from "vue-router";
import useAsyncDataStatus from "~/composables/useAsyncDataStatus";

const key = "logs";
const route = useRoute();
const storyblokApi = useStoryblokApi();
const { makeReady } = useAsyncDataStatus();
const stories = ref<ISbStoryData[]>([]);

const fetchStories = async (query: LocationQuery) => {
  const storiesParams: ISbStoriesParams = {
    starts_with: key,
    per_page: 10,
    version: "draft",
  };
  storiesParams.page = Number(query.page) || 1;
  if (query.with_tag) {
    const tags = query.with_tag;
    storiesParams.with_tag = Array.isArray(tags) ? tags.join(",") : tags;
  }
  if (typeof query.search_term === "string") {
    storiesParams.search_term = query.search_term;
  }

  const { data } = await useAsyncData(
    key,
    async () => await storyblokApi.get("cdn/stories/", storiesParams)
  );
  stories.value = data.value?.data.stories;
};

const logs = computed(() =>
  stories.value.map((story) => ({
    uid: story.content._uid,
    title: story.content.title,
    published: story.first_published_at || story.created_at,
    lastEdited: story.published_at || undefined,
    tags: story.tag_list,
    slug: story.full_slug,
  }))
);

(async () => {
  await fetchStories(route.query);
  makeReady();
})();

// TODO: Check how changes in visual editor can be reflected immediately
onBeforeRouteUpdate(async (to) => {
  await fetchStories(to.query);
});
</script>

<template>
  <div class="flex flex-col gap-y-6">
    <!-- TODO: Fixed Hydration node mismatch error on console. Research why -->
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
    </ClientOnly>
  </div>
</template>
