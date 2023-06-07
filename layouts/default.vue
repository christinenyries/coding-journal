<script setup>
useSeoMeta({
  title: "Coding Journal",
});
</script>

<template>
  <div>
    <NuxtLoadingIndicator color="#0ea5e9" />
    <TheNavbar />
    <div class="mx-auto my-20 w-11/12 lg:w-1/2">
      <slot />
    </div>
  </div>
</template>
