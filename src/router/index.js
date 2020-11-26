/* eslint-disable */

import Vue from "vue";
import VueRouter from "vue-router";
/** Imported Views */
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

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
