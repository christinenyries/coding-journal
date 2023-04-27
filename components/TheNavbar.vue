<script setup>
const isOpen = ref(false);
</script>

<template>
  <header class="bg-gray-50 sm:p-2 sm:border-b-2 sm:flex sm:justify-between">
    <div class="hidden pl-4 lg:flex lg:items-center lg:justify-start lg:w-1/3">
      <div>
        <AppSearchBar />
      </div>
    </div>
    <div
      class="p-2 flex items-center justify-between border-b-2 sm:p-0 sm:border-none sm:justify-center"
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
      class="text-xl tracking-wide lowercase bg-white sm:flex sm:bg-inherit lg:justify-end lg:w-1/3"
    >
      <div
        class="mr-0 px-4 pt-4 text-right sm:pt-0 sm:items-center sm:flex sm:gap-x-10"
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
  @apply block p-2 rounded hover:underline hover:underline-offset-8 hover:decoration-4 hover:decoration-gray-500 sm:mt-0 sm:ml-2;
}
.nav-link.router-link-active {
  @apply underline underline-offset-8 decoration-4 decoration-gray-500;
}
</style>
