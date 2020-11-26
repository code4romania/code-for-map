<template>
  <div id="app">
    <b-container fluid>

      <b-row class="mb-5" no-gutters>
        <b-col xs="12" lg="3">
          <div class="Info d-flex flex-column h-100">
            <div class="Header">
              <h1 class="text-strong-blue mb-3" v-html="data.header.title" />
              <p v-html="data.header.description" />
            </div>
            <BackToMap :back="data.back_to_map" class="d-lg-none" />
            <Legend :legend="data.map_legend" class="mt-4"/>
          </div>
        </b-col>
        <b-col xs="12" lg="9">
          <router-view :data="data" />
        </b-col>
      </b-row>

      <b-row class="mb-5">
        <b-col>
          <div v-html="data.more_info.description" class="mb-4 lead" />
          <a class="btn btn-strong-blue btn-lg mb-5 px-5" :href="data.more_info.download_pdf_link" target="_blank">{{data.more_info.download_pdf_cta}}</a>
        </b-col>
        <div class="w-100 d-md-none"></div>
        <b-col>
          <!-- TODO: open youtube video in place  -->
          <!-- data.more_info.youtube -->
          <img class="img-fluid" :src="data.more_info.thumbnail" />
        </b-col>
      </b-row>

      <h1 class="text-strong-blue mb-5">{{data.more_info.work.title}}</h1>

      <b-row class="mb-5">
        <b-col
          xs="12" md="6" class="mb-4"
          v-for="(step, index) in data.more_info.work.steps"
          :key="'item-' + index">
          <div class="d-flex align-items-center justify-content-start mb-4">
            <svg class="icon icon-xl mr-4"><use :xlink:href="'#icon-' + step.icon"></use></svg>
            <h2 class="text-primary">{{step.title}}</h2>
          </div>
          <p>{{step.content}}</p>
        </b-col>
      </b-row>

      <h1 class="text-strong-blue mb-5">{{data.more_info.how.title}}</h1>

      <b-row class="mb-5">
        <b-col xs="12" md="6" lg="3" class="mb-4">
          <h3 class="text-primary mb-4">{{data.call_to_action.donate.title}}</h3>
          <SendSMS :data="data.sms" />
        </b-col>
        <b-col xs="12" md="6" lg="3" class="mb-4">
          <h3 class="text-primary mb-4">{{data.call_to_action.partner.title}}</h3>
          <div v-html="data.call_to_action.partner.content" />
        </b-col>
        <b-col xs="12" md="6" lg="3" class="mb-4">
          <h3 class="text-primary mb-4">{{data.call_to_action.sponsor.title}}</h3>
          <div v-html="data.call_to_action.sponsor.content" />
        </b-col>
        <b-col xs="12" md="6" lg="3" class="mb-4">
          <h3 class="text-primary mb-4">{{data.call_to_action.share.title}}</h3>
          <Share :data="data.call_to_action.share" />
        </b-col>
        <!-- <b-col
          xs="12" md="6" class="mb-4"
          v-for="(step, index) in data.more_info.how.steps"
          :key="'item-' + index">
          <div class="d-flex align-items-center justify-content-start mb-2">
            <svg class="icon icon-xl mr-4"><use :xlink:href="'#icon-' + item.icon"></use></svg>
            <h2 class="text-primary">{{item.title}}</h2>
          </div>
          {{item.content}}
        </b-col> -->
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
import debouce from "lodash.debounce"

import data from "./data/data.js";

import postMessage from "./utils/postMessage";

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
  },
  mounted() {
    postMessage({ height: document.body.scrollHeight });

    window.onresize = debouce(() => {
      postMessage({ height: document.body.scrollHeight });
    }, 500);
  }
};
</script>
