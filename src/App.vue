<template>
  <div id="app">
    <!-- Vue router transition and initialize routes router -->
    <transition name="fade">
      <router-view :data="data" />
    </transition>
  </div>
</template>

<script>
/** Import data object. */
import data from "./data/data.js";

export default {
  /** Component name. */
  name: "App",
  /** App state. */
  data() {
    return {
      data: {}
    };
  },
  /** Initialize data object in vue created life cycle. */
  created() {
    this.data = data;
  }
};
</script>

<style>
/** General app styles. */
/** Vue router transition effect. */
.fade-enter-active,
.fade-leave-active {
  transition-property: opacity;
  transition-duration: 0.1s;
}

.fade-enter-active {
  transition-delay: 0.1s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
.container-fluid {
  max-width: 1450px !important;
}
/** Scale buttons on hover. */
.scale:hover {
  transform: scale(1.05);
}
</style>
