<template>
  <router-link
    :to="{
      name: 'Segment',
      params: {
        slug: slug,
        segment: segment.segmentSlug,
      },
    }"
    class="bg-white hidden lg:block border py-1 px-3 absolute z-30 rounded-full opacity-60 hover:opacity-100"
    :class="
      `border-${color}-500 ${hasProjects ? 'opacity-100' : ''}`
    "
    :style="{ top: segment.btn.top, left: segment.btn.left }"
  >
    <div
      v-if="segment.icon_left"
      class="flex items-center"
    >
      <img
        class="w-8 h-8"
        :src="
          require(`../../assets/svg/icons/icon-${segment.segmentSlug}.svg`)
        "
      >
      <div class="text-left font-bold leading-5 ml-2">
        {{ $t(slug + '.segments.' + segment.segmentSlug + '.title') }}
      </div>
    </div>
    <div
      v-else
      class="flex items-center"
    >
      <div class="text-right font-bold leading-5 mr-2">
        {{ $t(slug + '.segments.' + segment.segmentSlug + '.title') }}
      </div>
      <img
        class="w-6 h-6"
        :src="
          require(`../../assets/svg/icons/icon-${segment.segmentSlug}.svg`)
        "
      >
    </div>
  </router-link>
</template>

<script>
export default {
  name: "HighwayButton",
  props: {
    segment: {
      type: Object,
      default: () => {},
    },
    slug: {
      type: String,
      default: "",
    },
    color: {
      type: String,
      default: "",
    },
    hasProjects: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
