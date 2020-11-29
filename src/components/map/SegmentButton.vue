<template>
  <router-link
    :to="{
      name: 'Segment',
      params: {
        slug: slug,
        segment: segmentSlug,
      },
      hash: '#map'
    }"
    class="d-lg-none d-flex justify-content-between align-items-center SegmentButton ListItem"
  >
    <div class="SegmentButton-icon">
      <img
        class="icon icon-md"
        :src="require(`../../assets/svg/icons/icon-${segmentSlug}.svg`)"
      />
    </div>
    <div class="flex-fill mx-2">
      {{ title }}
    </div>
    <img class="icon" src="../../assets/svg/icons/chevron-right.svg" />
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
