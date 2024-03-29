<template>
  <div>
    <router-link
      :to="{ name: 'Map' }"
      class="BackToMap mb-4 d-inline-block d-lg-none"
    >
      <div class="d-flex align-items-center">
        <img
          class="icon icon-md"
          src="../assets/svg/icons/chevron-left.svg"
        >
        <div class="ml-2 text-primary border-bottom border-primary">
          {{ data.modal.back_to_map }}
        </div>
      </div>
    </router-link>

    <HighwayHeader
      :logo="highway.slug"
      :title="highway.title"
      :description="highway.description"
    />

    <template v-for="({ sponsor }) in highway.sponsors">
      <div
        :key="sponsor.id"
        class="Highway-partner my-4 d-lg-none"
      >
        <!--      <div class="d-inline-block mb-2">-->
        <!--        {{ data.general.financed_by }}-->
        <!--      </div>-->
        <a
          :href="sponsor.link"
          target="_blank"
          class="d-block border border-gray"
        >
          <img
            :src="sponsor.logo"
            class="img-fluid"
          >
        </a>
      </div>
    </template>

    <div class="Highway-wrap">
      <div class="HighwayContainer">
        <div class="Highway">
          <div class="MapContainer-wrap d-none d-lg-block">
            <div class="MapContainer Map-bw">
              <img
                class="w-100 h-100"
                :src="data.background_segments.url"
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
                :src="highway.image.url"
              >
            </div>
          </router-link>

          <template v-for="highway in data.highways">
            <MapButton
              :key="highway.slug"
              class="d-none d-lg-block"
              :highway="highway"
              :top="highway.position_desktop.top"
              :left="highway.position_desktop.left"
            />
          </template>

          <template v-for="segmentButton in highway.segments">
            <HighwayButton
              :key="'highway-btn-lg-' + segmentButton.id"
              :slug="highway.slug"
              :segment-slug="segmentButton.slug"
              :segment-button="segmentButton"
              :color="highway.color"
              :has-projects="segmentButton.projects.length > 0"
            />

            <SegmentButton
              :key="'highway-btn-' + segmentButton.id"
              :slug="highway.slug"
              :segment-slug="segmentButton.slug"
              :title="segmentButton.title"
              :image="segmentButton.image && segmentButton.image.url"
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
    page: {
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
        this.highway = this.data.highways.find(
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
    this.highway = this.data.highways.find((item) => item.slug == this.slug);
    // this.data.back_to_map.visible = true;

    postMessageHeight();
  },
};
</script>
