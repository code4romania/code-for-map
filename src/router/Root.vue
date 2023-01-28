<template>
  <router-view :page="this.page" :data="this.data" />
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
  mounted() {
    console.log("Root", this);

    // this.data.back_to_map.visible = false;
  },
};
</script>
