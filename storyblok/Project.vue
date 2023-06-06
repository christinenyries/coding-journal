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
  <article v-editable="blok" class="flex flex-col gap-6">
    <h1 class="text-5xl font-bold">
      {{ blok.title || "Sample title" }}
    </h1>
    <img
      class="border"
      :src="blok.image?.filename"
      :alt="`${blok.title || 'Sample title'} project's image`"
    />
    <div class="mb-4 flex flex-wrap items-center justify-end gap-2">
      <AppBadge v-for="(tag, index) in tags" :key="index" :name="tag" />
    </div>
    <div class="text-xl">
      <p>{{ blok.description || "Sample description" }}</p>
      <table class="mt-6 table-auto">
        <tbody>
          <tr>
            <td>Source Code</td>
            <td class="pr-4">:</td>
            <td>
              <a
                class="text-blue-500 hover:underline hover:underline-offset-2"
                :href="blok.githubLink"
                target="_blank"
                >{{ blok.githubLink || "N/A" }}</a
              >
            </td>
          </tr>
          <tr>
            <td>Website</td>
            <td class="pr-4">:</td>
            <td>
              <a
                class="text-blue-500 hover:underline hover:underline-offset-2"
                :href="blok.link"
                target="_blank"
                >{{ blok.link || "N/A" }}</a
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </article>
</template>
