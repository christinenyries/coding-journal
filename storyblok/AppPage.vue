<script setup>
defineProps({
  blok: {
    type: Object,
    default: undefined,
  },
});
</script>

<template>
  <div v-editable="blok">
    <h1>Page</h1>
    <!-- <StoryblokComponent v-for="blok in blok.body" :key="blok._uid" :blok="blok">
    </StoryblokComponent> -->
  </div>
</template>
