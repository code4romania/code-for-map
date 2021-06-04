<template>
  <router-link
    :to="{
      name: 'Segment',
      params: {
        slug: slug,
        segment: segmentSlug,
      },
    }"
    class="bg-white hidden lg:block border-2 py-1 px-3 absolute z-30 rounded-full opacity-60 hover:opacity-100"
    :class="
      `border-${color}-500 ${hasProjects ? 'opacity-100' : ''}`
    "
    :style="{ top: segmentButton.btn.top, left: segmentButton.btn.left }"
  >
    <div
      v-if="segmentButton.icon_left"
      class="flex items-center"
    >
      <img
        class="w-8 h-8"
        :src="
          require(`../../assets/svg/icons/icon-${segmentButton.segmentSlug}.svg`)
        "
      >
      <div class="text-left font-bold leading-5 ml-2">
        {{ segmentButton.title }}
      </div>
    </div>
    <div
      v-else
      class="flex items-center"
    >
      <div class="text-right font-bold leading-5 mr-2">
        {{ segmentButton.title }}
      </div>
      <img
        class="icon"
        :src="
          require(`../../assets/svg/icons/icon-${segmentButton.segmentSlug}.svg`)
        "
      >
    </div>
  </router-link>
</template>

<script>
export default {
  /** Component name. */
  name: "HighwayButton",
  /** Recived props. */
  props: {
    segmentButton: {
      type: Object,
      default: () => {},
    },
    slug: {
      type: String,
      default: "",
    },
    segmentSlug: {
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
