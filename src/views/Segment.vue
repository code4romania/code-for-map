<template>
  <div>
    <div class="Segment d-lg-none">
      <HighwayHeader
        :logo="code4ro_map.slug"
        :title="code4ro_map.title"
        class="d-block d-lg-none"
      />

      <SegmentHeader
        :icon="segment.segmentSlug"
        :slug="slug"
        :color="code4ro_map.color"
        :title="segment.title"
        :description="segment.description"
      />

      <SegmentLegend :status="data.segment_legend" :color="code4ro_map.color" />

      <div class="ProjectsList" v-if="segment.projects.length">
        <template v-for="(project, index) in segment.projects">
          <a class="d-flex align-items-center justify-content-between ListItem"
            v-bind:key="'project-' + index"
            :id="project.id"
            @click="projectClicked(index)"
          >
              <i class="icon icon-circle" :class="'border-' + code4ro_map.color"></i>
              <div class="flex-fill mx-2">{{project.title}}</div>
              <svg class="icon"><use xlink:href="#chevron-right"></use></svg>
          </a>
        </template>
      </div>
    </div>

    <div class="Segment d-none d-lg-block">

      <div class="SegmentVisual-wrap mt-4">
        <router-link
          :to="{ name: 'Highway', params: { slug: slug } }"
          class="SegmentVisual-close"
        >
          <svg class="icon icon-md"><use xlink:href="#close"></use></svg>
        </router-link>
        <div class="SegmentVisual">
          <svg class="segment">
            <use :xlink:href="'#' + segment.segment_visual"></use>
          </svg>
        </div>
      </div>

      <div class="Segment-info d-none d-lg-block">
        <b-row>
          <b-col cols="8" offset="4">
            <div class="lead" v-html="segment.description" />
          </b-col>
        </b-row>
      </div>

    </div>
  </div>
</template>

<script>
import postMessage from "../utils/postMessage";

import HighwayHeader from "../components/map/HighwayHeader";
import SegmentHeader from "../components/map/SegmentHeader";
import SegmentLegend from "../components/map/SegmentLegend";

export default {
  name: "Segment",
  props: {
    data: {
      type: Object,
    },
  },
  components: {
    HighwayHeader,
    SegmentHeader,
    SegmentLegend,
  },
  data() {
    return {
      slug: this.$route.params.slug,
      segmentSlug: this.$route.params.segment,
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
    this.segment = this.code4ro_map.highway_segments.find(
      (item) => item.segmentSlug == this.segmentSlug
    );

    this.data.back_to_map.visible = true;
  },
  mounted() {
    postMessage({ height: document.body.scrollHeight });

    const projects = document.getElementsByClassName('btn-project');

    projects.forEach(project => {
      project.addEventListener('click', () => {
        this.projectClicked(parseInt(project.getAttribute('projectid'), 10))
      })
    })

    if (this.$route.params.solution) {
      this.$refs.modalProject.show()
    }
  },
  methods: {
    projectClicked(index) {
      // TODO: FIX PROJECT SELECTION BUG HERE
      this.active_project_index = index - 1;

      this.$refs.modalProject.show();

      // this.$router.push({ name: 'Project', params: {
      //   slug: 'participation4ro',
      //   segment: 'acces-la-cultura',
      //   solution: 'theater-hub'
      // }})
    },
    hideModal() {
      this.$refs.modalProject.hide();

      // this.$router.push({ name: 'Segment', params: {
      //   slug: 'participation4ro',
      //   segment: 'acces-la-cultura'
      // }})
    },
    next() {
      if (this.active_project_index === this.segment.projects.length) {
        this.active_project_index = 0;
      } else {
        this.active_project_index++;
      }
    },
    previous() {
      if (0 === this.active_project_index) {
        this.active_project_index = this.segment.projects.length;
      } else {
        this.active_project_index--;
      }
    },
  },
};
</script>

<style>
.icon-text-container {
  width: 128px;
}
</style>