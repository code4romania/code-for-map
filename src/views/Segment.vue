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

      <SegmentLegend
        :status="data.segment_legend"
        :color="code4ro_map.color"
      />

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
        <router-link :to="{ name: 'Highway', params: { slug: slug } }" class="SegmentVisual-close">
          <svg class="icon icon-sm"><use xlink:href="#close"></use></svg>
        </router-link>
        <div class="SegmentVisual">
          <svg class="segment"><use :xlink:href="'#' + segment.segment_visual"></use></svg>
        </div>
        <!-- Modal -->
        <div class="d-none d-lg-block">
          <div v-for="project in segment.projects" :key="project.id">
          <a
            v-b-modal="'myModal' + project.id"
            :style="{
              position: 'absolute',
              top: project.position.top,
              left: project.position.left,
            }"
            >{{ project.title }}</a
          >
          <b-modal
            :id="'myModal' + project.id"
            size="lg"
            centered
            hide-header
            hide-footer
          >
            <div class="py-1" :class="`bg-${code4ro_map.color}`"></div>
            <div class="p-3">
              <div class="d-flex align-items-center justify-content-between">
                <div
                  class="SegmentLegend-status d-flex align-items-center mr-4"
                >
                  <i
                    class="icon icon-circle"
                    :class="'border-' + code4ro_map.color"
                  ></i>
                  {{ data.segment_legend.done }}
                </div>
                <svg
                  @click="$bvModal.hide('myModal' + project.id)"
                  class="icon icon-sm"
                  style="cursor: pointer"
                >
                  <use xlink:href="#close"></use>
                </svg>
              </div>
              <div>
                {{ project.title }}
              </div>
            </div>
          </b-modal>
        </div>
        </div>
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
      type: Object
    }
  },
  components: {
    HighwayHeader,
    Delimiter,
    SegmentHeader,
    SegmentLegend,
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

    this.data.back_link.visible = true;
  }
};
</script>
