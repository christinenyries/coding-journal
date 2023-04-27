<script setup>
const route = useRoute();
const env = useEnvVariables();

const isDev = route.query._storyblok || env.isDev;

const story = await useAsyncStoryblok("projects", {
  version: isDev ? "draft" : "published",
});
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
