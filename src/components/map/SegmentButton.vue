<template>
  <router-link
    :to="{
      name: 'Segment',
      params: {
        slug: slug,
        _slug: highway_slug
      }
    }"
    class="d-lg-none d-flex justify-content-between align-items-center SegmentButton ListItem"
  >
    <div class="SegmentButton-icon">
      <svg class="icon icon-md"><use :xlink:href="'#icon-' + highway_slug"></use></svg>
    </div>
    <div class="flex-fill mx-2">{{ title }}</div>
    <svg class="icon"><use xlink:href="#chevron-right"></use></svg>
  </router-link>
</template>

<script>
export default {
  name: "SegmentButton",
  props: {
    slug: String,
    highway_slug: String,
    title: String
  }
};
</script>
