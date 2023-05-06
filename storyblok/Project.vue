<script setup>
defineProps({
  blok: {
    type: Object,
    required: true,
  },
  tags: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <article v-editable="blok" class="text-lg">
    <h1 class="mb-4 text-3xl font-semibold">
      {{ blok.title || "Sample title" }}
    </h1>
    <img
      class="my-2 w-full"
      :src="blok.image?.filename"
      :alt="`${blok.title || 'Sample title'} project's image`"
    />
    <div class="flex flex-wrap items-center justify-end gap-2">
      <AppBadge v-for="(tag, index) in tags" :key="index" :name="tag" />
    </div>
    <div class="my-4">
      <p>{{ blok.description || "Sample description" }}</p>
      <section class="my-6">
        <p>
          Github Link:
          <a
            class="text-blue-500 hover:underline hover:underline-offset-2"
            :href="blok.githublink"
            target="_blank"
            >{{ blok.githubLink || "N/A" }}</a
          >
        </p>
        <p>
          Link:
          <a
            class="text-blue-500 hover:underline hover:underline-offset-2"
            :href="blok.link"
            target="_blank"
            >{{ blok.link || "N/A" }}</a
          >
        </p>
      </section>
    </div>
  </article>
</template>
