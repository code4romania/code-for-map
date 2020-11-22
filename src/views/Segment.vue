<template>
  <b-container fluid>
    <b-row>
      <Title :title="data.header.title" class="d-block d-lg-none" />
      <!--###############################################
      ## Highway name and logo displayed till 10024px ###
      ############################################### -->
      <HighwayHeader
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
      <SegmentHeader
        :icon="segment.icon"
        :slug="slug"
        :color="code4ro_map.color"
        :title="segment.title"
        :description="segment.description"
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
      v-for="project in segment.projects"
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
import HighwayHeader from "../components/map/HighwayHeader";
import Delimiter from "../components/Delimiter";
import SegmentHeader from "../components/map/SegmentHeader";
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
    HighwayHeader,
    Delimiter,
    SegmentHeader,
    SolutionStatus,
    ProjectsList
  },
  data() {
    return {
      slug: this.$route.params.slug,
      highway_slug: this.$route.params._slug,
      code4ro_map: [],
      segment: []
    };
  },
  /** Vue created life cycle initialize data for this route. */
  created() {
    this.code4ro_map = this.data.code4ro_map.find(
      item => item.slug == this.slug
    );
    this.segment = this.code4ro_map.highway_segment.find(
      item => item.highway_slug == this.highway_slug
    );
  }
};
</script>
