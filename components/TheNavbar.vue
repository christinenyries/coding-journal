<script setup>
const isOpen = ref(false);
</script>

<template>
  <header class="border-b-2 p-2 sm:flex sm:justify-between">
    <div class="hidden lg:block lg:flex-1">
      <AppSearchBar />
    </div>
    <div class="flex items-center justify-between sm:justify-center lg:flex-1">
      <div>
        <img
          src="https://a.storyblok.com/f/224118/340x132/e3ee1cdf49/coding-journal.png"
          alt="Coding Journal Logo"
        />
      </div>
      <div class="mr-3 sm:hidden">
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
      class="px-1 py-2 text-lg lowercase sm:flex sm:justify-center sm:gap-x-10 lg:flex-1"
    >
      <NuxtLink :to="{ name: 'index' }" class="nav-link"> Logs </NuxtLink>
      <NuxtLink to="/projects" class="nav-link"> Projects </NuxtLink>
      <NuxtLink to="/about" class="nav-link"> About </NuxtLink>
    </nav>
  </header>
</template>

<style scoped>
.nav-link + .nav-link {
  @apply mt-1 sm:mt-0;
}
.nav-link {
  @apply block px-2 py-1 rounded hover:underline hover:underline-offset-4 hover:decoration-4 hover:decoration-gray-500 sm:mt-0 sm:ml-2;
}
.nav-link.router-link-active {
  @apply underline underline-offset-4 decoration-4 decoration-gray-500;
}
</style>
