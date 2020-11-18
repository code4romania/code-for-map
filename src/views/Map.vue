<template>
  <b-container fluid>
    <b-row>
      <b-col cols="12" lg="2">legenda</b-col>
      <b-col cols="12" lg="10">
        <!-- Map background -->
        <img class="img-fluid" :src="data.map_bg" />
        <!-- Display map buttons on map -->
        <div v-for="highway in data.code4ro_map" :key="highway.id">
          <!-- MapButton component -->
          <MapButton :highway="highway" />
        </div>
      </b-col>
    </b-row>
  </b-container>
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
  }
};
</script>
