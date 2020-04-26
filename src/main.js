import Vue from "vue";
import VueMeta from "vue-meta";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Import all Web Components
import "./wc";

// Import styles
import "./css/index.css";

Vue.config.productionTip = false;
// Vue.config.ignoredElements = [/sds-*/];

Vue.use(VueMeta, {});

new Vue({
  router,
  store,
  render: (h) => h(App),
  mounted: () => document.dispatchEvent(new Event("x-app-rendered")),
}).$mount("#app");
