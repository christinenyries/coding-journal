<script>
import dayjs, { extend } from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import localizedFormat from "dayjs/plugin/localizedFormat";

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
