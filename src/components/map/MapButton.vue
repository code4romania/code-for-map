<template>
  <div class="MapButton-wrap" :style="{ top: top, left: left }">
    <!-- Main map button links to highway -->
    <router-link
      :to="{ name: 'Highway', params: { slug: highway.slug } }"
      class="badge-pill btn bg-white MapButton"
      :class="`btn-outline-${highway.color}`"
    >
      <div class="d-flex align-items-center">
        <svg class="icon"><use :xlink:href="'#logo-' + highway.slug"></use></svg>
        <div class="text-dark font-weight-bold text-left d-block ml-2 MapButton-label">
          {{ highway.title }}
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  /** Component name. */
  name: "MapButton",
  /** Recived props. */
  props: {
    highway: Object,
    top: String,
    left: String,
    color: String
  }
};
</script>
