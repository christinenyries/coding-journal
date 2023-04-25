<script setup lang="ts">
import { ISbStoriesParams, ISbStoryData } from "storyblok-js-client";
import useAsyncDataStatus from "~/composables/useAsyncDataStatus";

const key = "projects";
const route = useRoute();
const storyblokApi = useStoryblokApi();
const { makeReady } = useAsyncDataStatus();
const stories = ref<ISbStoryData[]>([]);
const storiesParams: ISbStoriesParams = {
  starts_with: key,
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
stories.value = data.value?.data.stories || [];

makeReady();
</script>

<template>
  <div v-if="stories.length" class="flex gap-6 flex-wrap">
    <!-- TODO: Fixed "Hydration mismatch" err. Research why. -->
    <ClientOnly>
      <ProjectCard
        v-for="story in stories"
        :key="story.content._uid"
        :slug="story.full_slug"
        :tags="story.tag_list"
        :title="story.content.title"
        :image="story.content.image.filename"
      />
    </ClientOnly>
  </div>
  <div v-else>
    <p class="italic text-lg text-center">Will build something soon.</p>
  </div>
</template>
