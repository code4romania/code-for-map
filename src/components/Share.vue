<template>
  <div class="Share">
    <!-- <p class="mb-4">{{ data.description }}</p> -->

    <b-dropdown
      right
      :text="data.cta"
      :variant="data.color"
      class="mr-2 text-white dropdown-custom"
    >
      <b-dropdown-item @click="facebookLink" class="text-center">{{
        data.facebook.title
      }}</b-dropdown-item>
      <b-dropdown-item @click="linkedinLink" class="text-center">{{
        data.linkedin.title
      }}</b-dropdown-item>
      <b-dropdown-item @click="twitterLink" class="text-center">{{
        data.twitter.title
      }}</b-dropdown-item>
    </b-dropdown>
  </div>
</template>

<script>
import objectToGetParams from "../utils/objectToGetParams";

export default {
  name: "Share",
  props: {
    data: Object,
  },
  data() {
    return {
      pageUrl: location.href,
    };
  },
  methods: {
    facebookLink() {
      window.open(
        `https://www.facebook.com/sharer/sharer.php` +
          objectToGetParams({
            u: this.pageUrl,
          })
      );
    },
    linkedinLink() {
      window.open(
        "https://linkedin.com/shareArticle" +
          objectToGetParams({
            mini: true,
            url: this.pageUrl,
          })
      );
    },
    twitterLink() {
      window.open(
        "https://www.twitter.com/share" +
          objectToGetParams({
            url: this.pageUrl,
          })
      );
    },
  },
};
</script>
