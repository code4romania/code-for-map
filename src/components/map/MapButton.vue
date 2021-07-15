<template>
  <div
    class="absolute z-30"
    :style="{ top: top, left: left }"
  >
    <!-- Main map button links to highway -->
    <router-link
      :to="{ name: 'Highway', params: { slug: highway.slug } }"
      class="py-1 px-4 border-4 block rounded-full bg-white transition-transform transform relative hover:scale-110 lg:py-2 z-20 hover:z-30"
      :class="[
        `border-${highway.color}-500`,
        $route.name != 'Map' ? 'opacity-30 hover:opacity-100' : '',
      ]"
    >
      <div
        class="flex items-center"
        @click="updateIframe()"
      >
        <img
          class="w-6 h-6"
          :src="require(`../../assets/svg/icons/logo-${highway.slug}.svg`)"
        >
        <div
          class="block ml-2 font-bold text-sm leading-4 lg:text-lg lg:leading-none"
          v-html="highwayTitle"
        />
      </div>
    </router-link>
  </div>
</template>

<script>
import { postMessageHeight } from "../../utils/postMessage";

export default {
  name: "MapButton",
  props: {
    highway: {
      type: Object,
      default: () => {},
    },
    top: {
      type: String,
      default: "",
    },
    left: {
      type: String,
      default: "",
    },
    color: {
      type: String,
      default: "",
    },
  },
  computed: {
    highwayTitle() {
      const subs = this.highway.title.split(' ')
      return "<div>" + subs[0] + " " + subs[1] + "</div>" + subs[2]
    }
  },
  methods: {
    updateIframe() {
      postMessageHeight();
    }
  }
};
</script>

<style>
.btn-opacity {
  opacity: 0.35;
}
.btn-opacity:hover,
.router-link-active {
  opacity: 1;
}
</style>
