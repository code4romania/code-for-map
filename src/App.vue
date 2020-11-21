<template>
  <div id="app">
    <!-- Vue router transition and initialize routes router -->
    <router-view :data="data" />
    <!-- Content displayed on all pages -->
    <b-container fluid>
      <b-row>
        <!-- Text under the map -->
        <b-col cols="12" class="py-3">
          <p>{{ data.application_texts.map_page.text_1 }}</p>
        </b-col>
      </b-row>
      <!-- Call to action buttons -->
      <b-row>
        <b-col cols="12">
          <div
            class="d-flex align-items-center justify-content-around justify-content-md-start"
          >
            <CallToAction :action="data.call_to_action.share" />
            <CallToAction :action="data.call_to_action.donate" />
          </div>
        </b-col>
      </b-row>
      <!-- Send sms -->
      <SendSMS :sms="data.application_texts.info_sms" />
    </b-container>
    <!-- Parteners -->
    <Parteners :parteners="data.parteners" />
  </div>
</template>

<script>
/** Import data object. */
import data from "./data/data.js";
/** Import components. */
import CallToAction from "./components/CallToAction";
import SendSMS from "./components/SendSMS";
import Parteners from "./components/Parteners";

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
