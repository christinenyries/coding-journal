<script setup>
defineProps({
  project: {
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
});

function toWebP(imageUrl) {
  // Enable Storyblok's server-side WebP support detection by simply appending `/m/` at the end of image url
  // See https://www.storyblok.com/docs/image-service#optimize
  return `${imageUrl}/m/`;
}
</script>

<template>
  <div
    v-editable="project"
    class="w-72 overflow-hidden rounded-lg border-2 p-6"
  >
    <img
      class="w-full border"
      :src="toWebP(project.image?.filename)"
      :alt="`${project.title} project's image`"
    />
    <h4 class="my-4 text-2xl font-semibold leading-tight">
      <NuxtLink
        :to="`/projects/${slug}`"
        class="hover:underline hover:underline-offset-8 focus:underline focus:underline-offset-8"
      >
        {{ project.title || "Sample title" }}
      </NuxtLink>
    </h4>
    <div class="flex flex-wrap items-center gap-2">
      <AppBadge v-for="(tag, index) in tags" :key="index" :name="tag" />
    </div>
  </div>
</template>
