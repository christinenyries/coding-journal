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
    <h1 class="text-3xl font-semibold mb-4">{{ blok.title }}</h1>
    <img
      class="w-full my-2"
      :src="blok.image.filename"
      :alt="`${blok.title} project's image`"
    />
    <div class="flex items-center justify-end flex-wrap gap-2">
      <AppBadge
        v-for="(tag, index) in tags"
        :key="index"
        :name="tag"
        route-name="projects"
      />
    </div>
    <div class="my-4">
      <p>{{ blok.description }}</p>
      <section class="my-6">
        <p>
          Github Link:
          <a
            class="text-blue-500 hover:underline hover:underline-offset-2"
            :href="blok.link"
            target="_blank"
            >{{ blok.githubLink }}</a
          >
        </p>
        <p>
          Link:
          <a
            class="text-blue-500 hover:underline hover:underline-offset-2"
            :href="blok.link"
            target="_blank"
            >{{ blok.link }}</a
          >
        </p>
      </section>
    </div>
  </article>
</template>
