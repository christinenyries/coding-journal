<script setup>
const props = defineProps({
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

const showLastEdited = computed(
  () =>
    props.lastEdited &&
    props.lastEdited.split("T")[0] !== props.published.split("T")[0]
);
</script>

<template>
  <div v-editable="log" class="overflow-hidden rounded-lg border-2">
    <div class="p-6">
      <div class="flex flex-wrap items-center gap-2">
        <AppBadge v-for="(tag, index) in tags" :key="index" :name="tag" />
      </div>

      <h4 class="my-2 text-2xl font-semibold leading-tight">
        <NuxtLink
          :to="`/logs/${slug}`"
          class="hover:underline hover:underline-offset-8 focus:underline focus:underline-offset-8"
        >
          {{ log.title || "Sample title" }}
        </NuxtLink>
      </h4>

      <div class="text-right text-sm text-gray-600">
        published <AppDate :utc="published" />
        <span v-if="showLastEdited"
          >, last edited <AppDate :utc="lastEdited"
        /></span>
      </div>
    </div>
  </div>
</template>
