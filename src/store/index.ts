import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    theme: "auto",
    appName: "Simple Design System",
  },
  getters: {
    theme: (state) => {
      return state.theme;
    },
    appName: (state) => {
      return state.appName;
    },
  },
  mutations: {
    toggleTheme(state) {
      state.theme =
        state.theme === "auto"
          ? "light"
          : state.theme === "light"
          ? "dark"
          : "auto";
    },
  },
  actions: {
    toggleTheme(context) {
      context.commit("toggleTheme");
    },
  },
  modules: {},
});
