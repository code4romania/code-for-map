<template>
  <div class="SegmentHeader">
    <router-link
      :to="{ name: 'Highway', params: { slug: slug } }"
      class="SegmentHeader-close"
    >
      <svg class="icon icon-sm"><use xlink:href="#close" /></svg>
    </router-link>

    <svg class="icon icon-yuge"><use :xlink:href="'#icon-' + icon" /></svg>
    <div class="text-center">
      <div
        class="badge badge-primary Segment-status"
        v-html="status"
      />
      <h2
        class="text-center font-weight-light"
        :class="`text-${color}`"
      >
        {{ title }}
      </h2>
    </div>
    <div
      v-if="description"
      class="SegmentHeader-desc"
      v-html="description"
    />
  </div>
</template>

<script>
export default {
  name: "SegmentHeader",
  props: {
    icon: {
      type: String,
      default: ""
    },
    slug: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    },
    status: {
      type: String,
      default: ""
    }
  }
};
</script>

<style></style>
