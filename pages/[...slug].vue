<script setup>
const route = useRoute();
const env = useEnvVariables();

const { slug } = route.params;
const isDev = route.query._storyblok || env.isDev;

const story = await useAsyncStoryblok(
  slug && slug.length > 0 ? slug.join("/") : "home",
  {
    version: isDev ? "draft" : "published",
  }
);
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
