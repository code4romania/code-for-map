<template>
  <b-container fluid>
    <b-row>
      <!-- Map Legend displayed till 1024px-->
      <b-col cols="12 d-block d-xl-none">
        <h1 class="my-3">{{ data.header.title }}</h1>
        <BackToMapLink class="mb-4 d-block d-xl-none" :back="data.back_link" />
      </b-col>
    </b-row>
    <!-- Highway name and logo till 1024px -->
    <b-row class="d-block d-xl-none">
      <b-col cols="7" class="mb-4 d-flex align-items-center">
        <img width="80px" :src="code4ro_map.logo" />
        <h2 class="ml-2">{{ code4ro_map.title }}</h2>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12">
        <div class="d-flex justify-content-center align-items-start">
          <img width="150px" :src="solution.icon" />
          <router-link :to="{ name: 'Highway', params: { slug: slug } }"
            >X
          </router-link>
        </div>
        <div>
          <h2
            class="text-center font-weight-light py-3"
            :class="`text-${code4ro_map.color}`"
          >
            {{ solution.title }}
          </h2>
          <p>{{ solution.description }}</p>
        </div>
      </b-col>
    </b-row>
    <!-- Solution Status -->
    <SolutionStatus :status="code4ro_map" />
    <!-- Solution projects -->
    <ProjectsList :solution="solution" />
  </b-container>
</template>

<script>
/** Imported components */
import BackToMapLink from "../components/BackToMapLink";
import SolutionStatus from "../components/map/SolutionStatus";
import ProjectsList from "../components/map/ProjectsList";

export default {
  name: "Solution",
  props: {
    data: {
      type: Object
    }
  },
  components: {
    BackToMapLink,
    SolutionStatus,
    ProjectsList
  },
  data() {
    return {
      slug: this.$route.params.slug,
      highway_slug: this.$route.params._slug,
      code4ro_map: [],
      solution: []
    };
  },
  /** Vue mounted life cycle initialize data for this route. */
  created() {
    this.code4ro_map = this.data.code4ro_map.find(
      item => item.slug == this.slug
    );
    this.solution = this.code4ro_map.highway_solutions.find(
      item => item.highway_slug == this.highway_slug
    );
  }
};
</script>
<style></style>
