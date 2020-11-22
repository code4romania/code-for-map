<template>
  <div id="app">
    <div class="Info px-4">
      <Header :header="data.header" />
      <BackToMapLink :back="data.back_link" />
      <Legend :legend="data.map_legend" />
    </div>

    <!-- SAMPLE, NEED TO REPLACE ALL THE OTHERS & LAYER MAPS & HIGHWAYS -->
    <!-- TODO: try svgo on all files with sprite & see what's up -->
    <!-- <svg><use xlink:href="#map-bg"></use></svg> -->

    <router-view :data="data" />

    <!-- <CallToAction :call_to_action="data.call_to_action" />
    <SendSMS :sms="data.application_texts.info_sms" />
    <Partners :Partners="data.Partners" /> -->
  </div>
</template>

<script>
/** Import data object. */
import data from "./data/data.js";
/** Import components. */
import Header from "./components/header/Header";
import BackToMapLink from "./components/header/BackToMapLink";
import Legend from "./components/header/Legend";
// import CallToAction from "./components/call-to-action/CallToAction";
// import SendSMS from "./components/SendSMS";
// import Partners from "./components/Partners/Partners";

export default {
  /** Component name. */
  name: "App",
  /** Registered components. */
  components: {
    Header,
    BackToMapLink,
    Legend
    // CallToAction,
    // SendSMS,
    // Partners
  },
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
</style>
