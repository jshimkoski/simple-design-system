<template>
  <sds-layout-stacked>
    <sds-navbar slot="header" sticky-top>
      <h1 slot="brand" class="text-lg">
        <router-link to="/" active-class="active" exact>{{
          appName
        }}</router-link>
      </h1>
      <nav slot="nav" class="nav-group">
        <router-link
          slot="item"
          to="/"
          active-class="active"
          class="nav nav-red nav-underline"
          exact
          >Home</router-link
        >
        <router-link
          slot="item"
          to="/guide"
          active-class="active"
          class="nav nav-red nav-underline"
          >Guide</router-link
        >
        <router-link
          slot="item"
          to="/components"
          active-class="active"
          class="nav nav-red nav-underline"
          >Components</router-link
        >
        <router-link
          slot="item"
          to="/examples"
          active-class="active"
          class="nav nav-red nav-underline"
          >Examples</router-link
        >
      </nav>
      <nav slot="nav-right" class="nav-group md:py-1">
        <button
          slot="item"
          @click="toggleTheme"
          class="capitalize nav nav-red nav-pill"
        >
          {{ theme }} theme
        </button>
      </nav>
    </sds-navbar>
    <main slot="content">
      <router-view />
    </main>
    <footer
      slot="footer"
      class="py-12 bg-gray-100 text-gray-700 text-center text-sm"
    >
      {{ appName }}
    </footer>
  </sds-layout-stacked>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters, mapActions } from "vuex";

export default Vue.extend({
  computed: {
    ...mapGetters(["theme", "appName"]),
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
  },
});
</script>
