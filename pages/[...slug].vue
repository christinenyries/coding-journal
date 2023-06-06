<script setup>
const route = useRoute();

const { slug } = route.params;
const showDraft = route.query._storyblok || useRuntimeConfig().isDev;
const story = await useAsyncStoryblok(
  slug && slug.length > 0 ? slug.join("/") : "home",
  {
    version: showDraft ? "draft" : "published",
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
