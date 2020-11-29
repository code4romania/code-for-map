<template>
  <div id="app">
    <b-container fluid>
      <div class="MapHero mb-5">
        <b-row
          no-gutters
          class="Header-wrap"
        >
          <b-col
            lg="3"
          >
            <div class="Info">
              <div class="Header">
                <h1
                  class="text-strong-blue mb-3"
                  v-html="data.header.title"
                />
                <p v-html="data.header.description" />
              </div>
              <Legend
                :legend="data.map_legend"
              />
              <router-link
                v-if="data.back_to_map.visible"
                :to="{ name: 'Map' }"
                class="BackToMap mb-4 d-inline-block d-lg-none"
              >
                <div class="d-flex align-items-center">
                  <svg class="icon"><use xlink:href="#chevron-left" /></svg>
                  <div class="ml-2 text-primary border-bottom border-primary">
                    {{ data.general.back_to_map }}
                  </div>
                </div>
              </router-link>
            </div>
          </b-col>
        </b-row>
        <b-row
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
            <router-view :data="data" />
          </b-col>
        </b-row>
      </div>

      <b-row class="mb-5" align-v="center">
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
        <b-col
          lg="8"
        >
          <div class="embed-responsive embed-responsive-16by9 Video">
            <iframe
              class="embed-responsive-item"
              src="https://www.youtube.com/embed/XHVvEhmrlkA"
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
          class="mb-4 HowWeWork-wrap"
        >
          <div class="HowWeWork">
            <div class="d-flex align-items-center justify-content-start mb-4">
              <svg class="icon icon-xl mr-4"><use :xlink:href="'#icon-' + step.icon" /></svg>
              <h2 class="text-primary">
                {{ step.title }}
              </h2>
            </div>
            <p>{{ step.content }}</p>
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
          <SendSMS
            :data="data.sms"
            :call-to-action="data.call_to_action"
          />
        </b-col>
        <b-col
          md="6"
          xl="3"
          class="mb-4"
        >
          <div>
            <h3 class="text-primary mb-4">
              {{ data.call_to_action.partner.title }}
            </h3>
            <div v-html="data.call_to_action.partner.content" />
            <a
              :href="data.call_to_action.partner.link"
              class="btn btn-lg btn-primary px-5"
              target="_parent"
            >{{ data.call_to_action.partner.label }}</a>
          </div>
        </b-col>
        <b-col
          md="6"
          xl="3"
          class="mb-4"
        >
          <div>
            <h3 class="text-primary mb-4">
              {{ data.call_to_action.sponsor.title }}
            </h3>
            <div v-html="data.call_to_action.sponsor.content" />
            <a
              :href="data.call_to_action.sponsor.link"
              class="btn btn-lg btn-primary px-5"
              target="_parent"
            >{{ data.call_to_action.sponsor.label }}</a>
          </div>
        </b-col>
        <b-col
          md="6"
          xl="3"
          class="mb-4"
        >
          <div>
            <h3 class="text-primary mb-4">
              {{ data.call_to_action.share.title }}
            </h3>
            <div v-html="data.call_to_action.share.content" />
            <Share :share="data.call_to_action.share" />
          </div>
        </b-col>
      </b-row>

      <b-row>
        <b-col
          lg="6"
        >
          <div class="Partners-title mb-4">
            <h1 class="text-strong-blue">
              {{ data.partners.title }}
            </h1>
            <p>{{ data.partners.description }}</p>
          </div>
        </b-col>
        <div class="w-100" />
        <b-col
          lg="6"
        >
          <PartnersList
            :list="data.partners.main"
            :col="3"
          />
        </b-col>
      </b-row>
      <b-row>
        <b-col
          lg="8"
        >
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
import { saveAs } from 'file-saver';

import data from "./data/ro.json";

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
    postMessage({ height: document.documentElement.scrollHeight });

    window.onresize = debouce(() => {
      postMessage({ height: document.documentElement.scrollHeight });
    }, 500);
  },
  methods: {
    downloadPlan() {
      const request = new XMLHttpRequest();

      request.open("GET", this.data.more_info.download_pdf_link, true);
      request.responseType = "blob";

      request.onload = () => {
        const file = new Blob([request.response], { type: "application/pdf" });

        saveAs(blob, "Code_4_Romania_-_Digitalizam_Romania_impreuna.pdf");
      }

      request.send();
    }
  }
};
</script>
