<template>
  <div class="MapContainer-wrap">
    <div class="MapContainer">
      <img class="img-fluid" :src="data.map_bg" />
    </div>

    <!-- Display map buttons on map -->
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
/** Import components. */
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
    this.data.back_link.visible = false;
  }
};
</script>
