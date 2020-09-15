<template>
  <div class="sds-card" :type="type">
    <header v-if="hasHeaderSlot">
      <div class="header-inner">
        <div v-if="hasTitleSlot" class="title">
          <slot name="title" />
        </div>
        <div v-if="hasSubtitleSlot" class="subtitle">
          <slot name="subtitle" />
        </div>
      </div>
      <nav v-if="hasNavSlot" :class="[navClass]">
        <slot name="nav" />
      </nav>
    </header>
    <main>
      <slot />
    </main>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Card",
  props: {
    navClass: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "",
    },
  },
  computed: {
    hasHeaderSlot(): Boolean {
      return this.hasTitleSlot || this.hasSubtitleSlot || this.hasNavSlot;
    },
    hasTitleSlot(): Boolean {
      return !!this.$slots.title;
    },
    hasSubtitleSlot(): Boolean {
      return !!this.$slots.subtitle;
    },
    hasNavSlot(): Boolean {
      return !!this.$slots.nav;
    },
  },
});
</script>

<style lang="postcss" scoped>
.sds-card {
  @apply block bg-gray-100;
}

.subtitle {
  @apply text-sm text-gray-500;
}

main {
  @apply p-4;
}

nav {
  @apply ml-auto grid grid-flow-col border-0 p-0;
  grid-auto-columns: min-content;
}

header {
  @apply flex py-3 px-4;
}

.header-inner {
  @apply self-center flex-grow;
}

.sds-card[type="simple"],
.sds-card[type="raised"],
.sds-card[type="accented"] {
  @apply border;

  & header {
    @apply border-b;
  }
}

.sds-card[type="raised"] {
  @apply shadow-lg rounded;
}

.sds-card[type="accented"] {
  @apply border-0 border-t-2 border-gray-900;
}
</style>
