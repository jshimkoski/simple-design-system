<template>
  <div class="sds-layout-stacked">
    <header v-if="hasHeaderSlot" :class="{ 'sticky-header': stickyHeader }">
      <slot name="header" />
    </header>
    <main>
      <slot />
    </main>
    <footer v-if="hasFooterSlot" :class="{ 'sticky-footer': stickyFooter }">
      <slot name="footer" />
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LayoutStacked",
  props: {
    stickyHeader: {
      type: Boolean,
      default: false,
    },
    stickyFooter: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
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
.sds-layout-stacked {
  @apply grid min-h-screen w-full;

  grid-template-areas:
    "header"
    "content"
    "footer";

  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
}

header {
  @apply z-30;
  grid-area: header;
}

main {
  grid-area: content;
}

footer {
  @apply z-20;
  grid-area: footer;
}

.sticky-header {
  @apply sticky top-0 shadow;
}

.sticky-footer {
  @apply sticky bottom-0 shadow;
}
</style>
