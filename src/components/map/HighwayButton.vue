<template>
  <router-link
    :to="{
      name: 'Segment',
      params: {
        slug: slug,
        segment: segmentSlug
      }
    }"
    class="badge-pill btn bg-white d-none d-lg-block HighwayButton"
    :class="`btn-outline-${color} ${hasProjects ? 'HighwayButton-hasProjects' : ''}`"
    :style="{ top: segment_button.btn.top, left: segment_button.btn.left }"
  >
    <div class="d-flex align-items-center" v-if="segment_button.icon_left">
      <svg class="icon"><use :xlink:href="'#icon-' + segment_button.segmentSlug"></use></svg>
      <div class="text-dark text-left ml-2">
        {{ segment_button.title }}
      </div>
    </div>
    <div class="d-flex align-items-center" v-else>
      <div class="text-dark text-right mr-2">
        {{ segment_button.title }}
      </div>
      <svg class="icon"><use :xlink:href="'#icon-' + segment_button.segmentSlug"></use></svg>
    </div>
  </router-link>
</template>

<script>
export default {
  /** Component name. */
  name: "HighwayButton",
  /** Recived props. */
  props: {
    segment_button: Object,
    slug: String,
    segmentSlug: String,
    color: String,
    hasProjects: Boolean
  }
};
</script>
