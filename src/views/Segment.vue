<template>
  <div>
    <div class="Segment d-lg-none">
      <HighwayHeader
        :logo="code4ro_map.slug"
        :title="code4ro_map.title"
        class="d-block d-lg-none"
      />

      <Delimiter :delimiter="code4ro_map.delimiter_1" />

      <SegmentHeader
        :icon="segment.highway_slug"
        :slug="slug"
        :color="code4ro_map.color"
        :title="segment.title"
        :description="segment.description"
      />

      <Delimiter :delimiter="code4ro_map.delimiter_1" />

      <SegmentLegend :status="data.segment_legend" :color="code4ro_map.color" />

      <Delimiter :delimiter="code4ro_map.delimiter_2" />

      <ProjectsList
        :list="segment.projects"
        :slug="slug"
        :highway_slug="highway_slug"
        :color="code4ro_map.color"
      />

      <Delimiter :delimiter="code4ro_map.delimiter_2" />
    </div>
    <div class="Segment d-none d-lg-block">
      <div class="SegmentVisual-wrap my-4">
        <router-link
          :to="{ name: 'Highway', params: { slug: slug } }"
          class="SegmentVisual-close"
        >
          <svg class="icon icon-sm"><use xlink:href="#close"></use></svg>
        </router-link>
        <div class="SegmentVisual">
          <svg class="segment">
            <use :xlink:href="'#' + segment.segment_visual"></use>
          </svg>
        </div>
        <!-- Modal -->
        <div class="d-none d-lg-block">
          <div v-for="(project, index) in segment.projects" :key="index">
            <a
              :style="{
                position: 'absolute',
                top: project.position.top,
                left: project.position.left,
              }"
              :id="project.id"
              @click="projectClicked(index)"
              >{{ project.title }}</a
            >
          </div>
        </div>
        <b-modal ref="myModal" size="lg" centered hide-header hide-footer>
          <div>
            {{ this.segment.projects[this.active_project_index].title }}
            <p @click="next">next</p>
             <p @click="previous">prev</p>
          </div>
        </b-modal>
      </div>
    </div>
  </div>
</template>

<script>
/** Imported components */
import HighwayHeader from "../components/map/HighwayHeader";
import Delimiter from "../components/Delimiter";
import SegmentHeader from "../components/map/SegmentHeader";
import SegmentLegend from "../components/map/SegmentLegend";
import ProjectsList from "../components/map/ProjectsList";

export default {
  name: "Solution",
  props: {
    data: {
      type: Object,
    },
  },
  components: {
    HighwayHeader,
    Delimiter,
    SegmentHeader,
    SegmentLegend,
    ProjectsList,
  },
  data() {
    return {
      slug: this.$route.params.slug,
      highway_slug: this.$route.params._slug,
      code4ro_map: [],
      segment: [],
      active_project_index: 0,
    };
  },
  /** Vue created life cycle initialize data for this route. */
  created() {
    this.code4ro_map = this.data.code4ro_map.find(
      (item) => item.slug == this.slug
    );
    this.segment = this.code4ro_map.highway_segment.find(
      (item) => item.highway_slug == this.highway_slug
    );

    this.data.back_link.visible = true;
  },
  methods: {
    projectClicked(index) {
      this.active_project_index = index;
      this.$refs.myModal.show();
    },
    next() {
      if (this.active_project_index === this.segment.projects.length - 1) {
        this.active_project_index = 0;
      } else {
        this.active_project_index++;
      }
    },
    previous() {
      if (0 === this.active_project_index) {
        this.active_project_index = this.segment.projects.length - 1;
      } else {
        this.active_project_index--;
      }
    },
  },
};
</script>
