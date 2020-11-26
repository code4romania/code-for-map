<template>
  <div>
    <div class="Segment d-lg-none">
      <HighwayHeader
        :logo="code4ro_map.slug"
        :title="code4ro_map.title"
        class="d-block d-lg-none"
      />

      <SegmentHeader
        :icon="segmentObject.segmentSlug"
        :slug="slug"
        :color="code4ro_map.color"
        :title="segmentObject.title"
        :description="segmentObject.description"
      />

      <SegmentLegend :status="data.segment_legend" :color="code4ro_map.color" />

      <div class="ProjectsList" v-if="segmentObject.projects.length">
        <router-link
          tag="div"
          class="d-flex align-items-center justify-content-between ListItem"
          :to="{
            name: 'ProjectModal',
            params: {
              solution: project.projectSlug,
            },
          }"
          v-for="(project, index) in segmentObject.projects"
          :key="index"
        >
          <i
            class="icon icon-circle"
            :class="project.adopted ? 'border-' + code4ro_map.color : 'border-gray'"
          ></i>
          <div class="flex-fill mx-2">{{ project.title }}</div>
          <svg class="icon"><use xlink:href="#chevron-right"></use></svg>
        </router-link>
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
            <use :xlink:href="'#' + segmentObject.segment_visual"></use>
          </svg>
        </div>
      </div>

      <div class="Segment-info d-none d-lg-block">
        <b-row>
          <b-col col="8" offset="4">
            <div class="lead" v-html="segmentObject.description" />
          </b-col>
        </b-row>
      </div>
    </div>

    <div v-if="showModal" class="modal-route">
      <div class="modal-content">
        <router-view
          :data="data"
          :code4ro_map="code4ro_map"
          :segmentObject="segmentObject"
          :slug="slug"
          :segmentSlug="segmentSlug"
        ></router-view>
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
    SegmentLegend
  },
  data() {
    return {
      slug: this.$route.params.slug,
      segmentSlug: this.$route.params.segment,
      code4ro_map: [],
      segmentObject: [],
      showModal: false,
    };
  },
  /** Vue created life cycle initialize data for this route. */
  created() {
    this.code4ro_map = this.data.code4ro_map.find(
      (item) => item.slug == this.slug
    );
    this.segmentObject = this.code4ro_map.highway_segments.find(
      (item) => item.segmentSlug == this.segmentSlug
    );

    this.data.back_to_map.visible = true;
  },
  watch: {
    $route: {
      immediate: true,
      handler: function (to) {
        this.showModal = to.meta && to.meta.showModal;
      },
    },
  },
  mounted() {
    postMessage({ height: document.body.scrollHeight });

    const projects = document.getElementsByClassName('btn-project');

    projects.forEach(project => {
      project.addEventListener('click', () => {
        this.projectClicked(parseInt(project.getAttribute('projectid'), 10))
      })
    })
  },
  methods: {
  projectClicked(index) {
    this.$router.push({
      name: 'ProjectModal',
      params: {
      slug: this.slug,
      segment: this.segmentSlug,
      solution: this.segmentObject.projects[index - 1].projectSlug
    }});
  }
  }
};
</script>

<style>
.modal-route {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1000;
}
.modal-content {
  position: absolute;
  width: 100%;
  max-width: 1024px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.3);
}
</style>
