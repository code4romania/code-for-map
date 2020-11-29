<template>
  <div class="MapContainer-wrap">
    <div class="MapContainer">
      <img
        class="w-100 h-100"
        src="../assets/svg/illustrations/map-color.svg"
      >
    </div>

    <template v-for="highway in data.code4ro_map">
      <MapButton
        :key="'map-btn-xl-' + highway.id"
        :highway="highway"
        :top="highway.btn.top"
        :left="highway.btn.left"
        class="d-none d-md-block"
      />
      <MapButton
        :key="'map-btn-' + highway.id"
        :highway="highway"
        :top="highway.mobile_btn.top"
        :left="highway.mobile_btn.left"
        class="d-md-none"
      />
    </template>
  </div>
</template>

<script>
import postMessage from "../utils/postMessage";
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
    postMessage({ height: document.documentElement.scrollHeight });

    this.data.back_to_map.visible = false;
  },
};
</script>
