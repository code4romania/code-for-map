<template>
  <div class="Share">
    <p class="mb-4">{{data.description}}</p>
    <!-- TODO: share functionality dropdown button -->
    <!-- <a href="#" :class="'btn btn-' + data.share.color + ' btn-custom px-5 mr-2 text-white btn-lg'">
      {{data.share.title}}
    </a> -->

    <b-dropdown right :text="data.share.title" :variant="data.share.color" class="mr-2 text-white dropdown-custom">
      <b-dropdown-item class="text-center">item</b-dropdown-item>
      <b-dropdown-item @click="facebookLink(pageUrl)" class="text-center">Facebook</b-dropdown-item>
      <b-dropdown-item @click="linkedinLink(pageUrl)" class="text-center">Linkedin</b-dropdown-item>
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
      pageUrl: this.$route.fullPath
    }
  },
  methods: {
    facebookLink(url) {
      window.open(
        `https://www.facebook.com/sharer/sharer.php` +
          objectToGetParams({
            u: url,
          }),
      );
    },
    linkedinLink(url) {
        window.open(
          'https://linkedin.com/shareArticle' +
            objectToGetParams({
              mini: true,
              url: url
            })
        );
      }
  },
};
</script>
