<template>
  <div
    class="sds-navbar"
    :mobile-menu-open="mobileMenuOpen"
    :hide-brand="!hasBrandSlot"
  >
    <div v-if="hasBrandSlot" class="brand">
      <slot name="brand" />
    </div>
    <div class="menu-wrapper">
      <button id="navbarMenuButton" @click="toggle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path
            class="heroicon-ui"
            d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
          />
        </svg>
      </button>
    </div>
    <nav
      v-if="hasNavLeftSlot"
      class="nav-left"
      :class="[navClass]"
      @click.stop="close"
    >
      <slot name="nav" aria-labelledby="navbarMenuButton" />
    </nav>
    <nav
      v-if="hasNavRightSlot"
      class="nav-right"
      :class="[navRightClass]"
      @click.stop="close"
    >
      <slot name="nav-right" aria-labelledby="navbarMenuButton" />
    </nav>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Navbar",
  props: {
    navClass: {
      type: String,
      default: "",
    },
    navRightClass: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      mobileMenuOpen: false,
    };
  },
  computed: {
    hasBrandSlot(): Boolean {
      return !!this.$slots.brand;
    },
    hasNavLeftSlot(): Boolean {
      return !!this.$slots.nav;
    },
    hasNavRightSlot(): Boolean {
      return !!this.$slots["nav-right"];
    },
  },
  mounted() {
    document.addEventListener("keyup", this.handleEscKey);
  },
  destroyed() {
    document.removeEventListener("keyup", this.handleEscKey);
  },
  methods: {
    handleEscKey(e: KeyboardEvent) {
      if (e.keyCode === 27) {
        this.close();
      }
    },
    toggle() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
    },
    close() {
      this.mobileMenuOpen = false;
    },
  },
});
</script>

<style lang="postcss" scoped>
.sds-navbar {
  @apply grid bg-bgcolor;

  grid-template-areas:
    "close-btn brand"
    "nav nav"
    "nav-right nav-right";

  grid-template-columns: auto 1fr;
  grid-template-rows: auto auto auto;
}

.sds-navbar[hide-brand] {
  grid-template-areas:
    "close-btn spacer"
    "nav nav"
    "nav-right nav-right";

  grid-template-columns: auto 1fr;
  grid-template-rows: auto auto auto;
}

.brand {
  @apply self-center;
  grid-area: brand;
}

.menu-wrapper {
  @apply self-center my-auto mx-2;
  grid-area: close-btn;
}

.sds-navbar[hide-brand] .brand {
  @apply hidden;
}

#navbarMenuButton {
  @apply bg-transparent border-transparent rounded p-1 my-2 h-10 w-10 cursor-pointer;
  fill: theme("colors.fgcolor");
}

#navbarMenuButton svg {
  @apply w-6 h-6 m-auto;
}

#navbarMenuButton:hover,
#navbarMenuButton:focus,
#navbarMenuButton:active,
.navbar[mobile-menu-open] #navbarMenuButton {
  @apply outline-none bg-gray-100 rounded-full;
}

#navbarMenuButton:active {
  filter: brightness(85%);
}

.nav-left {
  grid-area: nav;
}

.nav-right {
  grid-area: nav-right;
}

.nav-left,
.nav-right {
  @apply hidden self-center border-t p-4 h-full;
}

.sds-navbar[mobile-menu-open] .nav-left,
.sds-navbar[mobile-menu-open] .nav-right {
  @apply block;
}

@screen md {
  .sds-navbar {
    @apply grid gap-4 px-8;

    grid-template-areas: "brand nav nav-right";
    grid-template-columns: auto 1fr auto;
    grid-template-rows: 1fr;
  }

  .sds-navbar[hide-brand] {
    grid-template-areas: "nav nav-right";
    grid-template-columns: 1fr auto;
    grid-template-rows: 1fr;
  }

  .brand {
    @apply p-0;
  }

  .nav-left,
  .nav-right {
    @apply grid grid-flow-col border-0 p-0;
    grid-auto-columns: min-content;
  }

  .sds-navbar[mobile-menu-open] .nav-left,
  .sds-navbar[mobile-menu-open] .nav-right {
    @apply grid;
  }

  .menu-wrapper {
    @apply hidden;
  }
}
</style>
