<script setup>
const route = useRoute();
const storyblokApi = useStoryblokApi();

const { slug } = route.params;
const isDraft = route.query._storyblok || useRuntimeConfig().isDev;

const { data } = await useAsyncData(route.fullPath, () => {
  return storyblokApi.get(`cdn/stories/${slug.join("/")}/`, {
    version: isDraft ? "draft" : "published",
  });
});
const story = computed(() => data.value?.data.story);
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
