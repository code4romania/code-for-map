import '@babel/polyfill';
import 'mutationobserver-shim';
import Vue from 'vue';
import { BootstrapVue } from 'bootstrap-vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

/** Use Bootstrap. */
Vue.use(BootstrapVue);
/** Import custom styles and overrided bootstrap variables. */
import "./scss/app.scss";

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
