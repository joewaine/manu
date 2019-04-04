import Vue from "vue";

require("intersection-observer");

import VueObserveVisibility from "vue-observe-visibility";
import VueRouter from "vue-router";

import App from "./App.vue";
import VueScrollTo from "vue-scrollto";
import AOS from "aos";
import "aos/dist/aos.css";

import Home from "./views/Home.vue";
import Page1 from "./views/Page1.vue";
import Page2 from "./views/Page2.vue";
import Page3 from "./views/Page3.vue";
import Page4 from "./views/Page4.vue";
import Page5 from "./views/Page5.vue";

Vue.use(VueObserveVisibility);

Vue.use(VueScrollTo, {
	duration: 650,
	easing: "ease"
});

const aosConfig = {
	offset: 120,
	delay: 0,
	duration: 700,
	easing: "ease",
	once: true,
	anchorPlacement: "top-bottom"
};

Vue.config.productionTip = false;
Vue.use(VueRouter);

const router = new VueRouter({
	mode: "hash",
	base: __dirname,
	routes: [
		{ path: "/", component: Home },
		{ path: "/page1", component: Page1 },
		{ path: "/page2", component: Page2 },
		{ path: "/page3", component: Page3 },
		{ path: "/page4", component: Page4 },
		{ path: "/page5", component: Page5 }
	]
});

new Vue({
	created() {
		let html = document.documentElement;
		html.classList.remove("no-js");
		AOS.init(aosConfig);
	},
	router,
	render: h => h(App)
}).$mount("#app");
