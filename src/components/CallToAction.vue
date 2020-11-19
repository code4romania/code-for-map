<template>
  <a
    :href="action.link"
    class="btn px-5 mx-1 text-white"
    :class="`btn-${action.color}`"
    >{{ action.title }}</a
  >
</template>

<script>
export default {
  name: "CallToAction",
  props: {
    action: {
      type: Object
    }
  }
};
</script>

<style></style>
