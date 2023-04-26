<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  tags: {
    type: Array,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  published: {
    type: String,
    required: true,
  },
  lastEdited: {
    type: String,
    default: null,
    required: false,
  },
});
</script>

<template>
  <div class="border-2 rounded-lg overflow-hidden hover:bg-gray-50">
    <div class="p-6">
      <div class="flex items-center flex-wrap gap-2">
        <AppBadge v-for="(tag, index) in tags" :key="index" :name="tag" />
      </div>

      <h4 class="my-2 font-semibold text-2xl leading-tight">
        <NuxtLink :to="{ name: 'logs-slug', params: { slug } }">
          {{ title }}
        </NuxtLink>
      </h4>

      <div class="text-gray-600 text-sm text-right">
        <span>published <AppDate :utc="published" /></span>
        <span v-if="lastEdited"
          >, last edited <AppDate :utc="lastEdited"
        /></span>
      </div>
    </div>
  </div>
</template>
