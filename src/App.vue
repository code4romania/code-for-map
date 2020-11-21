<template>
  <div id="app">
    <!-- Vue router transition and initialize routes router -->
    <transition name="fade">
      <router-view :data="data" />
    </transition>

    <!--#####################################################
    ############# Content displayed on all pages ############
    ######################################################-->

    <!-- CallToActionComponent -->
    <CallToAction :call_to_action="data.call_to_action" />
    <!-- Send sms component -->
    <SendSMS :sms="data.application_texts.info_sms" />
    <!-- Parteners component -->
    <Parteners :parteners="data.parteners" />
  </div>
</template>

<script>
/** Import data object. */
import data from "./data/data.js";
/** Import components. */
import CallToAction from "./components/call-to-action/CallToAction";
import SendSMS from "./components/SendSMS";
import Parteners from "./components/parteners/Parteners";

export default {
  /** Component name. */
  name: "App",
  /** Registered components. */
  components: {
    CallToAction,
    SendSMS,
    Parteners
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
/** Scale buttons on hover. */
.scale:hover {
  transform: scale(1.05);
}
</style>
