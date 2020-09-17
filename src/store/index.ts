import { createStore } from "vuex";

export default createStore({
  state: {
    theme: "auto",
    appName: "Simple Design System",
    releases: [],
    settings: {
      github: "jshimkoski/simple-design-system",
    },
  },
  getters: {
    theme: (state) => {
      return state.theme;
    },
    appName: (state) => {
      return state.appName;
    },
    releases: (state) => {
      return state.releases;
    },
    lastRelease(state) {
      if (state.releases.length < 1) return {};
      return state.releases[0];
    },
  },
  mutations: {
    TOGGLE_THEME(state) {
      state.theme =
        state.theme === "auto"
          ? "light"
          : state.theme === "light"
          ? "dark"
          : "auto";
    },
    SET_RELEASES(state, releases) {
      state.releases = releases;
    },
  },
  actions: {
    toggleTheme(context) {
      context.commit("TOGGLE_THEME");
    },
    async fetchReleases({ commit, state }) {
      if (!state.settings.github) {
        return;
      }

      const options = { headers: {} };
      if (process.env.GITHUB_TOKEN) {
        options.headers = {
          Authorization: `token ${process.env.GITHUB_TOKEN}`,
        };
      }
      let releases = [];
      try {
        const data = await fetch(
          `https://api.github.com/repos/${state.settings.github}/releases`,
          options
        )
          .then((res) => {
            if (!res.ok) {
              throw new Error(res.statusText);
            }
            return res;
          })
          .then((res) => res.json());
        releases = data
          .filter((r: { draft: any }) => !r.draft)
          .map(
            (release: {
              name: any;
              tag_name: any;
              published_at: any;
              body: any;
            }) => {
              return {
                name: (release.name || release.tag_name).replace(
                  "Release ",
                  ""
                ),
                date: release.published_at,
                body: release.body,
              };
            }
          );
      } catch (e) {
        releases = [];
      }

      const getMajorVersion = (r: {
        name: string;
        date: string | number | Date;
      }) => r.name && Number(r.name.substring(1, 2));
      releases.sort(
        (
          a: { name: string; date: string | number | Date },
          b: { name: string; date: string | number | Date }
        ) => {
          const aMajorVersion = getMajorVersion(a);
          const bMajorVersion = getMajorVersion(b);
          if (aMajorVersion !== bMajorVersion) {
            return <any>bMajorVersion - <any>aMajorVersion;
          }
          return <any>new Date(b.date) - <any>new Date(a.date);
        }
      );

      commit("SET_RELEASES", releases);
    },
  },
  modules: {},
});
