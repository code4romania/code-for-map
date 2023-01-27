<template>
  <div class="MapContainer-wrap">
    <div class="MapContainer">
      <img
        class="w-100 h-100"
        :src="page.components[0].background_highways.url"
      >
    </div>

    <template v-for="highway in page.components[0].highways">
      <MapButton
        :key="'map-btn-xl-' + highway.id"
        :highway="highway"
        :top="highway.position_desktop.top"
        :left="highway.position_desktop.left"
        class="d-none d-md-block"
      />
      <MapButton
        :key="'map-btn-' + highway.id"
        :highway="highway"
        :top="highway.position.top"
        :left="highway.position.left"
        class="d-md-none"
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
    page: {
      type: Object,
      default: () => {},
    },
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
