<template>
  <router-link
    :to="{
      name: 'Segment',
      params: {
        slug: slug,
        segment: segmentSlug,
      },
    }"
    class="lg:hidden flex justify-between items-center border-t-2 py-4 bg-white border-gray-50"
  >
    <div class="flex items-center gap-4">
      <img
        class="w-12 h-12"
        :src="require(`../../assets/svg/icons/icon-${segmentSlug}.svg`)"
      >
      {{ title }}
    </div>
    <img
      class="icon"
      src="../../assets/svg/icons/chevron-right.svg"
    >
  </router-link>
</template>

<script>
export default {
  name: "SegmentButton",
  props: {
    slug: {
      type: String,
      default: "",
    },
    segmentSlug: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
  },
};
</script>
