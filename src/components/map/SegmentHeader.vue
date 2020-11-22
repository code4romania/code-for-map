<template>
  <b-col cols="12">
    <b-row>
      <b-col cols="10" class="d-flex justify-content-center">
        <img class="ml-5" width="150px" :src="icon" />
      </b-col>
      <b-col cols="2" class="d-flex justify-content-center">
        <router-link :to="{ name: 'Highway', params: { slug: slug } }">
          <img :src="close" />
        </router-link>
      </b-col>
    </b-row>
    <div>
      <h2 class="text-center font-weight-light py-3" :class="`text-${color}`">
        {{ title }}
      </h2>
      <p>{{ description }}</p>
    </div>
  </b-col>
</template>

<script>
export default {
  name: "SegmentHeader",
  props: {
    icon: String,
    slug: String,
    color: String,
    title: String,
    description: String,
    close: String
  }
};
</script>

<style></style>
