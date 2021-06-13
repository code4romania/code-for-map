<template>
  <!-- <div class="flex flex-col items-center lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6"> -->
  <div class="grid gap-6 grid-cols-3">
    <div class="flex flex-col justify-center col-span-3 lg:col-span-1">
      <Heading :level="1">
        {{ title }}
      </Heading>
      <p
        class="mb-6 lg:pr-3"
        v-html="description"
      />
      <!-- <a
            class=" d-none d-lg-inline-block"
            :href="data.more_info.download_link"
            @click.prevent="downloadPlan()"
          >{{ data.more_info.download_pdf_cta }}</a> -->
      <div class="flex flex-wrap">
        <t-button
          :href="downloadPdfLink"
          color="blue"
          size="lg"
          target="_blank"
          @click="handleClickCTA()"
        >
          {{ downloadPdfCta }}
        </t-button>
      </div>
    </div>
    <div class="col-span-3 lg:col-span-2">
      <button
        v-if="!showVideo"
        class="btn btn-link"
        @click.prevent="playYT()"
      >
        <img
          class="img-fluid"
          :src="coverYT"
        >
      </button>
      <div
        v-else
        class="aspect-w-16 aspect-h-9"
      >
        <iframe
          src="https://www.youtube.com/embed/XHVvEhmrlkA?modestbranding=1&autohide=2&showinfo=0&autoplay=1"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write;
            encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
    </div>
  </div>
</template>

<script>
import TButton from "./Button";
import Heading from "./Heading";

export default {
  name: "VideoBanner",
  components: {
    TButton,
    Heading
  },
  props: {
    title: {
      type: String,
      default: () => {},
    },
    description: {
      type: String,
      default: () => {},
    },
    downloadPdfCta: {
      type: String,
      default: () => {},
    },
    downloadPdfLink: {
      type: String,
      default: () => {},
    },
  },
  data() {
    return {
      coverYT: "",
      showVideo: false,
    };
  },
  mounted() {
    this.coverYT = require("../assets/images/cover-yt.png");
  },
  methods: {
    playYT() {
      this.showVideo = true;
    },
    handleClickCTA() {
      this.$emit("onClickCTA");
    },
  },
};
</script>
