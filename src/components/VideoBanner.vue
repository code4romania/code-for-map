<template>
  <div class="flex flex-col lg:flex-row items-center space-x-6">
    <div class="w-full lg:w-1/3 mb-6">
      <h1 class="text-5xl text-blue text-bold font-bold mb-6">
        {{ title }}
      </h1>
      <p
        class="mb-6 lg:pr-3"
        v-html="description"
      />
      <!-- <a
            class=" d-none d-lg-inline-block"
            :href="data.more_info.download_link"
            @click.prevent="downloadPlan()"
          >{{ data.more_info.download_pdf_cta }}</a> -->
      <a
        class="
          inline-block
          bg-blue-500
          text-white
          px-12
          py-2
          text-xl
          font-normal
          rounded
          hover:bg-blue-600
        "
        :href="downloadPdfLink"
        target="_blank"
        @click="handleClickCTA()"
      >
        {{ downloadPdfCta }}
      </a>
    </div>

    <div class="w-full lg:w-2/3">
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
export default {
  name: "VideoBanner",
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
