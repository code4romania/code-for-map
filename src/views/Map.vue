<template>
  <!-- padding height image ratio (h/w) -->
  <div
    class="relative h-0 w-full"
    :style="{ 'padding-bottom': (526/748) * 100 + '%'}"
  >
    <div>
      <img
        class="w-full h-full"
        src="../assets/svg/illustrations/map-color.svg"
      >
    </div>

    <template v-for="highway in data.code4ro_map">
      <MapButton
        :key="'map-btn-xl-' + highway.id"
        :highway="highway"
        :top="highway.btn.top"
        :left="highway.btn.left"
        class="hidden lg:block"
      />
      <MapButton
        :key="'map-btn-' + highway.id"
        :highway="highway"
        :top="highway.mobile_btn.top"
        :left="highway.mobile_btn.left"
        class="lg:hidden"
      />
    </template>
  </div>
</template>

<script>
import { postMessageHeight } from "../utils/postMessage";
import MapButton from "../components/map/MapButton";

export default {
  /** Component name. */
  name: "Map",
  /** Registered components. */
  components: {
    MapButton,
  },
  /** Recived props. */
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
  mounted() {
    postMessageHeight();

    this.data.back_to_map.visible = false;
  },
};
</script>
