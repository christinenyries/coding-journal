<template>
  <main>
    <TheNavbar />
    <div>
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
