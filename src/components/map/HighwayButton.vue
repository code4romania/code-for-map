<template>
  <!-- Map highway segments button links -->
  <router-link
    :to="{
      name: 'Segment',
      params: {
        slug: slug,
        _slug: highway_slug
      }
    }"
    class="badge-pill btn bg-white scale btn-fade d-none d-lg-block HighwayButton"
    :class="`btn-outline-${color}`"
    :style="{ top: segment_button.btn.top, left: segment_button.btn.left }"
  >
    <div class="d-flex align-items-center" v-if="segment_button.icon_left">
      <svg class="icon"><use :xlink:href="'#icon-' + segment_button.highway_slug"></use></svg>
      <div class="text-dark text-left ml-2">
        {{ segment_button.title }}
      </div>
    </div>
    <div class="d-flex align-items-center" v-else>
      <div class="text-dark text-right mr-2">
        {{ segment_button.title }}
      </div>
      <svg class="icon"><use :xlink:href="'#icon-' + segment_button.highway_slug"></use></svg>
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
    highway_slug: String,
    color: String
  }
};
</script>
