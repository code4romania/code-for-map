<template>
  <b-container fluid>
    <b-row>
      <b-col cols="12" lg="8">
        <router-link :to="{ name: 'Map' }">
          <img class="img-fluid" :src="code4ro_map.highway_bg.bg" />
        </router-link>
        <MapButton :highway="code4ro_map" />
        <div
          v-for="solution_button in code4ro_map.highway_solutions"
          :key="solution_button.id"
        >
          <HighwayButton :solution_button="solution_button" />
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import MapButton from "../components/map/MapButton";
import HighwayButton from "../components/map/HighwayButton";

export default {
  props: {
    data: {
      type: Object,
    },
  },
  components: {
    MapButton,
    HighwayButton,
  },
  data() {
    return {
      slug: this.$route.params.slug,
      code4ro_map: [],
    };
  },
  created() {
    this.code4ro_map = this.data.code4ro_map.find(
      (item) => item.slug == this.slug
    );
  },
};
</script>
