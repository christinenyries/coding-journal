<script setup>
useSeoMeta({
  titleTemplate: (titleChunk) => `${titleChunk} - ${props.blok.title}`,
});
const props = defineProps({
  blok: {
    type: Object,
    required: true,
  },
  tags: {
    type: Array,
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
const content = computed(() => renderRichText(props.blok.content));
</script>

<template>
  <div v-editable="blok">
    <h1 class="mb-4 text-5xl font-bold">{{ blok.title || "Sample title" }}</h1>

    <div class="flex justify-between">
      <div class="text-sm text-gray-600">
        published <AppDate :utc="published" />
        <span v-if="lastEdited && lastEdited !== published"
          >, last edited <AppDate :utc="lastEdited"
        /></span>
      </div>

      <div class="flex flex-wrap items-center justify-end gap-2">
        <AppBadge v-for="(tag, index) in tags" :key="index" :name="tag" />
      </div>
    </div>

    <!-- NOTE: Can lead to XSS attacks, but I'm the only one providing input to this field, so I think it's okay to disable this for now. -->
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div class="prose prose-xl prose-slate mt-20" v-html="content"></div>
  </div>
</template>
