<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <NuxtLink :to="{ name: 'index', query: { with_tag: name } }">
    <span
      class="inline-flex items-center px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded-full text-sm font-semibold text-gray-600"
    >
      {{ name }}
    </span>
  </NuxtLink>
</template>
