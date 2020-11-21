<template>
  <b-container fluid>
    <b-row>
      <!-- Map Legend -->
      <b-col cols="12" xl="3" class="pt-5">
        <div class="d-flex flex-column justify-content-between">
          <Header :header="data.header" />
          <Legend class="d-none d-md-block" :legend="data.map_legend" />
        </div>
      </b-col>
      <b-col cols="12" xl="9">
        <div class="MapContainer-wrap">
          <div class="MapContainer">
            <!-- Map background -->
            <img class="img-fluid" :src="data.map_bg" />
            <!-- Display map buttons on map -->
            <div v-for="highway in data.code4ro_map" :key="highway.id">
              <!-- MapButton component -->
              <MapButton :highway="highway" />
            </div>
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
/** Import components. */
import MapButton from "../components/map/MapButton";
import Header from "../components/Header";
import Legend from "../components/map/Legend";

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
    MapButton,
    Header,
    Legend
  }
};
</script>
