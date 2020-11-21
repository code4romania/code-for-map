<template>
  <b-col cols="12">
    <b-row>
      <b-col cols="7" class="mb-4 d-flex align-items-center">
        <img width="80px" :src="logo" />
        <h2 class="ml-2">{{ title }}</h2>
      </b-col>
      <b-col cols="12">
        <p>{{ description }}</p>
      </b-col>
    </b-row>
  </b-col>
</template>

<script>
export default {
  name: "MobileHighwayNameAndLogo",
  props: {
    logo: String,
    title: String,
    description: String
  }
};
</script>

<style></style>
