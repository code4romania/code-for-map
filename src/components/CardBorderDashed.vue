<template>
  <div
    class="border-2  border-dashed py-5 px-10 h-full"
    :class="colorClasses"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: "CardBorderDashed",
  props: {
    color: {
      type: String,
      default: "blue",
    },
  },
  computed: {
    colorClasses() {
      const color = this.color;
      return `border-${color}-500`;
    },
  },
};
</script>
