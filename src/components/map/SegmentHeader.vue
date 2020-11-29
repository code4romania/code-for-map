<template>
  <div class="SegmentHeader">
    <router-link
      :to="{ name: 'Highway', params: { slug: slug } }"
      class="SegmentHeader-close"
    >
      <img
        class="icon icon-sm"
        src="../../assets/svg/icons/close.svg"
      >
    </router-link>

    <img
      class="icon icon-yuge"
      :src="require(`../../assets/svg/icons/icon-${icon}.svg`)"
    >
    <div class="text-center">
      <div
        class="badge badge-primary Segment-status mt-3"
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
      default: "",
    },
    slug: {
      type: String,
      default: "",
    },
    color: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    status: {
      type: String,
      default: "",
    },
  },
};
</script>

<style></style>
