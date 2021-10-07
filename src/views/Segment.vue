<template>
  <div>
    <div class="lg:hidden">
      <HighwayHeader
        :slug="highway.slug"
        class="block xl:none"
      />

      <SegmentHeader
        class="mb-4"
        :color="highway.color"
        :slug="highway.slug"
        :segment="segment"
      />

      <div
        v-if="segment.projects.length"
        class="ProjectsList"
      >
        <SegmentLegend :color="highway.color" />
        <div class="border-b border-gray-300">
          <router-link
            v-for="(project, index) in segment.projects"
            :key="index"
            tag="div"
            class="py-4 px-2 border-t border-gray-300 bg-white cursor-pointer relative"
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
                    ? 'border-' + highway.color + '-500'
                    : 'border-gray-600'
                "
              />
              <div class="flex-grow mx-4 text-lg">
                {{ $t(slug + '.segments.' + segmentSlug + '.projects.' + project.projectSlug + '.title') }}
              </div>
              <img
                class="w-6 h-6"
                src="../assets/svg/icons/chevron-right.svg"
              >
            </div>
            <div class="absolute top-0 left-4 h-full w-2 bg-gray-300" />
          </router-link>
        </div>
      </div>
    </div>

    <div class="hidden lg:block relative">
      <button
        :class="'hidden lg:flex absolute top-1/2 left-0 xl:left-16 -m-5 text-' + highway.color + '-500 p-3 rounded hover:bg-gray-50 focus:bg-gray-100 focus:outline-none'"
        @click="previous"
      >
        <svg
          class="h-10 w-10"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M11 17l-5-5m0 0l5-5m-5 5h12"
          />
        </svg>
      </button>
      <button
        :class="'hidden lg:flex absolute top-1/2 right-0 -m-5 text-' + highway.color + '-500 p-3 rounded hover:bg-gray-50 focus:bg-gray-100 focus:outline-none'"
        @click="next"
      >
        <svg
          class="h-10 w-10"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 7l5 5m0 0l-5 5m5-5H6"
          />
        </svg>
      </button>
      <div>
        <div
          :class="`mx-auto lg:-mt-24 lg:-mb-8 xl:mb-2 lg:mx-w-lg xl:max-w-2xl'}`"
        >
          <component
            :is="
              require('./../assets/svg/illustrations/' +
                segment.segment_visual +
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
            {{ $t(slug + '.segments.' + segmentSlug + '.status') }}
          </div>
          <div
            class="leading-6"
            v-html="$t(slug + '.segments.' + segmentSlug + '.description')"
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
          :highway-map="highway"
          :segment-object="segment"
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
      highway: {},
      segment: {},
      showModal: false,
      active_index: null,
    };
  },
  watch: {
    $route: {
      immediate: true,
      handler: function(to) {
        this.showModal = to.meta && to.meta.showModal;

        if(this.highway.segments) {
          this.segment = this.highway.segments.find(
            (item) => item.segmentSlug === to.params.segment
          );
        }
      },
    },
  },
  created() {
    this.highway = this.data.code4ro_map.find(
      (item) => item.slug === this.slug
    );

    this.segment = this.highway.segments.find((item, index) => {
        if (item.segmentSlug === this.segmentSlug) {
          this.active_index = index;
        }

        return item.segmentSlug === this.segmentSlug;
      }
    );

    this.data.back_to_map.visible = true;
  },
  methods: {
    projectClick(event) {
      const parentElement = event.target.parentElement;
      if (parentElement.tagName !== "text" || !parentElement.dataset.projectid) {
        return;
      }
      const projectId = parseInt(parentElement.dataset.projectid, 10);
      const project = this.segment.projects.find(
        (segmentProject) => segmentProject.id === projectId
      );
      this.$router.push({
        name: "ProjectModal",
        params: {
          solution: project.projectSlug,
        },
      });
    },
    next() {
      this.active_index =
        this.active_index + 1 < this.highway.segments.length
          ? this.active_index + 1
          : 0;

      this.$router.push({
        name: "Segment",
        params: {
          slug: this.highway.slug,
          segment: this.highway.segments[this.active_index].segmentSlug
        },
      });
    },
    previous() {
      this.active_index =
        this.active_index - 1 >= 0
          ? this.active_index - 1
          : this.highway.segments.length - 1;

      this.$router.push({
        name: "Segment",
        params: {
          slug: this.highway.slug,
          segment: this.highway.segments[this.active_index].segmentSlug
        },
      });
    },
  },
};
</script>
