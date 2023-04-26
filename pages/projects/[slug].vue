<script setup>
const route = useRoute();
const env = useEnvVariables();
const { makeReady } = useAsyncDataStatus();
const story = await useAsyncStoryblok(`projects/${route.params.slug}`, {
  version: route.query._storyblok || env.isDev ? "draft" : "published",
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
