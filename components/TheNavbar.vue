<script setup>
const isOpen = ref(false);
</script>

<template>
  <header
    class="items-center justify-between bg-gray-50 sm:flex sm:border-b-2 sm:p-2 sm:pr-4 lg:pl-4"
  >
    <div class="hidden lg:block lg:flex-1">
      <AppSearchBar />
    </div>
    <div
      class="flex items-center justify-between border-b-2 p-2 sm:justify-center sm:border-none sm:p-0 lg:flex-1"
    >
      <div>
        <NuxtLink to="/">
          <img
            src="https://a.storyblok.com/f/224118/340x132/e3ee1cdf49/coding-journal.png"
            alt="Coding Journal Logo"
          />
        </NuxtLink>
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
      class="bg-white text-xl lowercase tracking-wide sm:flex sm:justify-end sm:bg-inherit lg:flex-1"
    >
      <div
        class="pr-4 pt-2 text-right sm:flex sm:items-center sm:gap-x-10 sm:p-0"
      >
        <NuxtLink to="/" class="nav-link"> Logs </NuxtLink>
        <NuxtLink to="/projects" class="nav-link"> Projects </NuxtLink>
        <NuxtLink to="/about" class="nav-link"> About </NuxtLink>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.nav-link + .nav-link {
  @apply mt-1 sm:mt-0;
}
.nav-link {
  @apply block rounded p-2 hover:underline hover:decoration-gray-500 hover:decoration-4 hover:underline-offset-8 sm:ml-2 sm:mt-0;
}
.nav-link.router-link-active {
  @apply underline decoration-gray-500 decoration-4 underline-offset-8;
}
</style>
