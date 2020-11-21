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
        class="d-block d-lg-none"
      />
      <!--###############################################
      ################### Delimiter #####################
      ############################################### -->
      <Delimiter :delimiter="code4ro_map.delimiter_1" class="mb-5" />
      <!--###############################################
      ### Solution description displayed till 10024px ###
      ############################################### -->
      <MobileSolutionDescription
        :icon="solution.icon"
        :slug="slug"
        :color="code4ro_map.color"
        :title="solution.title"
        :description="solution.description"
        :close="code4ro_map.close_icon"
      />
    </b-row>
    <!--###############################################
    ################### Delimiter #####################
    ############################################### -->
    <b-row>
      <Delimiter :delimiter="code4ro_map.delimiter_1" class="mb-5" />
    </b-row>
    <!--###############################################
    ################## Solution Status ################
    ############################################### -->
    <SolutionStatus :status="code4ro_map" />
    <!--###############################################
    ################### Delimiter #####################
    ############################################### -->
    <b-row>
      <Delimiter :delimiter="code4ro_map.delimiter_2" class="mt-5 mb-3" />
    </b-row>
    <!--###############################################
    ################# Solution Projects ###############
    ############################################### -->
    <b-row
      v-for="project in solution.projects"
      :key="project.id"
      class="border-top border-bottom"
    >
      <ProjectsList
        :slug="slug"
        :highway_slug="highway_slug"
        :project_slug="project.project_slug"
        :executed="project.executed"
        :color="code4ro_map.color"
        :title="project.title"
        :chevron="code4ro_map.chevron_right_dark"
      />
    </b-row>
    <!--###############################################
    ################### Delimiter #####################
    ############################################### -->
    <b-row>
      <Delimiter :delimiter="code4ro_map.delimiter_2" class="mt-5 mb-3" />
    </b-row>
  </b-container>
</template>

<script>
/** Imported components */
import Header from "../components/header/Header";
import Title from "../components/header/Title";
import Legend from "../components/map/Legend";
import MobileHighwayNameAndLogo from "../components/MobileHighwayNameAndLogo";
import BackToMapLink from "../components/BackToMapLink";
import Delimiter from "../components/Delimiter";
import MobileSolutionDescription from "../components/MobileSolutionDescription";
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
    Header,
    Title,
    Legend,
    MobileHighwayNameAndLogo,
    BackToMapLink,
    Delimiter,
    MobileSolutionDescription,
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
  /** Vue created life cycle initialize data for this route. */
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
