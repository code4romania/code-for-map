<template>
  <b-row class="my-5">
    <b-col cols="12" md="6">
      <h3 class="text-center">{{ youtubeContent.title }}</h3>
      <p>{{ youtubeContent.description }}</p>
    </b-col>
    <b-col cols="12" md="6">
      <div class="d-flex align-items-center justify-content-center">
        {{ youtubeContent.video }}
      </div>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "YoutubeContent",
  props: {
    youtubeContent: {
      type: Object,
    },
  },
};
</script>

<style>
</style>
