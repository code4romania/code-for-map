import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import HighwayMap from "../components/map/HighwayMap.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/about/:id",
		name: "About",
		component: About,
		props: true
	},
	{
		path: "/highway/:id",
		name: "Highway",
		component: HighwayMap,
		props: true
	}
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router;
