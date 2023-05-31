<template>
  <main>
    <NuxtLoadingIndicator />
    <TheNavbar />
    <div
      :key="JSON.stringify($route.query)"
      class="text- mx-auto my-20 max-w-2xl px-6"
    >
      <slot />
    </div>
  </main>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
