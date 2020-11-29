/* eslint-disable */

import Vue from "vue";
import VueGtag from "vue-gtag";

// import VueScrollTo from "vue-scrollto";

import { BootstrapVue } from "bootstrap-vue";

import App from "./App.vue";
import router from "./router";

import "./scss/app.scss";

Vue.config.productionTip = false;

Vue.use(VueGtag, {
  config: {
    id: 'G-951ZZD09FJ'
  }
}, router);

// Vue.use(VueScrollTo)
Vue.use(BootstrapVue);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
