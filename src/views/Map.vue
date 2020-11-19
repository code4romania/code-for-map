<template>
  <b-container fluid>
    <b-row>
      <!-- Map Legend -->
      <b-col cols="12" lg="3" class="pt-5">
        <div class="h-100 mr-lg-n5 d-flex flex-column justify-content-between">
          <Header :header="data.header" />
          <Legend class="d-none d-lg-block" :legend="data.map_legend" />
        </div>
      </b-col>
      <b-col cols="12" lg="9">
        <div class="ml-lg-n5">
          <!-- Map background -->
          <img class="img-fluid" :src="data.map_bg" />
          <!-- Display map buttons on map -->
          <div v-for="highway in data.code4ro_map" :key="highway.id">
            <!-- MapButton component -->
            <MapButton :highway="highway" />
          </div>
        </div>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12" class="py-3">
        <p>{{ data.application_texts.map_page.text_1 }}</p>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12">
        <div class="d-flex align-items-center justify-content-around">
          <CallToAction :action="data.call_to_action.share" />
          <CallToAction :action="data.call_to_action.donate" />
        </div>
      </b-col>
    </b-row>
    <SendSMS :sms="data.application_texts.info_sms" />
  </b-container>
</template>

<script>
/** Import components. */
import MapButton from "../components/map/MapButton";
import Header from "../components/Header";
import Legend from "../components/map/Legend";
import CallToAction from "../components/CallToAction";
import SendSMS from "../components/SendSMS";

export default {
  /** Component name. */
  name: "Map",
  /** Recived props. */
  props: {
    data: {
      type: Object,
    },
  },
  /** Registered components. */
  components: {
    MapButton,
    Header,
    Legend,
    CallToAction,
    SendSMS,
  },
};
</script>
