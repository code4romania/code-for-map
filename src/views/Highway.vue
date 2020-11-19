<template>
  <b-container fluid>
    <b-row>
      <!-- Map Legend -->
      <b-col cols="12" lg="3" class="pt-5">
        <div class="h-100 mr-lg-n5 d-flex flex-column justify-content-between">
          <Header :header="data.header" />
          <Legend :legend="data.map_legend" />
        </div>
      </b-col>
      <b-col cols="12" lg="9">
        <div class="ml-lg-n5">
          <!-- Highway background as a link to main map -->
          <router-link :to="{ name: 'Map' }">
            <img class="img-fluid w-100" :src="code4ro_map.highway_bg" />
          </router-link>
          <!-- MapButton component -->
          <!-- <MapButton :highway="code4ro_map" /> -->
          <!-- Highway solutions buttons -->
          <!-- Display map buttons on map -->
          <div v-for="highway in data.code4ro_map" :key="highway.slug">
            <!-- MapButton component -->
            <MapButton
              :highway="highway"
              :class="highway.slug !== slug ? 'btn-opacity' : ''"
            />
          </div>
          <div
            v-for="solution_button in code4ro_map.highway_solutions"
            :key="solution_button.id"
          >
            <!-- Highway component -->
            <HighwayButton :solution_button="solution_button" />
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
/** Imported components. */
import MapButton from "../components/map/MapButton";
import HighwayButton from "../components/map/HighwayButton";
import Header from "../components/Header";
import Legend from "../components/map/Legend";

export default {
  /** Component name. */
  name: "Highway",
  /** Recived props */
  props: {
    data: {
      type: Object
    }
  },
  /** Registered components */
  components: {
    MapButton,
    HighwayButton,
    Header,
    Legend
  },
  /** Component state. */
  data() {
    return {
      slug: this.$route.params.slug,
      code4ro_map: []
    };
  },
  /** Vue created life cycle initialize data for this route. */
  mounted() {
    this.code4ro_map = this.data.code4ro_map.find(
      item => item.slug == this.slug
    );
  }
};
</script>

<style>
.btn-opacity {
  opacity: 0.5;
}
</style>
