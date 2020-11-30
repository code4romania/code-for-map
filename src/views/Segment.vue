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
        :status="segmentObject.status"
      />

      <div
        v-if="segmentObject.projects.length"
        class="ProjectsList"
      >
        <SegmentLegend
          :status="data.segment_legend"
          :color="code4ro_map.color"
        />
        <div class="SegmentProjects">
          <router-link
            v-for="(project, index) in segmentObject.projects"
            :key="index"
            tag="div"
            class="ListItem"
            :to="{
              name: 'ProjectModal',
              params: {
                solution: project.projectSlug,
              },
            }"
          >
            <div
              class="d-flex align-items-center justify-content-between"
              @click="mobileProjectClicked"
            >
              <i
                class="icon icon-circle"
                :class="
                  project.adopted
                    ? 'border-' + code4ro_map.color
                    : 'border-gray'
                "
              />
              <div class="flex-fill mx-2">
                {{ project.title }}
              </div>
              <img
                class="icon"
                src="../assets/svg/icons/chevron-right.svg"
              >
            </div>
          </router-link>
        </div>
      </div>
    </div>

    <div class="Segment d-none d-lg-block">
      <router-link
        :to="{ name: 'Highway', params: { slug: slug } }"
        class="SegmentVisual-close d-inline-block"
      >
        <div class="d-flex align-items-center">
          <img
            class="icon"
            src="../assets/svg/icons/chevron-left.svg"
          >
          <div class="ml-2 text-primary border-bottom border-primary">
            {{ data.general.back_to_map }}
          </div>
        </div>
      </router-link>
      <div class="SegmentVisual-wrap">
        <div class="SegmentVisual">
          <component
            :is="
              require('./../assets/svg/illustrations/' +
                segmentObject.segment_visual +
                '.svg?inline')
            "
            @click="projectClick"
          />
        </div>
      </div>
    </div>

    <b-row>
      <b-col offset-lg="2">
        <div class="Segment-info d-none d-lg-block text-right">
          <div class="badge badge-primary Segment-status mb-3">
            {{ segmentObject.status }}
          </div>
          <div
            class="lead"
            v-html="segmentObject.description"
          />
        </div>
      </b-col>
    </b-row>

    <div
      v-if="showModal"
      class="modal-route"
    >
      <div
        id="projectModal"
        class="modal-content"
        :style="{ top: modalTop, left: modalLeft }"
      >
        <router-view
          :data="data"
          :highway-map="code4ro_map"
          :segment-object="segmentObject"
          :slug="slug"
          :segment-slug="segmentSlug"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { postMessageHeight } from "../utils/postMessage";

import HighwayHeader from "../components/map/HighwayHeader";
import SegmentHeader from "../components/map/SegmentHeader";
import SegmentLegend from "../components/map/SegmentLegend";

export default {
  name: "Segment",
  components: {
    HighwayHeader,
    SegmentHeader,
    SegmentLegend,
  },
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      slug: this.$route.params.slug,
      segmentSlug: this.$route.params.segment,
      code4ro_map: [],
      segmentObject: [],
      showModal: false,
      modalTop: 0,
      modalLeft: "50%",
    };
  },
  watch: {
    $route: {
      immediate: true,
      handler: function(to) {
        this.showModal = to.meta && to.meta.showModal;

        this.$gtag.pageview({
          page_title: this.segmentSlug,
        });
      },
    },
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
  mounted() {
    postMessageHeight();
  },
  methods: {
    projectClick(event) {
      const parentElement = event.target.parentElement;
      if (parentElement.tagName !== "text") {
        return;
      }
      const projectId = parentElement.dataset.projectid;
      const project = this.segmentObject.projects.find(
        (segmentProject) => segmentProject.id == projectId
      );
      this.$router.push({
        name: "ProjectModal",
        params: {
          solution: project.projectSlug,
        },
      });

      this.modalTop = "100px";
    },
    mobileProjectClicked(event) {
      let position =
        event.target.getBoundingClientRect().top -
        (event.target.getBoundingClientRect().top * 4) / 5;

      this.modalTop = position + "px";
    },
  },
};
</script>
