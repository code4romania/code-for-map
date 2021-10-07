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
            <div class="ml-2 border-b border-gray-700 text-gray-700 text-lg">
              {{ $t('general.back_to_map') }}
            </div>
          </div>
        </router-link>
      </div>
      <div>
        <div
          :class="`mx-auto lg:-mt-24 lg:-mb-8 xl:mb-2 ${segment.projects.length > 0 ? '' : 'max-w-2xl'}`"
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
    };
  },
  watch: {
    $route: {
      immediate: true,
      handler: function(to) {
        this.showModal = to.meta && to.meta.showModal;
      },
    },
  },
  /** Vue created life cycle initialize data for this route. */
  created() {
    this.highway = this.data.code4ro_map.find(
      (item) => item.slug == this.slug
    );

    this.segment = this.highway.segments.find(
      (item) => item.segmentSlug == this.segmentSlug
    );

    this.data.back_to_map.visible = true;
  },
  methods: {
    projectClick(event) {
      const parentElement = event.target.parentElement;
      if (parentElement.tagName !== "text" || !parentElement.dataset.projectid) {
        return;
      }
      const projectId = parentElement.dataset.projectid;
      const project = this.segment.projects.find(
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
