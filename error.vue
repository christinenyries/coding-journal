<script setup>
const error = useError();
const handleError = () => clearError({ redirect: "/" });
</script>

<template>
  <div class="flex h-screen w-full flex-col items-center justify-center gap-4">
    <h1 class="text-8xl">{{ error.statusCode }}</h1>
    <p class="text-4xl">An error occurred!</p>
    <p class="text-2xl">{{ error.message }}</p>
    <button
      class="mt-4 rounded border px-4 py-3 shadow hover:bg-gray-50"
      @click="handleError"
    >
      Go Back to Homepage
    </button>
  </div>
</template>
