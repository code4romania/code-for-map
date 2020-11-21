<template>
  <b-container fluid>
    <b-row>
      <b-col cols="12" xl="9" class="p-0 m-0">
        <div class="ml-xl-n5">
          <img class="img-fluid" :src="data.map_bg" />
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
