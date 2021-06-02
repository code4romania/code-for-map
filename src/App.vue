<template>
  <div id="app">
    <Navigation />

    <div class="container px-4 mx-auto lg:pt-16">
      <div class="relative">
        <div class="grid grid-cols-8 gap-4 lg:absolute lg:top-0 lg:left-0 lg:z-10 lg:h-full">
          <div class="col-span-8 lg:col-span-2">
            <div class="flex flex-col lg:justify-between lg:h-full">
              <div class="mb-8">
                <h1
                  class="text-6xl font-bold text-blue-500 mb-4"
                  v-html="data.header.title"
                />
                <p v-html="data.header.description" />
              </div>
              <Legend :legend="data.map_legend" />
            </div>
          </div>
        </div>

        <div
          id="map"
          class="grid grid-cols-8 gap-4"
        >
          <div class="col-span-8 lg:col-start-3 xl:col-start-2">
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
          </div>
        </div>
      </div>

      <div class="grid grid-cols-12 gap-4 px-4">
        <div class="col-span-12 lg:col-span-4">
          <h1 class="text-strong-blue mb-4">
            {{ data.more_info.title }}
          </h1>
          <p
            class="mb-4 lg:pr-3"
            v-html="data.more_info.description"
          />
          <!-- <a
            class=" d-none d-lg-inline-block"
            :href="data.more_info.download_link"
            @click.prevent="downloadPlan()"
          >{{ data.more_info.download_pdf_cta }}</a> -->
          <a
            class=""
            :href="data.more_info.download_pdf_link"
            target="_blank"
            @click="trackDownload()"
          >
            {{ data.more_info.download_pdf_cta }}
          </a>
        </div>

        <div class="col-span-12 lg:col-span-4">
          <button
            v-if="!showVideo"
            class="btn btn-link"
            @click.prevent="playYT()"
          >
            <img
              class="img-fluid"
              :src="coverYT"
            >
          </button>
          <div
            v-else
            class="embed-responsive embed-responsive-16by9 Video"
          >
            <iframe
              class="embed-responsive-item"
              src="https://www.youtube.com/embed/XHVvEhmrlkA?modestbranding=1&autohide=2&showinfo=0&autoplay=1"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          </div>
        </div>
      </div>

      <h1 class="text-strong-blue mb-4">
        {{ data.more_info.work.title }}
      </h1>

      <div class="grid grid-cols-4 gap-4 px-4">
        <div
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
        </div>
      </div>

      <h1 class="text-strong-blue mb-4">
        {{ data.more_info.how.title }}
      </h1>

      <div class="grid grid-cols-4 gap-4 px-4">
        <div>
          <div>
            <SendSMS
              :data="data.sms"
              :call-to-action="data.call_to_action"
            />
            <div>
              <a
                :href="data.call_to_action.donate.link"
                class="btn btn-lg btn-green px-4"
                target="_parent"
              >
                {{ data.call_to_action.donate.title }}
              </a>
            </div>
          </div>
        </div>

        <div>
          <div>
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
              >
                {{ data.call_to_action.partner.label }}
              </a>
            </div>
          </div>
        </div>

        <div>
          <div>
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
              >
                {{ data.call_to_action.sponsor.label }}
              </a>
            </div>
          </div>
        </div>

        <div>
          <div>
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
        </div>
      </div>

      <h1 class="text-strong-blue">
        {{ data.partners.title }}
      </h1>
      <p>{{ data.partners.description }}</p>

      <PartnersList :list="data.partners.main" />
      <PartnersList :list="data.partners.secondary" />
      <PartnersList :list="data.partners.others" />

      <p class="Disclaimer">
        <small><strong>*</strong> {{ data.sms.disclaimer }}</small>
      </p>
    </div>
  </div>
</template>

<script>
import debouce from "lodash.debounce";
import { saveAs } from "file-saver";

import data from "./data/ro.json";

import { postMessageHeight } from "./utils/postMessage";

import Navigation from "./components/Navigation";
import Legend from "./components/Legend";
import PartnersList from "./components/PartnersList";
import SendSMS from "./components/SendSMS";
import Share from "./components/Share";

export default {
  name: "App",
  components: {
    Navigation,
    Legend,
    PartnersList,
    SendSMS,
    Share,
  },
  data() {
    return {
      data: {},
      coverYT: "",
      showVideo: false,
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

    this.coverYT = require("./assets/images/cover-yt.png");
  },
  methods: {
    downloadPlan() {
      const request = new XMLHttpRequest();

      request.open("GET", this.data.more_info.download_pdf_link, true);
      request.responseType = "blob";

      request.onload = () => {
        const blob = new Blob([request.response], { type: "application/pdf" });

        saveAs(blob, "Code_4_Romania_-_Digitalizam_Romania_impreuna.pdf");

        this.trackDownload();
      };

      request.send();
    },
    playYT() {
      this.showVideo = true;
    },
    trackDownload() {
      this.$gtag.event("plan-download", {
        event_category: "download",
        event_label: "plan-downloaded",
        value: "downloaded",
      });
    },
  },
};
</script>
