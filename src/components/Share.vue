<template>
  <div class="Share">
    <p class="mb-4">{{data.description}}</p>
    <!-- TODO: share functionality dropdown button -->
    <!-- <a href="#" :class="'btn btn-' + data.share.color + ' btn-custom px-5 mr-2 text-white btn-lg'">
      {{data.share.title}}
    </a> -->

    <b-dropdown right :text="data.share.title" :variant="data.share.color" class="mr-2 text-white dropdown-custom">
      <b-dropdown-item @click="facebookLink" class="text-center">{{ data.share.facebook.title }}</b-dropdown-item>
      <b-dropdown-item @click="linkedinLink" class="text-center">{{ data.share.linkedin.title }}</b-dropdown-item>
      <b-dropdown-item @click="twitterLink" class="text-center">{{ data.share.twitter.title }}</b-dropdown-item>
    </b-dropdown>

    <a :href="data.donate.link" :class="'btn btn-' + data.donate.color + ' btn-custom px-5 mx-2 text-white btn-lg'">
      {{data.donate.title}}
    </a>
  </div>
</template>

<script>
import objectToGetParams from "../utils/objectToGetParams";

export default {
  name: "Share",
  props: {
    data: Object
  },
  data(){
    return{
      pageUrl: location.href
    }
  },
  methods: {
    facebookLink() {
      window.open(
        `https://www.facebook.com/sharer/sharer.php` +
          objectToGetParams({
            u: this.pageUrl,
          }),
      );
    },
    linkedinLink() {
      window.open(
        'https://linkedin.com/shareArticle' +
          objectToGetParams({
            mini: true,
            url: this.pageUrl
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
