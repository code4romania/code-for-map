<template>
  <div id="app">
    <b-container fluid>

      <b-row class="Header-wrap" no-gutters>
        <b-col xs="12" lg="3">
          <div class="Info">
            <div class="Header">
              <h1 class="text-strong-blue mb-3" v-html="data.header.title" />
              <p v-html="data.header.description" />
            </div>
            <router-link :to="{ name: 'Map' }" class="BackToMap mb-4 d-inline-block d-lg-none" v-if="data.back_to_map.visible">
              <div class="d-flex align-items-center">
                <svg class="icon"><use xlink:href="#chevron-left"></use></svg>
                <div class="ml-2 text-primary border-bottom border-primary">
                  {{ data.general.back_to_map }}
                </div>
              </div>
            </router-link>
            <Legend :legend="data.map_legend" class="mt-4"/>
          </div>
        </b-col>
        <b-col xs="12" lg="9">
          <router-view :data="data" />
        </b-col>
      </b-row>

      <div class="embed-responsive embed-responsive-16by9 Video">
        <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/XHVvEhmrlkA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>

      <h1 class="text-strong-blue text-center mb-5">{{data.more_info.work.title}}</h1>

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
        <b-col cols="12" class="text-center my-5">
          <a class="btn btn-strong-blue btn-lg px-5" :href="data.more_info.download_pdf_link" target="_blank">{{data.more_info.download_pdf_cta}}</a>
        </b-col>
      </b-row>

      <h1 class="text-strong-blue text-center mb-5">{{data.more_info.how.title}}</h1>

      <b-row class="mb-5">
        <b-col xs="12" md="6" xl="3" class="mb-4">
          <SendSMS :data="data.sms" />
          <div class="mb-3">{{data.call_to_action.donate.spacer}}</div>
          <a :href="data.call_to_action.donate.link" class="btn btn-lg btn-green px-5">{{data.call_to_action.donate.title}}</a>
        </b-col>
        <b-col xs="12" md="6" xl="3" class="mb-4">
          <h3 class="text-primary mb-4">{{data.call_to_action.partner.title}}</h3>
          <div v-html="data.call_to_action.partner.content" />
          <a :href="data.call_to_action.partner.link" class="btn btn-lg btn-primary px-5">{{data.call_to_action.partner.label}}</a>
        </b-col>
        <b-col xs="12" md="6" xl="3" class="mb-4">
          <h3 class="text-primary mb-4">{{data.call_to_action.sponsor.title}}</h3>
          <div v-html="data.call_to_action.sponsor.content" />
          <a :href="data.call_to_action.sponsor.link" class="btn btn-lg btn-primary px-5">{{data.call_to_action.sponsor.label}}</a>
        </b-col>
        <b-col xs="12" md="6" xl="3" class="mb-4">
          <h3 class="text-primary mb-4">{{data.call_to_action.share.title}}</h3>
          <div v-html="data.call_to_action.share.content" />
          <Share :share="data.call_to_action.share" />
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

      <p class="Disclaimer"><small><strong>*</strong> Valoarea Donaţiei este de 4 EUR/lună. Suma alocată cauzei este de 4 Euro. Nu se percepe TVA pentru donaţiile de pe abonament. În reţelele Digi Mobil, Orange şi Telekom România Mobile, pentru cartelele preplătite, TVA-ul a fost reţinut la achiziţionarea creditului. Pentru donaţiile de pe cartele preplătite, în reţeaua Vodafone utilizatorii nu plătesc TVA.Campanie realizată cu sprijinul Digi Mobil, Orange Romania, Telekom Romania Mobile şi Vodafone Romania.</small></p>

    </b-container>
  </div>
</template>

<script>
import debouce from "lodash.debounce"

import data from "./data/data.js";

import postMessage from "./utils/postMessage";

import Legend from "./components/Legend";
import PartnersList from "./components/PartnersList";
import SendSMS from "./components/SendSMS";
import Share from "./components/Share";

export default {
  name: "App",
  components: {
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
