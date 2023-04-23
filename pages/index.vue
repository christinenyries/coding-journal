<script setup>
const route = useRoute();
const page = route.query.page || 1;
const response = await useStoryblokApi().get("cdn/stories/", {
  starts_with: "logs/",
  per_page: 10,
  page,
  version: "draft",
});
const logs = response.data.stories.map((story) => ({
  uuid: story.uuid,
  title: story.content.title,
  published: story.first_published_at || story.created_at,
  lastEdited: story.published_at,
  tags: story.tag_list,
  _editable: story.content._editable,
}));
</script>

<template>
  <div class="mx-auto flex flex-col gap-y-6 sm:w-3/4">
    <LogCard
      v-for="log in logs"
      :key="log.uuid"
      :title="log.title"
      :tags="log.tags"
      :published="log.published"
      :last-edited="log.lastEdited"
    />
  </div>
</template>
