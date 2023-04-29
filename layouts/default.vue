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
