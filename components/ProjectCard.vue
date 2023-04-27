<script setup>
defineProps({
  title: {
    type: String,
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
  image: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="p-6 border-2 rounded-lg overflow-hidden w-72">
    <img class="border w-full" :src="image" :alt="`${title} project's image`" />
    <h4 class="my-4 font-semibold text-2xl leading-tight">
      <NuxtLink
        :to="{ name: 'projects-slug', params: { slug } }"
        class="hover:underline hover:underline-offset-8 focus:underline focus:underline-offset-8"
      >
        {{ title }}
      </NuxtLink>
    </h4>
    <div class="flex items-center flex-wrap gap-2">
      <AppBadge
        v-for="(tag, index) in tags"
        :key="index"
        :name="tag"
        route-name="projects"
      />
    </div>
  </div>
</template>
