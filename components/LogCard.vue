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
  <div v-editable="log" class="relative">
    <div class="absolute -top-3 right-6">
      <div class="flex flex-wrap gap-2">
        <AppBadge v-for="(tag, index) in tags" :key="index" :name="tag" />
      </div>
    </div>
    <NuxtLink :to="`/logs/${slug}`">
      <div
        class="overflow-hidden rounded-lg border p-6 shadow hover:bg-gray-50"
      >
        <h4 class="my-2 text-3xl font-semibold leading-tight">
          {{ log.title || "Sample title" }}
        </h4>

        <div class="text-right text-sm text-gray-600">
          published <AppDate :utc="published" />
          <span v-if="showLastEdited"
            >, last edited <AppDate :utc="lastEdited"
          /></span>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>
