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
  <div class="border-2 rounded-lg overflow-hidden hover:bg-gray-50 w-72">
    <div class="p-6">
      <img
        class="border w-full"
        :src="image"
        :alt="`${title} project's image`"
      />
      <h4 class="my-4 font-semibold text-2xl leading-tight">
        <NuxtLink :to="{ name: 'projects-slug', params: { slug } }">
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
  </div>
</template>
