<template>
  <router-link
    :to="{
      name: 'Segment',
      params: {
        slug: slug,
        _slug: highway_slug
      }
    }"
    class="d-lg-none d-flex justify-content-between align-items-center SegmentButton"
  >
    <div class="SegmentButton-icon">
      <img :src="icon" :alt="title" />
    </div>
    <div class="flex-fill mx-2">{{ title }}</div>
    <img class="icon" :src="chevron" alt="chevron right" />
  </router-link>
</template>

<script>
export default {
  name: "SegmentButton",
  props: {
    slug: String,
    highway_slug: String,
    icon: String,
    title: String,
    chevron: String
  }
};
</script>
