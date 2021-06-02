<template>
  <div
    class="absolute"
    :style="{ top: top, left: left }"
  >
    <!-- Main map button links to highway -->
    <router-link
      :to="{ name: 'Highway', params: { slug: highway.slug } }"
      class="py-1 px-4 border-4 block rounded-full bg-white transition-transform transform relative hover:scale-110 hover:z-20 lg:py-2"
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
          class="icon"
          :src="require(`../../assets/svg/icons/logo-${highway.slug}.svg`)"
        >
        <div
          class="block ml-2 font-bold text-sm leading-4 lg:text-lg lg:leading-none"
        >
          {{ highway.title }}
        </div>
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
