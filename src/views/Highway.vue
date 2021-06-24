<template>
  <div>
    <HighwayHeader
      :logo="highway.slug"
      :title="highway.title"
      :description="highway.description"
    />

    <div
      v-if="highway.sponsor"
      class="mb-8 lg:hidden"
    >
      <div class="inline-block mb-2">
        {{ data.general.financed_by }}
      </div>
      <a
        :href="highway.sponsor.link"
        target="_blank"
        class="block border border-gray-100 bg-white w-32"
      >
        <img :src="highway.sponsor.logo">
      </a>
    </div>

    <div class="relative mb-8">
      <div
        class="h-0 w-full hidden lg:block"
        :style="{ 'padding-bottom': (526/748) * 100 + '%'}"
      >
        <div class="absolute top-0 left-0 w-full h-full opacity-80">
          <img
            class="w-full h-full"
            src="../assets/svg/illustrations/map-bw.svg"
          >
        </div>
      </div>

      <router-link
        :to="{ name: 'Map' }"
        class="absolute top-0 left-0 h-0 w-full z-20 hidden lg:block"
        :style="{ 'padding-bottom': (526/748) * 100 + '%'}"
      >
        <div>
          <img
            class="w-full h-full"
            :src="
              require(`../assets/svg/illustrations/${highway.highway_bg}.svg`)
            "
          >
        </div>
      </router-link>

      <template v-for="motorway in data.code4ro_map">
        <MapButton
          :key="motorway.slug"
          class="hidden lg:block"
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

    <div class="hidden lg:block">
      <div class="grid grid-cols-12">
        <div
          class="col-span-2"
          v-if="highway.sponsor"
        >
          <div
            class="w-24 Highway-partner m-0"
          >
            <div class="d-inline-block mb-2">
              {{ data.general.financed_by }}
            </div>
            <a
              :href="highway.sponsor.link"
              target="_blank"
              class="block border border-gray-100"
            >
              <img
                :src="highway.sponsor.logo"
              >
            </a>
          </div>
        </div>
        <div class="col-span-12">
          <p
            class="text-xl my-4"
            v-html="highway.description"
          />
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
