import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/guide",
    name: "Getting Started Guide",
    component: () =>
      import(/* webpackChunkName: "guide" */ "../views/Guide.vue"),
  },
  {
    path: "/components",
    name: "Components",
    component: () =>
      import(/* webpackChunkName: "components" */ "../views/Components.vue"),
  },
  {
    path: "/examples",
    name: "Examples",
    component: () =>
      import(/* webpackChunkName: "examples" */ "../views/Examples.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
