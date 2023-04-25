<script setup>
import useAsyncDataStatus from "~/composables/useAsyncDataStatus";

const route = useRoute();
const { makeReady } = useAsyncDataStatus();
const story = await useAsyncStoryblok(`projects/${route.params.slug}`, {
  version: route.query._storyblok ? "draft" : "published",
});
makeReady();
</script>

<template>
  <StoryblokComponent
    v-if="story"
    :blok="story.content"
    :tags="story.tag_list"
  />
</template>
