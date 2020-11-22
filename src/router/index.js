/* eslint-disable */

import Vue from "vue";
import VueRouter from "vue-router";
/** Imported Views */
import Map from "../views/Map.vue";
import Highway from "../views/Highway.vue";
import Segment from "../views/Segment.vue";
import Project from "../views/Project.vue";

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
    path: "/:slug/:_slug",
    name: "Segment",
    component: Segment,
    props: true
  },
  {
    path: "/:slug/:_slug/:__slug",
    name: "Project",
    component: Project,
    props: true
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
