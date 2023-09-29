/* eslint-disable */

import Vue from "vue";
import VueRouter from "vue-router";

import postMessage from "../utils/postMessage";

import Root from "./Root.vue";
import Map from "../views/Map.vue";
import Highway from "../views/Highway.vue";
import Segment from "../views/Segment.vue";
import ProjectModal from "../components/ProjectModal.vue";

Vue.use(VueRouter);

/** Views paths */
const routes = [
  {
    path: "/",
    redirect: 'ro',
  },
  {
    path: "/:locale",
    component: Root,
    children: [
      {
        path: '',
        component: Map,
        name: 'Map'
      },
      {
        path: ":slug",
        name: "Highway",
        component: Highway,
        props: true,
      },
      {
        path: ":slug/:segment",
        name: "Segment",
        component: Segment,
        props: true,
        children: [
          {
            path: ":solution",
            name: "ProjectModal",
            component: ProjectModal,
            props: true,
            meta: {
              showModal: true,
            },
          },
        ],
      },
    ],
  },
];

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
      postMessage({ navigate: topPosition });
      return {
        x: 0,
        y: topPosition,
      };
    }
  },
});

export default router;
