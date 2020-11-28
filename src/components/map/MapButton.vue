<template>
  <div
    class="MapButton-wrap"
    :style="{ top: top, left: left }"
  >
    <!-- Main map button links to highway -->
    <router-link
      :to="{ name: 'Highway', params: { slug: highway.slug } }"
      class="badge-pill btn bg-white scale MapButton"
      :class="[`btn-outline-${highway.color}`, $route.name != 'Map' ? 'btn-opacity' : '']"
    >
      <div class="d-flex align-items-center">
        <svg class="icon"><use :xlink:href="'#logo-' + highway.slug" /></svg>
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
    highway: {
      type: Object,
      default: () => {}
    },
    top: {
      type: String,
      default: ""
    },
    left: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: ""
    }
  }
};
</script>

<style>
.btn-opacity {
  opacity: 0.35;
}
.btn-opacity:hover,
.router-link-active {
  opacity: 1;
}
</style>