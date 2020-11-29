<template>
  <div class="HighwayHeader d-lg-none">
    <div class="d-flex align-items-center HighwayHeader-logo mb-3">
      <img
        class="icon icon-lg"
        :src="require(`../../assets/svg/icons/logo-${logo}.svg`)"
      >
      <h2 class="ml-3 mb-0">
        {{ title }}
      </h2>
    </div>
    <p
      v-if="description"
      class="d-lg-none mb-4"
      v-html="description"
    />
  </div>
</template>

<script>
export default {
  name: "HighwayHeader",
  props: {
    logo: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
  },
};
</script>
