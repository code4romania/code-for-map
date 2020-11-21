<template>
  <div>
    <!--###############################################
    ## Highway name and logo displayed till 1024px ###
    ############################################### -->
    <MobileHighwayNameAndLogo
      :logo="code4ro_map.logo"
      :title="code4ro_map.title"
      :description="code4ro_map.description"
    />

    <!--###############################################
    ######## Map Solutions desktop and mobile #########
    ############################################### -->
    <div class="Highway">
      <!--###############################################
      #### Highway Background displayed from 1024px #####
      ############################################### -->
      <router-link :to="{ name: 'Map' }" class="d-none d-lg-block">
        <img class="img-fluid w-100" :src="code4ro_map.highway_bg" />
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
      ################ Highway solutions ################
      ############################################### -->
      <template v-for="solution_button in code4ro_map.highway_solutions">
        <!-- Highway component with solutions button displayed from 1024px-->
        <HighwayButton
          :solution_button="solution_button"
          :color="code4ro_map.color"
          v-bind:key="'highway-btn-lg-' + solution_button.id"
        />

        <!-- Highway solutions displayed till 1024px -->
        <SegmentButton
          :slug="code4ro_map.slug"
          :highway_slug="solution_button.highway_slug"
          :icon="solution_button.icon"
          :title="solution_button.title"
          :chevron="code4ro_map.chevron_right"
          v-bind:key="'highway-btn-' + solution_button.id"
        />
      </template>
    </div>
    <!-- Bottom delimitator -->
    <Delimiter :delimiter="code4ro_map.delimiter_2" class="mt-4" />
  </div>
</template>

<script>
/** Imported components. */
import MapButton from "../components/map/MapButton";
import HighwayButton from "../components/map/HighwayButton";
import MobileHighwayNameAndLogo from "../components/map/MobileHighwayNameAndLogo";
import SegmentButton from "../components/map/SegmentButton";
import Delimiter from "../components/Delimiter";

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
    MobileHighwayNameAndLogo,
    SegmentButton,
    Delimiter
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

    this.data.back_link.visible = true;
  }
};
</script>

<style>
.btn-opacity {
  opacity: 0.5;
}
</style>
