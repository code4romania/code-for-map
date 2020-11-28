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

      <div
        v-if="segmentObject.projects.length"
        class="ProjectsList"
      >
        <SegmentLegend
          :status="data.segment_legend"
          :color="code4ro_map.color"
        />
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
                project.adopted ? 'border-' + code4ro_map.color : 'border-gray'
              "
            />
            <div class="flex-fill mx-2">
              {{ project.title }}
            </div>
            <svg class="icon"><use xlink:href="#chevron-right" /></svg>
          </div>
        </router-link>
      </div>
    </div>

    <div class="Segment d-none d-lg-block">
      <div class="SegmentVisual-wrap mt-4">
        <router-link
          :to="{ name: 'Highway', params: { slug: slug } }"
          class="SegmentVisual-close mb-4 d-inline-block"
        >
          <div class="d-flex align-items-center">
            <svg class="icon icon-md">
              <use xlink:href="#chevron-left" />
            </svg>
            <div class="ml-2 text-primary border-bottom border-primary">
              {{ data.general.back_to_map }}
            </div>
          </div>
        </router-link>
        <div class="SegmentVisual">
          <svg class="segment">
            <use :xlink:href="'#' + segmentObject.segment_visual" />
          </svg>
        </div>
      </div>
    </div>

    <b-row>
      <b-col offset-lg="2">
        <div class="Segment-info d-none d-lg-block w-75">
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
import postMessage from '../utils/postMessage'

import HighwayHeader from '../components/map/HighwayHeader'
import SegmentHeader from '../components/map/SegmentHeader'
import SegmentLegend from '../components/map/SegmentLegend'

export default {
  name: 'Segment',
  components: {
    HighwayHeader,
    SegmentHeader,
    SegmentLegend,
  },
  props: {
    data: {
      type: Object,
      default: () => {}
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
      modalLeft: '50%',
    }
  },
  watch: {
    $route: {
      immediate: true,
      handler: function(to) {
        this.showModal = to.meta && to.meta.showModal
      },
    },
  },
  /** Vue created life cycle initialize data for this route. */
  created() {
    this.code4ro_map = this.data.code4ro_map.find(
      item => item.slug == this.slug
    )
    this.segmentObject = this.code4ro_map.highway_segments.find(
      item => item.segmentSlug == this.segmentSlug
    )

    this.data.back_to_map.visible = true

    // const segmentProjects = document.getElementsByClassName("btn-project");
    // segmentProjects.forEach((segmentProject) => {
    //   segmentProject.addEventListener("click", () => {
    //     const projectId = segmentProject.getAttribute("projectid");
    //     const project = this.segmentObject.projects.find(
    //       (segmentProject) => segmentProject.id == projectId
    //     );
    //     this.$router.push({
    //       name: "ProjectModal",
    //       params: {
    //         solution: project.projectSlug,
    //       },
    //     });
    //   });
    // });
  },
  mounted() {
    postMessage({ height: document.documentElement.scrollHeight })

    const projects = document.getElementsByClassName('btn-project')

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
          solution: this.segmentObject.projects[index - 1].projectSlug,
        },
      })
      this.modalTop = '100px'
    },
    mobileProjectClicked(event) {
      let position = event.target.getBoundingClientRect().top - (event.target.getBoundingClientRect().top * 4 / 5)

      this.modalTop = position + 'px'
    },
  },
}
</script>
