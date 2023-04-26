<script>
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import localizedFormat from "dayjs/plugin/localizedFormat";

// NOTE: Eslint rule disabled because `import dayjs, { extend } from "dayjs"` is causing errors during `npm run generate`
// eslint-disable-next-line import/no-named-as-default-member
const { extend } = dayjs;

extend(relativeTime);
extend(localizedFormat);

export default {
  props: {
    utc: {
      required: true,
      type: String,
    },
  },
  computed: {
    humanFriendlyDate() {
      return dayjs(this.utc).format("llll");
    },
    diffForHumans() {
      return dayjs(this.utc).fromNow();
    },
  },
};
</script>

<template>
  <span :title="humanFriendlyDate">
    {{ diffForHumans }}
  </span>
</template>
