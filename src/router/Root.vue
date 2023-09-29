<template>
  <router-view
    :page="page"
    :data="data"
  />
</template>

<script>
export default {
  /** Component name. */
  name: "Root",
  /** Registered components. */
  /** Recived props. */
  props: {
    data: {
      type: Object,
      default: () => {},
    },
    page: {
      type: Object,
      default: () => {},
    },
  },

};
</script>
