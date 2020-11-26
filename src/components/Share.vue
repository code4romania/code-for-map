<template>
  <div class="Share d-flex">
    <a @click="facebookLink" href="#" class="mr-4">
      <svg class="icon icon-lg"><use xlink:href="#share-fb"></use></svg>
    </a>

    <a @click="twitterLink" href="#" class="mr-4">
      <svg class="icon icon-lg"><use xlink:href="#share-tw"></use></svg>
    </a>

    <a @click="linkedinLink" href="#" class="mr-4">
      <svg class="icon icon-lg"><use xlink:href="#share-li"></use></svg>
    </a>
  </div>
</template>

<script>
import objectToGetParams from "../utils/objectToGetParams";

export default {
  name: "Share",
  props: {
    share: Object,
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
