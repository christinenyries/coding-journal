<script setup>
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
  <article class="mx-auto mt-20 p-6 max-w-xl">
    <h1 class="text-3xl font-semibold">{{ blok.title }}</h1>
    <div class="py-2 flex justify-between">
      <div class="pt-1 text-gray-600 text-sm">
        <span>published <AppDate :utc="published" /></span>
        <span v-if="lastEdited"
          >, last edited <AppDate :utc="lastEdited"
        /></span>
      </div>

      <div class="flex items-center justify-end flex-wrap gap-2">
        <AppBadge v-for="(tag, index) in tags" :key="index" :name="tag" />
      </div>
    </div>

    <!-- NOTE: Can lead to XSS attacks, but I'm the only one providing input to this field, so I think it's okay to disable this for now. -->
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div class="content py-4" v-html="content"></div>
  </article>
</template>

<style scoped>
:deep(.content) p {
  @apply mb-8 text-lg leading-relaxed;
}
</style>
