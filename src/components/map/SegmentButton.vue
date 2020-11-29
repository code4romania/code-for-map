<template>
  <router-link
    :to="{
      name: 'Segment',
      params: {
        slug: slug,
        segment: segmentSlug
      },
    }"
    class="d-lg-none d-flex justify-content-between align-items-center SegmentButton ListItem"
  >
    <div class="SegmentButton-icon">
      <svg class="icon icon-md"><use :xlink:href="'#icon-' + segmentSlug" /></svg>
    </div>
    <div class="flex-fill mx-2">
      {{ title }}
    </div>
    <svg class="icon"><use xlink:href="#chevron-right" /></svg>
  </router-link>
</template>

<script>
export default {
  name: "SegmentButton",
  props: {
    slug: {
      type: String,
      default: ""
    },
    segmentSlug: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    }
  }
};
</script>
