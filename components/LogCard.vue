<script setup>
defineProps({
  title: {
    type: String,
    default: "Log Title",
  },
  tags: {
    type: Array,
    default: () => [],
  },
  published: {
    type: Date,
    default: () => new Date(0),
  },
  lastEdited: {
    type: Date,
    default: () => new Date(0),
    required: false,
  },
});
</script>

<template>
  <div class="border rounded-lg overflow-hidden">
    <div class="p-6">
      <h4 class="font-semibold text-lg leading-tight truncate">{{ title }}</h4>
      <div class="mt-2 flex items-center">
        <span class="text-gray-600 text-sm"
          >Published <AppDate :utc="published" />
        </span>
        <span v-if="lastEdited" class="ml-2 text-gray-600 text-sm"
          >Last Edited <AppDate :utc="lastEdited"
        /></span>
      </div>
      <div class="pt-2 flex items-center flex-wrap gap-2">
        <AppBadge v-for="(tag, index) in tags" :key="index" :name="tag" />
      </div>
    </div>
  </div>
</template>
