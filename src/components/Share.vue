<template>
  <div class="Share d-flex">
    <a
      href="#"
      class="mr-4"
      @click="facebookLink"
    >
      <svg class="icon icon-lg"><use xlink:href="#share-fb" /></svg>
    </a>

    <a
      href="#"
      class="mr-4"
      @click="twitterLink"
    >
      <svg class="icon icon-lg"><use xlink:href="#share-tw" /></svg>
    </a>

    <a
      href="#"
      class="mr-4"
      @click="linkedinLink"
    >
      <svg class="icon icon-lg"><use xlink:href="#share-li" /></svg>
    </a>
  </div>
</template>

<script>
import objectToGetParams from "../utils/objectToGetParams";

export default {
  name: "Share",
  props: {
    share: {
      type: Object,
      default: () => {}
    },
  },
  data() {
    return {
      pageURL: location.href,
      mapURL: "https://code4.ro/putem"
    };
  },
  methods: {
    facebookLink() {
      window.open(
        "https://www.facebook.com/sharer/sharer.php" +
          objectToGetParams({
            u: this.mapURL,
          })
      );
    },
    linkedinLink() {
      window.open(
        "https://linkedin.com/shareArticle" +
          objectToGetParams({
            mini: true,
            url: this.mapURL,
          })
      );
    },
    twitterLink() {
      window.open(
        "https://www.twitter.com/share" +
          objectToGetParams({
            url: this.mapURL,
          })
      );
    },
  },
};
</script>
