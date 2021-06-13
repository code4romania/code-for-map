<template>
  <div id="app">
    <Navigation />

    <div class="container px-4 mx-auto lg:pt-16">
      <t-section>
        <div class="relative">
          <div
            class="grid grid-cols-8 gap-4 lg:absolute lg:top-0 lg:left-0 lg:z-10 lg:h-full"
          >
            <div class="col-span-8 lg:col-span-2">
              <div class="flex flex-col lg:justify-between lg:h-full">
                <div class="my-8 lg:-mt-4">
                  <Heading
                    :level="1"
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
                class="mb-8 inline-flex items-center lg:hidden"
              >
                <img
                  class="w-8 h-8"
                  src="./assets/svg/icons/chevron-left.svg"
                >
                <div class="ml-2 border-b-2 border-gray-500 text-gray-500">
                  {{ data.general.back_to_map }}
                </div>
              </router-link>
              <router-view :data="data" />
            </div>
          </div>
        </div>
      </t-section>

      <t-section>
        <VideoBanner
          :title="data.more_info.title"
          :description="data.more_info.description"
          :download-pdf-link="data.more_info.download_pdf_link"
          :download-pdf-cta="data.more_info.download_pdf_cta"
          @onClickCTA="trackDownload"
        />
      </t-section>
      
      <t-section>
        <Heading
          :level="1"
          v-html="data.more_info.work.title"
        />
        <div class="grid md:grid-cols-2 gap-x-8 gap-y-6">
          <div
            v-for="(step, index) in data.more_info.work.steps"
            :key="'item-' + index"
          >
            <CardBorderDashed class="px-10">
              <div class="flex items-center mb-4">
                <img
                  class="w-20 h-20 mr-6"
                  :src="require(`./assets/svg/icons/icon-${step.icon}.svg`)"
                >
                <Heading :level="2">
                  {{ step.title }}
                </Heading>
              </div>
              <div
                class="flex flex-col space-y-4"
                v-html="step.content"
              />
            </CardBorderDashed>
          </div>
        </div>
      </t-section>


      <t-section>
        <Heading
          :level="1"
          v-html="data.more_info.how.title"
        />
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4 my-12">
          <CardBorderDashed
            class="flex flex-col justify-between"
            color="green"
          >
            <SendSMS
              :title="data.sms.title"
              :description="data.sms.description"
              :call-to-action="data.call_to_action"
            />
            <div class="flex flex-wrap">
              <t-button
                color="green"
                size="lg"
                :href="data.call_to_action.donate.link"
                target="_parent"
              >
                {{ data.call_to_action.donate.title }}
              </t-button>
            </div>
          </CardBorderDashed>

          <CardBorderDashed
            class="flex flex-col justify-between"
            color="gray"
          >
            <div>
              <Heading
                :level="3"
                class="mb-6"
              >
                {{ data.call_to_action.partner.title }}
              </Heading>
              <div
                class="space-y-4 mb-4"
                v-html="data.call_to_action.partner.content"
              />
            </div>
            <div class="flex flex-wrap">
              <t-button
                color="gray"
                size="lg"
                :href="data.call_to_action.partner.link"
              >
                {{ data.call_to_action.partner.label }}
              </t-button>
            </div>
          </CardBorderDashed>

          <CardBorderDashed
            class="flex flex-col justify-between"
            color="gray"
          >
            <Heading
              :level="3"
              class="mb-6"
            >
              {{ data.call_to_action.sponsor.title }}
            </Heading>
            <div
              class="space-y-4 mb-4"
              v-html="data.call_to_action.sponsor.content"
            />
            <div class="flex flex-wrap">
              <t-button
                color="gray"
                size="lg"
                :href="data.call_to_action.sponsor.link"
              >
                {{ data.call_to_action.sponsor.label }}
              </t-button>
            </div>
          </CardBorderDashed>

          <CardBorderDashed
            class="flex flex-col justify-between"
            color="gray"
          >
            <Heading
              :level="3"
              class="mb-6"
              v-html="data.call_to_action.share.title"
            />
            <div
              class="space-y-4 mb-4"
              v-html="data.call_to_action.share.content"
            />
            <Share :share="data.call_to_action.share" />
          </CardBorderDashed>
        </div>
      </t-section>

      <t-section>
        <div
          class="mb-6 lg:w-1/2"
        >
          <Heading
            :level="1"
          >
            {{ data.partners.title }}
          </Heading>
          <p>{{ data.partners.description }}</p>
        </div>
        <div class="space-y-6">
          <PartnersList
            :list="data.partners.main"
          />
          <PartnersList :list="data.partners.secondary" />
          <PartnersList :list="data.partners.others" />
        </div>
        <p class="mt-20 lg:w-1/2">
          <small><strong>*</strong> {{ data.sms.disclaimer }}</small>
        </p>
      </t-section>
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
import TButton from "./components/Button";
import TSection from "./components/Section";
import VideoBanner from "./components/VideoBanner";
import Heading from "./components/Heading";
import CardBorderDashed from './components/CardBorderDashed';

export default {
  name: "App",
  components: {
    Navigation,
    Legend,
    PartnersList,
    SendSMS,
    Share,
    VideoBanner,
    TButton,
    TSection,
    Heading,
    CardBorderDashed
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

        this.trackDownload();
      };

      request.send();
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
