<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
});
const { path } = useRoute();
</script>

<template>
  <NuxtLink :to="`${/\/\w+/.exec(path) || ''}/?with_tag=${name}`">
    <span
      class="inline-flex items-center rounded-full bg-gray-200 px-2 py-1 text-sm font-semibold text-gray-600 hover:bg-gray-300"
    >
      {{ name }}
    </span>
  </NuxtLink>
</template>
