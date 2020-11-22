<template>
  <div class="SegmentHeader">
    <router-link :to="{ name: 'Highway', params: { slug: slug } }" class="SegmentHeader-close">
      <svg class="icon icon-sm"><use xlink:href="#close"></use></svg>
    </router-link>

    <svg class="icon icon-yuge"><use :xlink:href="'#icon-' + icon"></use></svg>
    <h2 class="text-center font-weight-light py-3" :class="`text-${color}`">
      {{ title }}
    </h2>
    <div class="SegmentHeader-desc" v-if="description" v-html="description"></div>
  </div>
</template>

<script>
export default {
  name: "SegmentHeader",
  props: {
    icon: String,
    slug: String,
    color: String,
    title: String,
    description: String
  }
};
</script>

<style></style>
