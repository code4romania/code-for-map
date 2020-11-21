<template>
  <b-container fluid>
    <b-row>
      <!-- Map Legend displayed from 1024px-->
      <b-col cols="12" xl="3" class="pt-5 d-none d-md-block">
        <div class="d-flex flex-column justify-content-between">
          <Header :header="data.header" />
          <Legend :legend="data.map_legend" />
        </div>
      </b-col>
      <!-- Map Legend displayed till 1024px-->
      <b-col cols="12 d-block d-md-none">
        <h1 class="my-3">{{ data.header.title }}</h1>
      </b-col>
      <b-col cols="12" xl="9">
        <div class="MapContainer">
          <!-- Highway background as a link to main map displayed from 1024px -->
          <router-link :to="{ name: 'Map' }" class="d-none d-md-block">
            <img class="img-fluid w-100" :src="code4ro_map.highway_bg" />
          </router-link>
          <!-- Display map buttons on map displayed from 1024px-->
          <div v-for="highway in data.code4ro_map" :key="highway.slug">
            <!-- MapButton component displayed from 1024px -->
            <MapButton
              class="d-none d-md-block"
              :highway="highway"
              :class="highway.slug !== slug ? 'btn-opacity' : ''"
            />
          </div>
          <!-- Back to map link displayed till 1024px -->
          <BackToMapLink
            class="mb-4 d-block d-md-none"
            :back="data.back_link"
          />
          <!-- Highway name and logo till 1024px -->
          <b-row class="d-block d-md-none">
            <b-col cols="7" class="mb-4 d-flex align-items-center">
              <img width="80px" :src="code4ro_map.logo" />
              <h2 class="ml-2">{{ code4ro_map.title }}</h2>
            </b-col>
            <b-col cols="12" class="mb-4">
              <p>{{ code4ro_map.description }}</p>
            </b-col>
          </b-row>
          <!-- Highway solutions -->
          <div
            v-for="solution_button in code4ro_map.highway_solutions"
            :key="solution_button.id"
          >
            <!-- Highway component with solutions button displayed from 1024px-->
            <HighwayButton
              class="d-none d-md-block"
              :solution_button="solution_button"
            />
            <!-- Highway solutions displayed till 1024px -->
            <b-row class="d-block d-md-none">
              <b-col cols="12" class="p-0 m-0">
                <router-link
                  :to="{
                    name: 'Solution',
                    params: {
                      slug: code4ro_map.slug,
                      _slug: solution_button.highway_slug
                    }
                  }"
                >
                  <div
                    class="d-flex align-items-center justify-content-between border-top last-child-border py-3"
                  >
                    <div class="d-flex align-items-center pl-3">
                      <img :src="solution_button.icon" alt="" />
                      <p class="p-0 m-0 pl-2 pl-md-3">
                        {{ solution_button.title }}
                      </p>
                    </div>
                    <!-- Chevron left displayed till 1024px -->
                    <h1
                      class="px-3 font-weight-bold"
                      :class="`text-${solution_button.btn.color}`"
                    >
                      &#62;
                    </h1>
                  </div>
                </router-link>
              </b-col>
            </b-row>
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
import BackToMapLink from "../components/BackToMapLink";

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
    Legend,
    BackToMapLink
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
.last-child-border:last-child {
  border-bottom: 1px solid #ddd;
}
</style>
