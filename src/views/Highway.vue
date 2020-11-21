<template>
  <b-container fluid>
    <b-row>
      <!--###############################################
      ############# Map Legend displayed ################
      ############################################### -->
      <b-col cols="12" lg="3" class="pt-5">
        <div class="h-100 mr-lg-n5 d-flex flex-column justify-content-between">
          <!-- Complete header dispalyed from 1024px -->
          <Header :header="data.header" class="d-none d-lg-block" />
          <!-- Only the title from header displayed till 1024px -->
          <Title :title="data.header.title" class="d-block d-lg-none" />
          <!-- Map legend displayed from 1024px -->
          <Legend :legend="data.map_legend" class="d-none d-lg-block" />
        </div>
      </b-col>
      <!--###############################################
      ### Back to map link displayed till 10024px #######
      ############################################### -->
      <BackToMapLink class="mb-4 d-block d-lg-none" :back="data.back_link" />
      <!--###############################################
      ## Highway name and logo displayed till 10024px ###
      ############################################### -->
      <MobileHighwayNameAndLogo
        :logo="code4ro_map.logo"
        :title="code4ro_map.title"
        :description="code4ro_map.description"
        class="d-block d-lg-none"
      />
      <!-- Top delimitator -->
      <Delimiter :delimiter="code4ro_map.delimiter_1" class="mb-4" />
      <!--###############################################
      ######## Map Solutions desktop and mobiel #########
      ############################################### -->
      <b-col cols="12" lg="9">
        <div class="ml-lg-n5">
          <!--###############################################
          #### Highway Background displayed from 1024px #####
          ############################################### -->
          <router-link :to="{ name: 'Map' }" class="d-none d-lg-block">
            <img class="img-fluid w-100" :src="code4ro_map.highway_bg" />
          </router-link>
          <!--###############################################
          ################ Map Buttons ######################
          ############################################### -->
          <div v-for="highway in data.code4ro_map" :key="highway.slug">
            <!-- MapButton component displayed from 1024px -->
            <MapButton
              class="d-none d-lg-block"
              :highway="highway"
              :class="highway.slug !== slug ? 'btn-opacity' : ''"
              :top="highway.btn.top"
              :left="highway.btn.left"
            />
          </div>
          <!--###############################################
          ################ Highway solutions ################
          ############################################### -->
          <div
            v-for="solution_button in code4ro_map.highway_solutions"
            :key="solution_button.id"
          >
            <!-- Highway component with solutions button displayed from 1024px-->
            <HighwayButton
              class="d-none d-lg-block"
              :solution_button="solution_button"
              :color="code4ro_map.color"
            />

            <!-- Highway solutions displayed till 1024px -->
            <MobileHighwaySolutions
              class="d-block d-lg-none"
              :slug="code4ro_map.slug"
              :highway_slug="solution_button.highway_slug"
              :icon="solution_button.icon"
              :title="solution_button.title"
              :chevron="code4ro_map.chevron_right"
            />
          </div>
        </div>
      </b-col>
      <!-- Bottom delimitator -->
      <Delimiter :delimiter="code4ro_map.delimiter_2" class="mt-4" />
    </b-row>
  </b-container>
</template>

<script>
/** Imported components. */
import MapButton from "../components/map/MapButton";
import HighwayButton from "../components/map/HighwayButton";
import Header from "../components/header/Header";
import Title from "../components/header/Title";
import Legend from "../components/map/Legend";
import BackToMapLink from "../components/BackToMapLink";
import MobileHighwayNameAndLogo from "../components/MobileHighwayNameAndLogo";
import MobileHighwaySolutions from "../components/MobileHighwaySolutions";
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
    Header,
    Title,
    Legend,
    BackToMapLink,
    MobileHighwayNameAndLogo,
    MobileHighwaySolutions,
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
  }
};
</script>

<style>
.btn-opacity {
  opacity: 0.5;
}
</style>
