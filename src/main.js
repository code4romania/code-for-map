/* eslint-disable */

import Vue from "vue";
import VueGtag from "vue-gtag";

import App from "./App.vue";
import router from "./router";

import "./scss/app.scss";
import i18n from "./i18n";

Vue.config.productionTip = false;

Vue.use(VueGtag, {
  config: {
    id: 'G-951ZZD09FJ',
  }
}, router);

new Vue({
  router,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
