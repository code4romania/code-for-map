<template>
  <div class="grid gap-6 grid-cols-3">
    <div class="flex flex-col justify-center col-span-3 lg:col-span-1">
      <Heading :level="1">
        {{ $t('video.title') }}
      </Heading>
      <p
        class="mb-6 lg:pr-3 text-lg"
        v-html="$t('video.description')"
      />
      <div class="flex flex-wrap">
        <t-button
          :href="$t('video.download_pdf_link')"
          color="blue"
          size="lg"
          target="_blank"
        >
          {{ $t('video.download_pdf_cta') }}
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
          :src="$t('video.youtube') + '?modestbranding=1&autohide=2&showinfo=0&autoplay=1'"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
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
    video: {
      type: Object,
      default: () => {}
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
    }
  },
};
</script>
