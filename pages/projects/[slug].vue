<template>
  <h1>Project Details</h1>
</template>

<script>
import useAsyncDataStatus from "~/composables/useAsyncDataStatus";

const { makeReady } = useAsyncDataStatus();
makeReady();
</script>
