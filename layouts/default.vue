<template>
  <main>
    <TheNavbar />
    <div class="mx-auto my-20 px-6 max-w-xl">
      <div v-show="ready">
        <slot />
      </div>
      <AppSpinner v-show="!ready" />
    </div>
  </main>
</template>

<script setup>
import useAsyncDataStatus from "~/composables/useAsyncDataStatus";

const { ready } = useAsyncDataStatus();
</script>
