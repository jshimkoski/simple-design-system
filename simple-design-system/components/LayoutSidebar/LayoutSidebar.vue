<template>
  <div class="sds-layout-sidebar">
    <aside v-if="hasSidebarSlot" :class="[sidebarClass]">
      <template v-if="stickySidebar">
        <div :class="{ 'sticky-sidebar': stickySidebar }">
          <slot name="sidebar" />
        </div>
      </template>
      <template v-else>
        <slot name="sidebar" />
      </template>
    </aside>
    <section>
      <header v-if="hasHeaderSlot" :class="{ 'sticky-header': stickyHeader }">
        <slot name="header" />
      </header>
      <main>
        <slot />
      </main>
      <footer v-if="hasFooterSlot" :class="{ 'sticky-footer': stickyFooter }">
        <slot name="footer" />
      </footer>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "LayoutSidebar",
  props: {
    stickyHeader: {
      type: Boolean,
      default: false,
    },
    stickySidebar: {
      type: Boolean,
      default: false,
    },
    stickyFooter: {
      type: Boolean,
      default: false,
    },
    sidebarClass: {
      type: String,
      default: "",
    },
  },
  computed: {
    hasSidebarSlot(): Boolean {
      return !!this.$slots.sidebar;
    },
    hasHeaderSlot(): Boolean {
      return !!this.$slots.header;
    },
    hasFooterSlot(): Boolean {
      return !!this.$slots.footer;
    },
  },
});
</script>

<style lang="postcss" scoped>
.sds-layout-sidebar {
  @apply flex;
}

section {
  @apply grid flex-grow min-h-screen w-full;

  grid-template-areas:
    "header"
    "content"
    "footer";

  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
}

header {
  @apply z-40;
  grid-area: header;
}

main {
  grid-area: content;
}

footer {
  @apply z-30;
  grid-area: footer;
}

.sticky-header {
  @apply sticky top-0 shadow;
}

.sticky-sidebar {
  @apply sticky top-0;
}

.sticky-footer {
  @apply sticky bottom-0 shadow;
}
</style>
