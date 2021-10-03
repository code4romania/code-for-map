<template>
  <div class="relative pt-8">
    <img
      class="w-24 mx-auto mb-4"
      :src="require(`../../assets/svg/icons/icon-${icon}.svg`)"
    >
    <div class="text-center">
      <div
        class="bg-gray text-white text-lg inline-block px-2 py-1 leading-none mx-auto mb-2"
        v-html="$t(status)"
      />
      <Heading
        :level="3"
        class="mb-5"
      >
        {{ $t(title) }}
      </Heading>
    </div>
    <div
      v-if="description"
      v-html="$t(description)"
    />
  </div>
</template>

<script>
import Heading from '../Heading.vue';
export default {
  name: "SegmentHeader",
  components: { Heading },
  props: {
    icon: {
      type: String,
      default: "",
    },
    slug: {
      type: String,
      default: "",
    },
    color: {
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
    status: {
      type: String,
      default: "",
    },
  },
};
</script>

<style></style>
