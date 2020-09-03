<template>
  <sds-layout-sidebar
    sticky-header
    sidebar-class="hidden md:block bg-gray-100 border-r shadow md:w-1/3 lg:w-1/4"
  >
    <template #header>
      <sds-navbar class="bg-glass" nav-class="gap-2">
        <template #brand>
          <h1 class="text-lg">
            <router-link
              to="/"
              active-class="active"
              exact
              @click.native="scrollToTop"
              >{{ appName }}</router-link
            >
            <span class="ml-2 text-gray-700 text-sm">{{
              lastRelease.name
            }}</span>
          </h1>
        </template>
        <template #nav>
          <router-link
            to="/"
            active-class="active"
            class="nav nav-red nav-underline"
            exact
            @click.native="scrollToTop"
            >Home</router-link
          >
          <router-link
            to="/guide"
            active-class="active"
            class="nav nav-red nav-underline"
            @click.native="scrollToTop"
            >Guide</router-link
          >
          <router-link
            to="/components"
            active-class="active"
            class="nav nav-red nav-underline"
            @click.native="scrollToTop"
            >Components</router-link
          >
          <router-link
            to="/examples"
            active-class="active"
            class="nav nav-red nav-underline"
            @click.native="scrollToTop"
            >Examples</router-link
          >
        </template>
        <template #nav-right>
          <button
            @click="toggleTheme"
            class="capitalize nav nav-red nav-pill md:my-2"
          >
            <svg
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="inline-block h-5 fill-current align-middle"
            >
              <path
                v-if="theme === 'light'"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
              <path
                v-if="theme === 'dark'"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
              <path
                v-if="theme === 'auto'"
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg>
            <span class="md:sr-only ml-2">{{ theme }} theme</span>
          </button>
        </template>
      </sds-navbar>
    </template>
    <router-view />
    <template #footer>
      <div class="py-12 bg-gray-100 text-gray-700 text-center text-sm">
        {{ appName }}
      </div>
    </template>
  </sds-layout-sidebar>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters, mapActions } from "vuex";

export default Vue.extend({
  computed: {
    ...mapGetters(["theme", "appName", "lastRelease"]),
  },
  mounted() {
    this.$store.dispatch("fetchReleases");
  },
  metaInfo() {
    return {
      titleTemplate: `%s | ${this.appName}`,
      htmlAttrs: {
        class: this.theme,
      },
    };
  },
  methods: {
    ...mapActions(["toggleTheme"]),
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
});
</script>
