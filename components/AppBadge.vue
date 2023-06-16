<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  for: {
    type: String,
    default: "",
  },
});
const path = computed(() => `${props.for}/?with_tag=${props.name}`);
</script>

<template>
  <NuxtLink :to="path">
    <span
      class="inline-flex items-center rounded-full bg-gray-200 px-2 py-1 text-sm font-semibold text-gray-600 hover:bg-gray-300"
    >
      {{ name }}
    </span>
  </NuxtLink>
</template>
