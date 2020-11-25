<template>
  <div id="app">
    <b-container fluid>

      <b-row class="mb-5">
        <b-col xs="12" lg="3">
          <div class="Info d-flex justify-content-between flex-column h-100">
            <div>
              <div class="Header">
                <h1 class="text-strong-blue" v-html="data.header.title" />
                <p v-html="data.header.description" />
              </div>
              <BackToMap :back="data.back_to_map" />
            </div>
            <Legend :legend="data.map_legend" />
          </div>
        </b-col>
        <b-col xs="12" lg="9">
          <router-view :data="data" />
        </b-col>
      </b-row>

      <b-row class="mb-5">
        <b-col xs="12" md="6">
          <SendSMS :data="data.sms" />
        </b-col>
        <div class="w-100 d-md-none"></div>
        <b-col xs="12" md="6">
          <Share :data="data.call_to_action" />
        </b-col>
      </b-row>

      <b-row class="mb-5">
        <b-col>
          <h1 class="text-strong-blue">{{data.more_info.title}}</h1>
          <div v-html="data.more_info.description" />
        </b-col>
        <div class="w-100 d-md-none"></div>
        <b-col>
          <!-- TODO: open youtube video in place  -->
          <!-- data.more_info.youtube -->
          <img class="img-fluid" :src="data.more_info.thumbnail" />
        </b-col>
      </b-row>
      <b-row>
        <b-col xs="12" lg="6">
          <div class="Partners">
            <div class="Partners-title mb-4">
              <h3 class="text-strong-blue">{{data.partners.title}}</h3>
              <p>{{data.partners.description}}</p>
            </div>
            <div class="Partners-list">
              <PartnersList :list="data.partners.main" />
              <PartnersList :list="data.partners.secondary" :col="4" />
            </div>
          </div>
        </b-col>
      </b-row>

    </b-container>
  </div>
</template>

<script>
import data from "./data/data.js";

import BackToMap from "./components/BackToMap";
import Legend from "./components/Legend";
import PartnersList from "./components/PartnersList";
import SendSMS from "./components/SendSMS";
import Share from "./components/Share";

export default {
  name: "App",
  components: {
    BackToMap,
    Legend,
    PartnersList,
    SendSMS,
    Share
  },
  data() {
    return {
      data: {}
    };
  },
  created() {
    this.data = data;
  }
};
</script>
