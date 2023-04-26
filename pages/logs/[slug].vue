<script setup lang="ts">
const { makeReady } = useAsyncDataStatus();
const route = useRoute();
const env = useEnvVariables();
const story = await useAsyncStoryblok(`logs/${route.params.slug}`, {
  version: route.query._storyblok || env.isDev ? "draft" : "published",
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
