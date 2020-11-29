/* eslint-disable */

import Vue from "vue";
import VueRouter from "vue-router";
import VueGtag from "vue-gtag";

import Map from "../views/Map.vue";
import Highway from "../views/Highway.vue";
import Segment from "../views/Segment.vue";
import ProjectModal from "../components/ProjectModal.vue"

Vue.use(VueRouter);

/** Views paths */
const routes = [
  {
    path: "/",
    name: "Map",
    component: Map
  },
  {
    path: "/:slug",
    name: "Highway",
    component: Highway,
    props: true
  },
  {
    path: "/:slug/:segment",
    name: "Segment",
    component: Segment,
    props: true,
    children: [
      {
        path: '/:slug/:segment/:solution',
        name: "ProjectModal",
        component: ProjectModal,
        props: true,
        meta: {
          showModal: true
        }
      }
    ]
  }
];

Vue.use(VueGtag, {
  config: {
    id: 'G-951ZZD09FJ',
  }
}, router);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from) {
    const locationHash = document.location.hash.slice(1);
    const elementToScroll = document.getElementById(locationHash);
    if (elementToScroll) {
      const topPosition =
        elementToScroll.getBoundingClientRect().top + window.pageYOffset;
      return {
        x: 0,
        y: topPosition,
      };
    }
  },
});

export default router;
