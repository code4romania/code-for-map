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
      </div>
      this is where we add the full segment and the projects on the segment
      so, we'll need:<br/>
      - coordinates for each of our project in data.js, we already have the projects, so we can just create another comp for this sort of rendering<br/>
      - a segment svg (like the one you see here)<br/>
      - a possible sponor (just a logo with a link that opens in a new tab)<br/>
      - the segment icon and its title, also its coordinates on the segment svg as we want the icon to be near the destination circle<br/>
      - when we click on a project we need to open a modal. this modal will take up the whole screen on small viewports and behave like a regular modal on larger viewports
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
