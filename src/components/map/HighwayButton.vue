<template>
  <router-link
    :to="{
      name: 'Segment',
      params: {
        slug: slug,
        segment: segmentSlug,
      },
      hash: '#map',
    }"
    class="badge-pill btn bg-white d-none d-lg-block HighwayButton"
    :class="`btn-outline-${color} ${
      hasProjects ? 'HighwayButton-hasProjects' : ''
    }`"
    :style="{
      top: `${segmentButton.position.top}%`,
      left: `${segmentButton.position.left}%`,
    }"
  >
    <div v-if="segmentButton.icon_left" class="d-flex align-items-center">
      <img class="icon" :src="segmentButton.image.url" />
      <div class="text-dark text-left ml-2">
        {{ segmentButton.title }}
      </div>
    </div>
    <div v-else class="d-flex align-items-center">
      <div class="text-dark text-right mr-2">
        {{ segmentButton.title }}
      </div>
      <img class="icon" :src="segmentButton.image.url" />
    </div>
  </router-link>
</template>

<script>
export default {
  /** Component name. */
  name: "HighwayButton",
  /** Recived props. */
  props: {
    segmentButton: {
      type: Object,
      default: () => {},
    },
    slug: {
      type: String,
      default: "",
    },
    segmentSlug: {
      type: String,
      default: "",
    },
    color: {
      type: String,
      default: "",
    },
    hasProjects: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
