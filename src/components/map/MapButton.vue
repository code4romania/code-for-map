<template>
  <div
    class="MapButton-wrap"
    :style="{ top: top, left: left }"
  >
    <!-- Main map button links to highway -->
    <router-link
      :to="{ name: 'Highway', params: { slug: highway.slug }, hash: '#map' }"
      class="badge-pill btn bg-white scale MapButton"
      :class="[
        `btn-outline-${highway.color}`,
        $route.name != 'Map' ? 'btn-opacity' : '',
      ]"
    >
      <div
        class="d-flex align-items-center"
        @click="updateIframe()"
      >
        <img
          class="icon"
          :src="require(`../../assets/svg/icons/logo-${highway.slug}.svg`)"
        >
        <div
          class="text-dark font-weight-bold text-left d-block ml-2 MapButton-label"
        >
          {{ highway.title }}
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import { postMessageHeight } from "../../utils/postMessage";

export default {
  name: "MapButton",
  props: {
    highway: {
      type: Object,
      default: () => {},
    },
    top: {
      type: String,
      default: "",
    },
    left: {
      type: String,
      default: "",
    },
    color: {
      type: String,
      default: "",
    },
  },
  methods: {
    updateIframe() {
      postMessageHeight();
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
