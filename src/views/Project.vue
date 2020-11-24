<template>
  <b-container fluid>
    <b-row>
      <!--###############################################
      ## Highway name and logo displayed till 10024px ###
      ############################################### -->
      <HighwayHeader
        :logo="code4ro_map.slug"
        :title="code4ro_map.title"
        class="d-block d-lg-none"
      />
      <!--###############################################
      ################### Delimiter #####################
      ############################################### -->
      <Delimiter :delimiter="code4ro_map.delimiter_1" class="mb-5" />
    </b-row>
    <!--###############################################
      ############ Back to segment page ##############
      ############################################### -->
    <b-row>
      <b-col cols="12">
        <router-link
          :to="{
            name: 'Segment',
            params: { slug: slug, _slug: highway_slug }
          }"
        >
          <div class="d-flex align-items-center justify-content-between">
            <div class="d-flex align-items-center">
              <img class="img-fluid" width="60px" :src="segment.icon" alt="" />
              <div class="d-flex flex-column ml-2">
                <p
                  class="p-0 m-0 small font-weight-light"
                  :class="`text-${code4ro_map.color}`"
                >
                  {{ code4ro_map.all_solution_text }}
                </p>
                <p
                  class="p-0 m-0 font-weight-light"
                  :class="`text-${code4ro_map.color}`"
                >
                  {{ segment.title }}
                </p>
              </div>
            </div>
            <img :src="code4ro_map.chevron_right" alt="" />
          </div>
        </router-link>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12" class="my-3">
        <div class="border p-3">
          <b-row>
            <b-col
              cols="5"
              class="d-flex align-items-center justify-content-end"
            >
              <img class="img-flui" width="60px" :src="project.icon" alt="" />
            </b-col>
            <b-col cols="7" class="d-flex align-items-center pl-0 ml-0">
              <p class="p-0 m-0 display-2 text-uppercase">
                {{ project.title }}
              </p>
            </b-col>
          </b-row>
        </div>
      </b-col>
      <b-col cols="12">
        <h3>{{ project.title }}</h3>
      </b-col>
      <b-col cols="12" class="my-3">
        <a :href="project.link" class="d-flex align-items-center">
          <svg class="icon"><use xlink:href="#open"></use></svg>
          <p class="p-0 m-0 ml-2">{{ code4ro_map.vezi_solutia_text }}</p>
        </a>
      </b-col>
      <b-col cols="12">
        <p>{{ project.description }}</p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
/** Imported compoents */
import HighwayHeader from "../components/map/HighwayHeader";
import Delimiter from "../components/Delimiter";

export default {
  /** Component name */
  name: "Project",
  /** Recived props */
  props: {
    data: {
      type: Object
    }
  },
  components: {
    HighwayHeader,
    Delimiter
  },
  data() {
    return {
      slug: this.$route.params.slug,
      highway_slug: this.$route.params._slug,
      project_slug: this.$route.params.__slug,
      code4ro_map: [],
      segment: [],
      project: []
    };
  },
  /** Vue mounted life cycle initialize data for this route. */
  created() {
    this.code4ro_map = this.data.code4ro_map.find(
      item => item.slug == this.slug
    );
    this.segment = this.code4ro_map.highway_segment.find(
      item => item.highway_slug == this.highway_slug
    );
    this.project = this.segment.projects.find(
      item => item.project_slug == this.project_slug
    );
  }
};
</script>

<style></style>
