<template>
  <div class="lg:hidden">
    <div class="flex items-center mb-3">
      <img
        class="w-16 h-16"
        :src="require(`../../assets/svg/icons/logo-${logo}.svg`)"
      >
      <h2 class="ml-4 font-bold text-4xl">
        {{ title }}
      </h2>
    </div>
    <p
      v-if="description"
      class="mb-8"
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
