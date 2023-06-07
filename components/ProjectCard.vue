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
  <div v-editable="project" class="relative">
    <div
      class="absolute -top-3 right-3 flex flex-wrap items-center justify-end gap-2"
    >
      <AppBadge v-for="(tag, index) in tags" :key="index" :name="tag" />
    </div>
    <NuxtLink :to="`/projects/${slug}`">
      <div
        class="flex flex-col gap-4 overflow-hidden rounded-lg border p-6 pt-10 shadow hover:bg-gray-50"
      >
        <img
          class="h-[300px] w-[300px] object-contain"
          :src="toWebP(project.image?.filename)"
          :alt="`${project.title} project's image`"
        />
        <h4 class="my-4 text-center text-3xl font-semibold leading-tight">
          {{ project.title || "Sample title" }}
        </h4>
      </div>
    </NuxtLink>
  </div>
</template>
