<template>
  <sds-layout-stacked>
    <header slot="header">
      <sds-navbar>
        <h1 slot="brand" class="text-lg">
          <router-link to="/" active-class="active" exact>{{
            appName
          }}</router-link>
        </h1>
        <sds-nav slot="nav" type="underline" variant="red">
          <router-link slot="item" to="/" active-class="active" exact
            >Home</router-link
          >
          <router-link slot="item" to="/guide" active-class="active"
            >Guide</router-link
          >
          <router-link slot="item" to="/components" active-class="active"
            >Components</router-link
          >
          <router-link slot="item" to="/examples" active-class="active"
            >Examples</router-link
          >
        </sds-nav>
        <sds-nav slot="nav-right" type="pill" variant="red">
          <button slot="item" @click="toggleTheme" class="capitalize">
            {{ theme }} theme
          </button>
        </sds-nav>
      </sds-navbar>
    </header>
    <main slot="content">
      <router-view />
    </main>
    <footer slot="footer" class="py-12 text-center text-sm border-t">
      {{ appName }}, version 1.0.0
    </footer>
  </sds-layout-stacked>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
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
};
</script>
