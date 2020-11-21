/* eslint-disable */

import Vue from "vue";
import VueRouter from "vue-router";
/** Imported Views */
import Map from "../views/Map.vue";
import Highway from "../views/Highway.vue";
import Solution from "../views/Solution.vue";

Vue.use(VueRouter);

/** Views paths */
const routes = [
  {
    path: "/",
    name: "Map",
    component: Map
  },
  {
    path: "/code4ro/:slug",
    name: "Highway",
    component: Highway,
    props: true
  },
  {
    path: "/:slug/:_slug",
    name: "Solution",
    component: Solution,
    props: true
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
