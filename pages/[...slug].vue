<script setup>
const route = useRoute();
const storyblokApi = useStoryblokApi();
const isDraft = route.query._storyblok || useRuntimeConfig().isDev;

const fullSlug = route.params.slug.join("/");
if (
  !(
    fullSlug.startsWith("logs/") ||
    fullSlug.startsWith("projects/") ||
    fullSlug === "about"
  )
) {
  throw createError({
    statusCode: 404,
    message: `We don't have a page on route '/${fullSlug}'.`,
  });
}

const { data } = await useAsyncData(route.fullPath, () =>
  storyblokApi.get(`cdn/stories/${fullSlug}/`, {
    version: isDraft ? "draft" : "published",
  })
);
const story = computed(() => data.value?.data.story);
</script>

<template>
  <div>
    <StoryblokComponent
      v-if="story"
      :blok="story.content"
      :tags="story.tag_list"
      :published="story.first_published_at || story.created_at"
      :last-edited="story.published_at"
    />
  </div>
</template>
