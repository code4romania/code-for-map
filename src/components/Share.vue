<template>
  <div class="Share">
    <b-dropdown right :text="share.cta" :variant="share.color" size="lg">
      <b-dropdown-item @click="facebookLink" class="btn-large">Facebook</b-dropdown-item>
      <b-dropdown-item @click="linkedinLink" class="btn-large">Linkedin</b-dropdown-item>
      <a @click:href="facebookLink"></a>
    </b-dropdown>
  </div>
</template>

<script>
import objectToGetParams from "../utils/objectToGetParams";

export default {
  name: "Share",
  props: {
    share: Object
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
