<template>
  <div class="MapContainer-wrap">
    <div class="MapContainer">
      <svg class="w-100 h-100"><use xlink:href="#map-color"></use></svg>
    </div>

    <template v-for="highway in data.code4ro_map">
      <MapButton
        :highway="highway"
        :top="highway.btn.top"
        :left="highway.btn.left"
        class="d-none d-md-block"
        v-bind:key="'map-btn-xl-' + highway.id"
      />
      <MapButton
        :highway="highway"
        :top="highway.mobile_btn.top"
        :left="highway.mobile_btn.left"
        class="d-md-none"
        v-bind:key="'map-btn-' + highway.id"
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
  /** Recived props. */
  props: {
    data: {
      type: Object
    }
  },
  /** Registered components. */
  components: {
    MapButton
  },
  mounted() {
    this.data.back_to_map.visible = false;

    postMessage({ height: document.body.scrollHeight });
  }
};
</script>
