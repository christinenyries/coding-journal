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
</script>

<template>
  <div
    v-editable="project"
    class="p-6 border-2 rounded-lg overflow-hidden w-72"
  >
    <img
      class="border w-full"
      :src="project.image?.filename"
      :alt="`${project.title} project's image`"
    />
    <h4 class="my-4 font-semibold text-2xl leading-tight">
      <NuxtLink
        :to="`/projects/${slug}`"
        class="hover:underline hover:underline-offset-8 focus:underline focus:underline-offset-8"
      >
        {{ project.title || "Sample title" }}
      </NuxtLink>
    </h4>
    <div class="flex items-center flex-wrap gap-2">
      <AppBadge v-for="(tag, index) in tags" :key="index" :name="tag" />
    </div>
  </div>
</template>
