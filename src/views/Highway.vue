<template>
  <div>
    <!--###############################################
    ## Highway name and logo displayed till 1024px ###
    ############################################### -->
    <HighwayHeader
      :logo="code4ro_map.slug"
      :title="code4ro_map.title"
      :description="code4ro_map.description"
    />

    <!--###############################################
    ######## Map Solutions desktop and mobile #########
    ############################################### -->
    <!-- TODO:fix small viewport to large viewport containers when doing maps layering -->
    <div class="MapContainer-wrap">
      <div class="MapContainer">
        <div class="Highway">
          <!--###############################################
          #### Highway Background displayed from 1024px #####
          ############################################### -->
          <div class="MapContainer d-none d-lg-block">
            <svg class="w-100 h-100"><use xlink:href="#map-bw"></use></svg>
          </div>

          <router-link :to="{ name: 'Map' }" class="d-none d-lg-block">
            <div class="MapContainer">
              <svg class="w-100 h-100"><use :xlink:href="'#' + code4ro_map.highway_bg"></use></svg>
            </div>
          </router-link>

          <!--###############################################
          ################ Map Buttons ######################
          ############################################### -->
          <template v-for="highway in data.code4ro_map">
            <!-- MapButton component displayed from 1024px -->
            <MapButton
              class="d-none d-lg-block"
              :highway="highway"
              :class="highway.slug !== slug ? 'btn-opacity' : ''"
              :top="highway.btn.top"
              :left="highway.btn.left"
              v-bind:key="highway.slug"
            />
          </template>
          <!--###############################################
          ################ Highway segments ################
          ############################################### -->
          <template v-for="segment_button in code4ro_map.highway_segment">
            <!-- Highway component with segments button displayed from 1024px-->
            <HighwayButton
              :slug="code4ro_map.slug"
              :highway_slug="segment_button.highway_slug"
              :segment_button="segment_button"
              :color="code4ro_map.color"
              v-bind:key="'highway-btn-lg-' + segment_button.id"
            />

            <!-- Highway segments displayed till 1024px -->
            <SegmentButton
              :slug="code4ro_map.slug"
              :highway_slug="segment_button.highway_slug"
              :title="segment_button.title"
              v-bind:key="'highway-btn-' + segment_button.id"
            />
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/** Imported components. */
import MapButton from "../components/map/MapButton";
import HighwayButton from "../components/map/HighwayButton";
import HighwayHeader from "../components/map/HighwayHeader";
import SegmentButton from "../components/map/SegmentButton";

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
    HighwayHeader,
    SegmentButton
  },
  /** Component state. */
  data() {
    return {
      slug: this.$route.params.slug,
      code4ro_map: []
    };
  },
  /** Vue mounted life cycle initialize data for this route. */
  mounted() {
    this.code4ro_map = this.data.code4ro_map.find(
      item => item.slug == this.slug
    );

    this.data.back_to_map.visible = true;
  },
  watch: {
    $route(to, from) {
      if(this.slug != to) {
        this.code4ro_map = this.data.code4ro_map.find(
        item => item.slug == to.params.slug
        );
      }
    }
  }

};
</script>

<style>
.btn-opacity {
  opacity: 0.5;
}
.btn-opacity:hover {
  opacity: 1;
}
</style>
