<template>
  <component
    :is="hType"
    class="text-bold font-bold mb-6"
    :class="hClasses"
  >
    <slot />
  </component>
</template>

<script>
export default {
  name: "Heading",
  props: {
    level: {
      type: Number,
      required: true,
    },
  },
  computed: {
    colorClasses() {
      const sizes = {
        1: 'text-blue',
        2: 'text-blue',
        3: 'text-gray'
      };
      return sizes[this.level];
    },
    sizesClasses() {
      const sizes = {
        1: 'text-5xl',
        2: 'text-3xl',
        3: 'text-xl'
      };
      return sizes[this.level] || 'text-xl';
    },
    hType() {
      return "h" + this.level;
    },
    hClasses() {
      return `${this.colorClasses} ${this.sizesClasses}`
    }
  },
};
</script>
