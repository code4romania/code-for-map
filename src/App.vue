<template>
  <div id="app">
    <Navigation />

    <div class="container px-4 mx-auto lg:pt-16">
      <t-section>
        <div class="relative">
          <div
            class="grid grid-cols-8 gap-4 xl:absolute xl:top-0 xl:left-0 xl:z-20 xl:h-full"
          >
            <div class="col-span-8 lg:col-span-4 xl:col-span-2">
              <div class="flex flex-col">
                <div class="my-8 xl:mb-16">
                  <Heading
                    :level="1"
                  >
                    {{ $t('header.title') }}
                  </Heading>
                  <p v-html="$t('header.description')" />
                </div>
                <Legend class="xl:pt-16" />
              </div>
            </div>
          </div>

          <div
            id="map"
            class="grid grid-cols-8 gap-4"
          >
            <div class="col-span-8 xl:col-start-3 xl:z-10">
              <router-link
                v-if="data.back_to_map.visible"
                :to="{ name: 'Map' }"
                class="mb-8 inline-flex items-center lg:hidden"
              >
                <img
                  class="w-8 h-8"
                  src="./assets/svg/icons/chevron-left.svg"
                >
                <div class="ml-2 border-b border-gray-700 text-gray-700 text-lg">
                  {{ $t('general.back_to_map') }}
                </div>
              </router-link>
              <router-view :data="data" />
            </div>
          </div>
        </div>
      </t-section>

      <t-section>
        <VideoBanner :video="$t('video')" />
      </t-section>
      
      <t-section>
        <Heading
          :level="1"
        >
          {{ $t('general.title_how_we_work') }}
        </Heading>

        <div class="grid lg:grid-cols-2 gap-x-8 gap-y-6">
          <div
            v-for="(step, index) in $t('how_we_work.steps')"
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
        >
          {{ $t('general.title_how_to_help') }}
        </Heading>

        <div class="grid md:grid-cols-2 xl:grid-cols-4 gap-4 my-12">
          <CardBorderDashed
            class="flex flex-col justify-between"
            color="green"
          >
            <SendSMS />
            <div class="flex flex-wrap">
              <t-button
                color="green"
                size="lg"
                :href="$t('sms.call_to_action_link')"
                target="_parent"
              >
                {{ $t('sms.call_to_action') }}
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
                class="mb-6 text-gray"
              >
                {{ $t('partner.title') }}
              </Heading>
              <div
                class="space-y-4 mb-4"
                v-html="$t('partner.content')"
              />
            </div>
            <div class="flex flex-wrap">
              <t-button
                color="gray"
                size="lg"
                :href="$t('partner.link')"
              >
                {{ $t('partner.label') }}
              </t-button>
            </div>
          </CardBorderDashed>

          <CardBorderDashed
            class="flex flex-col justify-between"
            color="gray"
          >
            <Heading
              :level="3"
              class="mb-6 text-gray"
            >
              {{ $t('sponsor.title') }}
            </Heading>
            <div
              class="space-y-4 mb-4"
              v-html="$t('sponsor.content')"
            />
            <div class="flex flex-wrap">
              <t-button
                color="gray"
                size="lg"
                :href="$t('sponsor.link')"
              >
                {{ $t('sponsor.label') }}
              </t-button>
            </div>
          </CardBorderDashed>

          <CardBorderDashed
            class="flex flex-col justify-between"
            color="gray"
          >
            <Heading
              :level="3"
              class="mb-6 text-gray"
            >
              {{ $t('share.title') }}
            </Heading>
            <div
              class="space-y-4 mb-4"
              v-html="$t('share.content')"
            />
            <Share />
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
            {{ $t('partners.title') }}
          </Heading>
          <p>{{ $t('partners.description') }}</p>
        </div>
        <div class="space-y-6">
          <PartnersList
            :list="data.partners.main"
          />
          <PartnersList :list="data.partners.secondary" />
          <PartnersList :list="data.partners.others" />
        </div>
        <p class="mt-20 lg:w-2/3 text-xs">
          {{ $t('sms.disclaimer') }}
        </p>
      </t-section>
    </div>
  </div>
</template>

<script>
// import debouce from "lodash.debounce";
// import { saveAs } from "file-saver";

import data from "./data/data.json";

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
  methods: {
    // downloadPlan() {
    //   const request = new XMLHttpRequest();

    //   request.open("GET", this.$t('more_info.download_pdf_link'), true);
    //   request.responseType = "blob";

    //   request.onload = () => {
    //     const blob = new Blob([request.response], { type: "application/pdf" });

    //     saveAs(blob, "Code_4_Romania_-_Digitalizam_Romania_impreuna.pdf");

    //     this.trackDownload();
    //   };

    //   request.send();
    // },
    // trackDownload() {
    //   this.$gtag.event("plan-download", {
    //     event_category: "download",
    //     event_label: "plan-downloaded",
    //     value: "downloaded",
    //   });
    // },
  },
};
</script>
