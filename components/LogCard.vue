<script setup>
defineProps({
  log: {
    type: Object,
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
  <div v-editable="log" class="border-2 rounded-lg overflow-hidden">
    <div class="p-6">
      <div class="flex items-center flex-wrap gap-2">
        <AppBadge v-for="(tag, index) in tags" :key="index" :name="tag" />
      </div>

      <h4 class="my-2 font-semibold text-2xl leading-tight">
        <NuxtLink
          :to="`/logs/${slug}`"
          class="hover:underline hover:underline-offset-8 focus:underline focus:underline-offset-8"
        >
          {{ log.title || "Sample title" }}
        </NuxtLink>
      </h4>

      <div class="text-gray-600 text-sm text-right">
        published <AppDate :utc="published" />
        <span v-if="lastEdited && lastEdited !== published"
          >, last edited <AppDate :utc="lastEdited"
        /></span>
      </div>
    </div>
  </div>
</template>
