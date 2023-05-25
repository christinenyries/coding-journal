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
:deep(.content) > * {
  @apply mb-8;
}

:deep(.content) a {
  @apply border-b-2 border-dashed  border-gray-400;
}

:deep(.content) h2 {
  @apply text-xl font-semibold;
}

:deep(.content) ul {
  @apply list-disc pl-4;
}

:deep(.content) p > code,
:deep(.content) li > code,
:deep(.content) dd > code,
:deep(.content) td > code {
  background: darkslategray;
  word-wrap: break-word;
  box-decoration-break: clone;
  padding: 0.1rem 0.3rem 0.2rem;
  border-radius: 0.2rem;
}

:deep(.content) pre code {
  display: block;
  white-space: pre;
  -webkit-overflow-scrolling: touch;
  overflow-x: scroll;
  max-width: 100%;
  min-width: 100px;
}

:deep(.content) code {
  @apply rounded-md bg-gray-600 p-4 text-white;
}
</style>
