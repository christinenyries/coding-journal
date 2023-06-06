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
  <article v-editable="blok">
    <h1 class="text-3xl font-semibold">{{ blok.title || "Sample title" }}</h1>
    <div class="flex justify-between py-2">
      <div class="pt-1 text-sm text-gray-600">
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
    <div class="content py-4 text-lg leading-relaxed" v-html="content"></div>
  </article>
</template>

<style scoped>
.content {
  @apply prose-lg prose-slate prose;
}
</style>
