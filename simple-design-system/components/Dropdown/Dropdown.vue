<template>
  <div class="sds-dropdown" @keyup.esc.stop="close" :up="dropUp" :right="right">
    <div class="button-wrapper" @click.stop="toggle">
      <slot />
    </div>
    <transition name="fade-scale">
      <nav
        v-if="value"
        :class="[menuClass]"
        :style="{ bottom, maxHeight: `${maxHeight}px` }"
        @click.stop="close"
      >
        <slot name="menu" />
      </nav>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import debounce from "../../helpers/debounce";

export default Vue.extend({
  name: "Dropdown",
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    maxHeight: {
      type: Number,
      default: 210,
    },
    menuClass: {
      type: String,
      default: "",
    },
    right: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      dropUp: false,
      bottom: "auto",
    };
  },
  watch: {
    value() {
      if (this.value) {
        // wait for next pass before listening for events
        // on document
        setTimeout(() => {
          document.addEventListener("click", this.handleOutsideClick);
          document.addEventListener("keyup", this.handleKeyUp);
          document.addEventListener(
            "scroll",
            debounce(this.positionDropdown, 150)
          );
          window.addEventListener(
            "resize",
            debounce(this.positionDropdown, 150)
          );
        }, 0);
        this.positionDropdown();
      } else {
        document.removeEventListener("click", this.handleOutsideClick);
        document.removeEventListener("keyup", this.handleKeyUp);
        document.removeEventListener(
          "scroll",
          debounce(this.positionDropdown, 150)
        );
        window.removeEventListener(
          "resize",
          debounce(this.positionDropdown, 150)
        );
      }
    },
  },
  methods: {
    close() {
      this.$emit("input", false);
    },
    toggle() {
      this.$emit("input", !this.value);
    },
    handleOutsideClick(e: any) {
      if (!this.$el.contains(e.target)) {
        this.close();
      }
    },
    handleKeyUp(e: KeyboardEvent) {
      if (e.keyCode === 27) {
        this.close();
      }
    },
    positionDropdown() {
      const spaceBelow =
        window.innerHeight - this.$el.getBoundingClientRect().bottom;
      const notEnoughSpaceBelow: boolean = spaceBelow < this.maxHeight;
      this.dropUp = notEnoughSpaceBelow;
      this.bottom = this.dropUp ? this.$el.clientHeight + "px" : "auto";
    },
  },
});
</script>

<style lang="postcss" scoped>
.sds-dropdown {
  @apply inline-block relative;
}

nav {
  @apply block absolute my-1 p-1 bg-gray-100 border rounded shadow-lg z-40 whitespace-no-wrap overflow-auto;
  min-width: theme("width.48");
}

.sds-dropdown[right] nav {
  @apply right-0;
}

.fade-scale-enter-active,
.fade-scale-leave-active {
  @apply transition-all duration-75;
}

.fade-scale-enter,
.fade-scale-leave-to {
  @apply opacity-0 transform scale-90;
}
</style>
