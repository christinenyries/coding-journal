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
      class="inline-flex items-center px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded-full text-sm font-semibold text-gray-600"
    >
      {{ name }}
    </span>
  </NuxtLink>
</template>
