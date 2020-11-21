<template>
  <b-container fluid>
    <b-row>
      <!-- Map Legend -->
      <b-col cols="12" lg="3" class="pt-5">
        <div class="h-100 mr-lg-n5 d-flex flex-column justify-content-between">
          <Header :header="data.header" />
          <Legend class="d-none d-lg-block" :legend="data.map_legend" />
        </div>
      </b-col>
      <b-col cols="12" lg="9" class="p-0 m-0">
        <div class="ml-lg-n5">
          <!-- Map background displayed from 768px -->
          <img class="img-fluid d-none d-md-block" :src="data.map_bg" />
          <!-- Map background displayed till 768px -->
          <img class="img-fluid d-block d-md-none" :src="data.map_bg_mobile" />
          <!-- Display map buttons on map -->
          <div v-for="highway in data.code4ro_map" :key="highway.id">
            <!-- MapButton component displayed from 1024px -->
            <MapButton
              :highway="highway"
              :top="highway.btn.top"
              :left="highway.btn.left"
              class="d-none d-md-block"
            />
            <!-- Mapbutton component displayed till 768px -->
            <MapButton
              :highway="highway"
              :top="highway.mobile_btn.top"
              :left="highway.mobile_btn.left"
              class="d-block d-md-none"
            />
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
/** Import components. */
import MapButton from "../components/map/MapButton";
import Header from "../components/header/Header";
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
