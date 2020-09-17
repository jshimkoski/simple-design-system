import { createApp, h } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// simple design system
import Components from "../simple-design-system";

createApp({
  render: () => h(<any>App),
  mounted: () => document.dispatchEvent(new Event("x-app-rendered")),
})
  .use(router)
  .use(store)
  .use(Components)
  .mount("#app");
