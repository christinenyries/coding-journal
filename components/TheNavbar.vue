<script setup>
const isOpen = ref(false);
</script>

<template>
  <header class="sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3">
    <div class="flex items-center justify-between px-4 py-3 sm:p-0">
      <div>
        <h1 class="font-semibold text-2xl text-gray-600">Coding Journal</h1>
      </div>
      <div class="sm:hidden">
        <button
          type="button"
          class="block text-gray-400 hover:text-black focus:text-black focus:outline-none"
          @click="isOpen = !isOpen"
        >
          <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path
              v-show="isOpen"
              fill-rule="evenodd"
              d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
            />
            <path
              v-show="!isOpen"
              fill-rule="evenodd"
              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
            />
          </svg>
        </button>
      </div>
    </div>
    <nav
      :class="isOpen ? 'block' : 'hidden'"
      class="px-2 pt-2 pb-4 sm:flex sm:p-0"
    >
      <NuxtLink to="/" class="nav-link"> Logs </NuxtLink>
      <NuxtLink to="/projects" class="nav-link"> Projects </NuxtLink>
      <NuxtLink to="/about" class="nav-link"> About </NuxtLink>
    </nav>
  </header>
</template>

<style scoped>
.nav-link + .nav-link {
  @apply mt-1;
}
.nav-link {
  @apply block px-2 py-1 text-gray-500 rounded hover:underline hover:underline-offset-4 hover:decoration-4 hover:decoration-gray-500 sm:mt-0 sm:ml-2;
}
.nav-link.router-link-active {
  @apply underline underline-offset-4 decoration-4 decoration-gray-500;
}
</style>
