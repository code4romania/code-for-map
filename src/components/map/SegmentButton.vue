<template>
  <router-link
    :to="{
      name: 'Segment',
      params: {
        slug: slug,
        segment: segmentSlug,
      },
    }"
    class="d-lg-none d-flex justify-content-between align-items-center SegmentButton ListItem"
  >
    <div class="SegmentButton-icon">
      <img
        class="icon icon-md"
        :src="image"
      >
    </div>
    <div class="flex-fill mx-2">
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
    image: {
      type: String,
      default: ""
    }
  },
};
</script>
