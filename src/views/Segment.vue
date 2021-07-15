<template>
  <div>
    <div class="lg:hidden">
      <HighwayHeader
        :logo="code4ro_map.slug"
        :title="code4ro_map.title"
        class="block xl:none"
      />

      <SegmentHeader
        class="mb-4"
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
        <div class="border-b border-gray-100">
          <router-link
            v-for="(project, index) in segmentObject.projects"
            :key="index"
            tag="div"
            class="py-4 px-2 border-t border-gray-100 bg-white cursor-pointer relative"
            :to="{
              name: 'ProjectModal',
              params: {
                solution: project.projectSlug,
              },
            }"
          >
            <div class="flex items-center justify-between">
              <i
                class="block w-6 h-6 rounded-full border-4 bg-white z-10"
                :class="
                  project.adopted
                    ? 'border-' + code4ro_map.color + '-500'
                    : 'border-gray-200'
                "
              />
              <div class="flex-grow mx-4 text-lg">
                {{ project.title }}
              </div>
              <img
                class="w-6 h-6"
                src="../assets/svg/icons/chevron-right.svg"
              >
            </div>
            <div class="absolute top-0 left-4 h-full w-2 bg-gray-100" />
          </router-link>
        </div>
      </div>
    </div>

    <div class="hidden lg:block">
      <div class="flex items-center justify-end">
        <router-link
          :to="{ name: 'Highway', params: { slug: slug } }"
          class="inline-flex"
        >
          <div class="flex items-center">
            <img
              class="w-6 h-6"
              src="../assets/svg/icons/chevron-left.svg"
            >
            <div class="ml-2 border-b border-gray-500 text-gray-500 text-lg">
              {{ $t('general.back_to_map') }}
            </div>
          </div>
        </router-link>
      </div>
      <div>
        <div
          :class="`mx-auto lg:-mt-24 lg:-mb-8 xl:mb-2 ${segmentObject.projects.length > 0 ? '' : 'max-w-2xl'}`"
        >
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

    <div class="grid grid-cols-8">
      <div class="col-span-8 xl:col-start-2">
        <div class="hidden lg:block">
          <div class="bg-gray text-white text-lg inline-block px-2 py-1 leading-none mx-auto mb-2">
            {{ segmentObject.status }}
          </div>
          <div
            class="leading-6"
            v-html="segmentObject.description"
          />
        </div>
      </div>
    </div>

    <div
      v-if="showModal"
      class="w-full h-full fixed top-0 left-0 z-40 overflow-y-scroll bg-black bg-opacity-50 lg:box-content"
    >
      <div class="absolute lg:max-w-6xl lg:h-auto w-full bg-white z-50 top-0 lg:top-16 lg:left-1/2 lg:transform lg:-translate-x-1/2">
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
    };
  },
  watch: {
    $route: {
      immediate: true,
      handler: function(to) {
        this.showModal = to.meta && to.meta.showModal;

        this.$gtag.pageview({
          page_title: this.segmentSlug,
          page_path: window.location.href,
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
    },
  },
};
</script>
