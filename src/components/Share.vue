<template>
  <div class="flex">
    <a
      :href="'https://www.facebook.com/sharer/sharer.php?u=' + mapURL"
      rel="noreferrer noopener"
      target="_blank"
      class="mr-4"
    >
      <img
        class="h-12 w-12"
        src="../assets/svg/icons/share-fb.svg"
      >
    </a>

    <a
      :href="'https://www.twitter.com/share?url=' + mapURL"
      rel="noreferrer noopener"
      target="_blank"
      class="mr-4"
    >
      <img
        class="h-12 w-12"
        src="../assets/svg/icons/share-tw.svg"
      >
    </a>

    <a
      :href="'https://linkedin.com/shareArticle?mini=true&url=' + mapURL"
      rel="noreferrer noopener"
      target="_blank"
      class="mr-4"
    >
      <img
        class="h-12 w-12"
        src="../assets/svg/icons/share-li.svg"
      >
    </a>
  </div>
</template>

<script>

export default {
  name: "Share",
  data() {
    return {
      mapURL: "https://code4.ro/putem",
    };
  },
};
</script>
