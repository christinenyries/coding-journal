<script setup lang="ts">
const props = defineProps<{ pages: number; page: number }>();

const route = useRoute();
const updatePage = (page: number) => {
  navigateTo({ query: { ...route.query, page } });
};

if (props.page <= 0 || props.page > props.pages) {
  throw createError({
    statusCode: 404,
    message: `'${props.page}' is an invalid page for the current route '${route.path}''`,
  });
}
</script>

<template>
  <div class="mt-10 flex justify-center gap-4">
    <button
      class="w-[100px] rounded border py-2 shadow enabled:hover:bg-gray-50 disabled:bg-slate-300"
      :class="{}"
      :disabled="page <= 1"
      @click="updatePage(page - 1)"
    >
      ⬅️ Prev
    </button>
    <button
      class="w-[100px] rounded border py-2 shadow enabled:hover:bg-gray-50 disabled:bg-slate-300"
      :disabled="page >= pages"
      @click="updatePage(page + 1)"
    >
      Next ➡️
    </button>
  </div>
</template>
