/* eslint-disable */

import Vue from "vue";
import VueRouter from "vue-router";
/** Imported Views */
import Map from "../views/Map.vue";
import Highway from "../views/Highway.vue";
import Segment from "../views/Segment.vue";

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
    props: true
  },
  {
    path: "/:slug/:segment/:solution",
    name: "Project",
    component: Segment,
    props: true
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
