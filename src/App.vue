<template>
  <div id="app">
    <b-container fluid>
      <div class="MapHero mb-5 mt-4">
        <b-row
          no-gutters
          class="Header-wrap"
        >
          <b-col lg="3">
            <div class="Info">
              <div class="Header">
                <h1
                  class="text-strong-blue mb-3"
                  v-html="data.header.title"
                />
                <p v-html="data.header.description" />
              </div>
              <Legend :legend="data.map_legend" />
            </div>
          </b-col>
        </b-row>
        <b-row
          id="map"
          no-gutters
          align-v="end"
          class="MapHero-wrap"
        >
          <b-col
            lg="9"
            offset-lg="3"
            xl="10"
            offset-xl="2"
            class="MapHero-map"
          >
            <router-link
              v-if="data.back_to_map.visible"
              :to="{ name: 'Map' }"
              class="BackToMap mb-4 d-inline-block d-lg-none"
            >
              <div class="d-flex align-items-center">
                <img
                  class="icon icon-md"
                  src="./assets/svg/icons/chevron-left.svg"
                >
                <div class="ml-2 text-primary border-bottom border-primary">
                  {{ data.general.back_to_map }}
                </div>
              </div>
            </router-link>
            <router-view :data="data" />
          </b-col>
        </b-row>
      </div>

      <b-row
        class="mb-5"
        align-v="center"
      >
        <b-col
          lg="4"
          class="mb-4"
        >
          <h1 class="text-strong-blue mb-4">
            {{ data.more_info.title }}
          </h1>
          <p class="pr-5">
            {{ data.more_info.description }}
          </p>
        </b-col>
        <b-col lg="8">
          <div class="embed-responsive embed-responsive-16by9 Video">
            <iframe
              class="embed-responsive-item"
              src="https://www.youtube.com/embed/XHVvEhmrlkA?modestbranding=1&autohide=2&showinfo=0&controls=0"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          </div>
        </b-col>
      </b-row>

      <h1 class="text-strong-blue mb-4">
        {{ data.more_info.work.title }}
      </h1>

      <b-row
        class="mb-5"
        align-v="stretch"
      >
        <b-col
          v-for="(step, index) in data.more_info.work.steps"
          :key="'item-' + index"
          md="6"
          class="mb-4 BorderBox-wrap"
        >
          <div class="BorderBox">
            <div class="d-flex align-items-center justify-content-start mb-4">
              <img
                class="icon icon-xl mr-4"
                :src="require(`./assets/svg/icons/icon-${step.icon}.svg`)"
              >
              <h2 class="text-strong-blue">
                {{ step.title }}
              </h2>
            </div>
            <div v-html="step.content" />
          </div>
        </b-col>
        <b-col
          cols="12"
          class="my-5 text-center"
        >
          <a
            class="btn btn-strong-blue btn-lg px-5"
            :href="data.more_info.download_pdf_link"
            target="_blank"
            @click.prevent="downloadPlan()"
          >{{ data.more_info.download_pdf_cta }}</a>
        </b-col>
      </b-row>

      <h1 class="text-strong-blue mb-4">
        {{ data.more_info.how.title }}
      </h1>

      <b-row
        class="mb-5 mt-5 HowWeDigi"
        align-v="stretch"
      >
        <b-col
          md="6"
          xl="3"
          class="mb-4"
        >
          <div class="d-flex flex-column justify-content-between SendSMS-wrap">
            <SendSMS
              :data="data.sms"
              :call-to-action="data.call_to_action"
            />
            <div>
              <a
                :href="data.call_to_action.donate.link"
                class="btn btn-lg btn-green px-4"
                target="_parent"
              >{{ data.call_to_action.donate.title }}</a>
            </div>
          </div>
        </b-col>
        <b-col
          md="6"
          xl="3"
          class="mb-4"
        >
          <div class="d-flex flex-column justify-content-between">
            <div>
              <h3 class="text-primary mb-4">
                {{ data.call_to_action.partner.title }}
              </h3>
              <div v-html="data.call_to_action.partner.content" />
            </div>
            <div>
              <a
                :href="data.call_to_action.partner.link"
                class="btn btn-lg btn-primary px-4"
                target="_parent"
              >{{ data.call_to_action.partner.label }}</a>
            </div>
          </div>
        </b-col>
        <b-col
          md="6"
          xl="3"
          class="mb-4"
        >
          <div class="d-flex flex-column justify-content-between">
            <div>
              <h3 class="text-primary mb-4">
                {{ data.call_to_action.sponsor.title }}
              </h3>
              <div v-html="data.call_to_action.sponsor.content" />
            </div>
            <div>
              <a
                :href="data.call_to_action.sponsor.link"
                class="btn btn-lg btn-primary px-4"
                target="_parent"
              >{{ data.call_to_action.sponsor.label }}</a>
            </div>
          </div>
        </b-col>
        <b-col
          md="6"
          xl="3"
          class="mb-4"
        >
          <div class="d-flex flex-column justify-content-between">
            <div>
              <h3 class="text-primary mb-4">
                {{ data.call_to_action.share.title }}
              </h3>
              <div v-html="data.call_to_action.share.content" />
            </div>
            <div>
              <Share :share="data.call_to_action.share" />
            </div>
          </div>
        </b-col>
      </b-row>

      <h1 class="text-strong-blue mb-4">
        {{ data.more_info.faqs_title }}
      </h1>

      <b-row
        class="mb-5 mt-5"
        align-v="stretch"
      >
        <b-col
          v-for="(question, index) in data.more_info.faqs"
          :key="'item-' + index"
          md="6"
          class="mb-4 BorderBox-wrap"
        >
          <div class="BorderBox">
            <div class="d-flex align-items-center justify-content-start mb-4">
              <h2 class="text-strong-blue">
                {{ question.question }}
              </h2>
            </div>
            <div v-html="question.answer" />
          </div>
        </b-col>
      </b-row>

      <b-row>
        <b-col lg="6">
          <div class="Partners-title mb-4">
            <h1 class="text-strong-blue">
              {{ data.partners.title }}
            </h1>
            <p>{{ data.partners.description }}</p>
          </div>
        </b-col>
        <div class="w-100" />
        <b-col lg="6">
          <PartnersList
            :list="data.partners.main"
            :col="3"
          />
        </b-col>
      </b-row>
      <b-row>
        <b-col lg="8">
          <PartnersList
            :list="data.partners.secondary"
            :col="4"
          />
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <PartnersList
            :list="data.partners.others"
            :col="6"
          />
        </b-col>
      </b-row>

      <p class="Disclaimer">
        <small><strong>*</strong> {{ data.sms.disclaimer }}</small>
      </p>
    </b-container>
  </div>
</template>

<script>
import debouce from "lodash.debounce";
import { saveAs } from "file-saver";

import data from "./data/ro.json";

import { postMessageHeight } from "./utils/postMessage";

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
    Share,
  },
  data() {
    return {
      data: {},
    };
  },
  created() {
    this.data = data;
  },
  mounted() {
    postMessageHeight();

    window.onresize = debouce(() => {
      postMessageHeight();
    }, 500);
  },
  methods: {
    downloadPlan() {
      const request = new XMLHttpRequest();

      request.open("GET", this.data.more_info.download_pdf_link, true);
      request.responseType = "blob";

      request.onload = () => {
        const blob = new Blob([request.response], { type: "application/pdf" });

        saveAs(blob, "Code_4_Romania_-_Digitalizam_Romania_impreuna.pdf");

        this.$gtag.event("download", {
          event_label: "plan downloaded",
        });
      };

      request.send();
    },
  },
};
</script>
