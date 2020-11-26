<template>
  <div class="Share">
    <b-dropdown right :text="share.cta" :variant="share.color" class="mr-2 text-white dropdown-custom">
      <b-dropdown-item class="text-center">item</b-dropdown-item>
      <b-dropdown-item @click="facebookLink" class="text-center">Facebook</b-dropdown-item>
      <b-dropdown-item @click="linkedinLink" class="text-center">Linkedin</b-dropdown-item>
      <a @click:href="facebookLink"></a>
    </b-dropdown>
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
      console.log(this.$route)
    },
    linkedinLink() {
        window.open(
          'https://linkedin.com/shareArticle' +
            objectToGetParams({
              mini: true,
              url: this.pageUrl
            })
        );
      }
  },
};
</script>
