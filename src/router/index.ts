import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home as any,
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

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
