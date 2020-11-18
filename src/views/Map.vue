<template>
  <b-container fluid>
    <b-row>
      <b-col cols="12" lg="8">
        <img class="img-fluid" :src="data.map_bg" />
        <!-- Display map buttons on map -->
        <div v-for="highway in data.code4ro_map" :key="highway.id">
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
  name: "Map",
  props: {
    data: {
      type: Object,
    },
  },
  /** Register components. */
  components: {
    MapButton,
  },
};
</script>
