<template>
  <div class="relative pt-8">
    <router-link
      :to="{ name: 'Highway', params: { slug: slug } }"
      class="absolute top-0 right-6 w-4"
    >
      <img
        class="w-6 h-6"
        src="../../assets/svg/icons/close.svg"
      >
    </router-link>
    <div class="flex items-center mb-4">
      <img
        class="w-16 h-16"
        :src="require(`../../assets/svg/icons/icon-${segment.segmentSlug}.svg`)"
      >
      <Heading
        :level="3"
        class="mb-0 ml-4"
      >
        {{ $t(slug + '.segments.' + segment.segmentSlug + '.title') }}
      </Heading>
    </div>
    <div
      class="bg-gray text-white text-lg inline-block px-2 py-1 leading-none mx-auto mb-2"
      v-html="$t(slug + '.segments.' + segment.segmentSlug + '.status')"
    />
    <div
      v-html="$t(slug + '.segments.' + segment.segmentSlug + '.description')"
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
    color: {
      type: String,
      default: "",
    },
    slug: {
      type: String,
      default: "",
    },
    segment: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style></style>
