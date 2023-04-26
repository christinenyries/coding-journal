<template>
  <main>
    <NuxtLoadingIndicator />
    <TheNavbar />
    <div
      :key="JSON.stringify($route.query)"
      class="text- mx-auto my-20 px-6 max-w-2xl"
    >
      <slot />
    </div>
  </main>
</template>
