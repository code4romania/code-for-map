<template>
  <div>
    <HighwayHeader
      :logo="highway.slug"
      :title="highway.title"
      :description="highway.description"
    />

    <div
      v-if="highway.sponsor"
      class="Highway-partner my-4 d-lg-none"
    >
      <div class="d-inline-block mb-2">
        {{ data.general.financed_by }}
      </div>
      <a
        :href="highway.sponsor.link"
        target="_blank"
        class="d-block border border-gray"
      >
        <img
          :src="highway.sponsor.logo"
          class="img-fluid"
        >
      </a>
    </div>

    <div class="Highway-wrap">
      <div class="HighwayContainer">
        <div class="Highway">
          <div class="MapContainer-wrap d-none d-lg-block">
            <div class="MapContainer Map-bw">
              <img
                class="w-100 h-100"
                src="../assets/svg/illustrations/map-bw.svg"
              >
            </div>
          </div>

          <router-link
            :to="{ name: 'Map' }"
            class="d-none d-lg-block"
          >
            <div class="MapContainer">
              <img
                class="w-100 h-100"
                :src="
                  require(`../assets/svg/illustrations/${highway.highway_bg}.svg`)
                "
              >
            </div>
          </router-link>

          <template v-for="motorway in data.code4ro_map">
            <MapButton
              :key="motorway.slug"
              class="d-none d-lg-block"
              :highway="motorway"
              :top="motorway.btn.top"
              :left="motorway.btn.left"
            />
          </template>

          <template v-for="segmentButton in highway.highway_segments">
            <HighwayButton
              :key="'highway-btn-lg-' + segmentButton.id"
              :slug="highway.slug"
              :segment-slug="segmentButton.segmentSlug"
              :segment-button="segmentButton"
              :color="highway.color"
              :has-projects="segmentButton.projects.length > 0"
            />

            <SegmentButton
              :key="'highway-btn-' + segmentButton.id"
              :slug="highway.slug"
              :segment-slug="segmentButton.segmentSlug"
              :title="segmentButton.title"
            />
          </template>
        </div>

        <div class="d-none d-lg-block">
          <b-row>
            <b-col lg="2">
              <div
                v-if="highway.sponsor"
                class="Highway-partner m-0"
              >
                <div class="d-inline-block mb-2">
                  {{ data.general.financed_by }}
                </div>
                <a
                  :href="highway.sponsor.link"
                  target="_blank"
                  class="d-block border border-gray"
                >
                  <img
                    :src="highway.sponsor.logo"
                    class="img-fluid"
                  >
                </a>
              </div>
            </b-col>
            <b-col lg="10">
              <p
                class="lead text-right my-4"
                v-html="highway.description"
              />
            </b-col>
          </b-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { postMessageHeight } from "../utils/postMessage";

import MapButton from "../components/map/MapButton";
import HighwayButton from "../components/map/HighwayButton";
import HighwayHeader from "../components/map/HighwayHeader";
import SegmentButton from "../components/map/SegmentButton";

export default {
  /** Component name. */
  name: "Highway",
  /** Registered components */
  components: {
    MapButton,
    HighwayButton,
    HighwayHeader,
    SegmentButton,
  },
  /** Recived props */
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
  /** Component state. */
  data() {
    return {
      slug: this.$route.params.slug,
      highway: [],
    };
  },
  watch: {
    $route(to) {
      if (this.slug != to) {
        this.highway = this.data.code4ro_map.find(
          (item) => item.slug == to.params.slug
        );
      }

      this.$gtag.pageview({
        page_title: this.slug,
        page_path: window.location.href,
      });
    },
  },

  created() {
    this.highway = this.data.code4ro_map.find((item) => item.slug == this.slug);
    this.data.back_to_map.visible = true;

    postMessageHeight();
  },
};
</script>
