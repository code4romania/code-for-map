<template>
  <div>
    <HighwayHeader
      :logo="code4ro_map.slug"
      :title="code4ro_map.title"
      :description="code4ro_map.description"
    />

    <div class="Highway-wrap">
      <div class="HighwayContainer">
        <div class="Highway">
          <div class="Highway-partner" v-if="code4ro_map.sponsor">
            <div class="d-inline-block mb-2">
              {{ data.general.financed_by }}
            </div>
            <a
              :href="code4ro_map.sponsor.link"
              target="_blank"
              class="d-block border border-gray"
            >
              <img :src="code4ro_map.sponsor.logo" class="img-fluid" />
            </a>
          </div>

          <div class="MapContainer-wrap d-none d-lg-block">
            <div class="MapContainer Map-bw">
              <svg class="w-100 h-100"><use xlink:href="#map-bw"></use></svg>
            </div>
          </div>

          <router-link :to="{ name: 'Map' }" class="d-none d-lg-block">
            <div class="MapContainer">
              <svg class="w-100 h-100">
                <use :xlink:href="'#' + code4ro_map.highway_bg"></use>
              </svg>
            </div>
          </router-link>

          <template v-for="highway in data.code4ro_map">
            <MapButton
              class="d-none d-lg-block"
              :highway="highway"
              :top="highway.btn.top"
              :left="highway.btn.left"
              v-bind:key="highway.slug"
            />
          </template>

          <template v-for="segment_button in code4ro_map.highway_segments">
            <HighwayButton
              :slug="code4ro_map.slug"
              :segmentSlug="segment_button.segmentSlug"
              :segment_button="segment_button"
              :color="code4ro_map.color"
              :hasProjects="segment_button.projects.length > 0"
              v-bind:key="'highway-btn-lg-' + segment_button.id"
            />

            <SegmentButton
              :slug="code4ro_map.slug"
              :segmentSlug="segment_button.segmentSlug"
              :title="segment_button.title"
              v-bind:key="'highway-btn-' + segment_button.id"
            />
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import postMessage from "../utils/postMessage";

import MapButton from "../components/map/MapButton";
import HighwayButton from "../components/map/HighwayButton";
import HighwayHeader from "../components/map/HighwayHeader";
import SegmentButton from "../components/map/SegmentButton";

export default {
  /** Component name. */
  name: "Highway",
  /** Recived props */
  props: {
    data: {
      type: Object,
    },
  },
  /** Registered components */
  components: {
    MapButton,
    HighwayButton,
    HighwayHeader,
    SegmentButton,
  },
  /** Component state. */
  data() {
    return {
      slug: this.$route.params.slug,
      code4ro_map: [],
    };
  },
  /** Vue mounted life cycle initialize data for this route. */
  mounted() {
    this.code4ro_map = this.data.code4ro_map.find(
      (item) => item.slug == this.slug
    );

    this.data.back_to_map.visible = true;

    postMessage({ height: document.documentElement.scrollHeight });
  },
  watch: {
    $route(to) {
      if (this.slug != to) {
        this.code4ro_map = this.data.code4ro_map.find(
          (item) => item.slug == to.params.slug
        );
      }
    },
  },
};
</script>
