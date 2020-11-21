<template>
  <div class="MapButton-wrap" :style="{ top: top, left: left }">
    <!-- Main map button links to highway -->
    <router-link
      :to="{ name: 'Highway', params: { slug: highway.slug } }"
      class="badge-pill btn bg-white scale MapButton"
      :class="`btn-outline-${highway.color}`"
    >
      <div class="d-flex align-items-center">
        <img class="img mr-2 MapButton-icon" :src="highway.logo" />
        <p
          class="small text-dark font-weight-bold p-0 m-0 text-left d-block MapButton-label"
        >
          {{ highway.title }}
        </p>
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
