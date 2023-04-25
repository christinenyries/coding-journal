<script setup lang="ts">
import useAsyncDataStatus from "~/composables/useAsyncDataStatus";

const { makeReady } = useAsyncDataStatus();
const route = useRoute();
const story = await useAsyncStoryblok(`logs/${route.params.slug}`, {
  version: "draft",
});
makeReady();
</script>

<template>
  <StoryblokComponent
    v-if="story"
    :blok="story.content"
    :tags="story.tag_list"
    :published="story.first_published_at || story.created_at"
    :last-edited="story.published_at"
  />
</template>
