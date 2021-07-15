<template>
  <component
    :is="hType"
    class="font-bold"
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
        3: 'text-black'
      };
      return sizes[this.level];
    },
    sizesClasses() {
      const sizes = {
        1: 'text-5xl mb-6',
        2: 'text-4xl',
        3: 'text-2xl'
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
