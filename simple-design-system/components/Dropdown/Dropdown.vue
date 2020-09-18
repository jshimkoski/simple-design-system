<template>
  <div
    ref="root"
    class="sds-dropdown"
    @keyup.esc.stop="close"
    :up="dropUp"
    :right="right"
  >
    <div class="button-wrapper" @click.stop="toggle">
      <slot />
    </div>
    <transition name="fade-scale">
      <nav
        v-if="modelValue"
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
import { defineComponent, reactive, ref, toRefs, watch } from "vue";

import debounce from "../../helpers/debounce";

export default defineComponent({
  name: "Dropdown",
  props: {
    modelValue: {
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
  setup(props, { emit }) {
    const root = ref(null);

    const state = reactive({
      dropUp: false,
      bottom: "auto",
    });

    function close() {
      emit("update:modelValue", false);
    }

    function toggle() {
      emit("update:modelValue", !props.modelValue);
    }

    function handleOutsideClick(e: any) {
      if (root.value === null) return;
      if (!(root.value as any).contains(e.target)) {
        close();
      }
    }

    function handleKeyUp(e: KeyboardEvent) {
      if (e.keyCode === 27) {
        close();
      }
    }

    function positionDropdown() {
      if (root.value === null) return;
      const spaceBelow =
        window.innerHeight - (root.value as any).getBoundingClientRect().bottom;
      const notEnoughSpaceBelow: boolean = spaceBelow < props.maxHeight;
      state.dropUp = notEnoughSpaceBelow;
      state.bottom = state.dropUp
        ? (root.value as any).clientHeight + "px"
        : "auto";
    }

    watch(
      () => props.modelValue,
      (value) => {
        if (value) {
          // wait for next pass before listening for events
          // on document
          setTimeout(() => {
            document.addEventListener("click", handleOutsideClick);
            document.addEventListener("keyup", handleKeyUp);
            document.addEventListener(
              "scroll",
              debounce(positionDropdown, 150)
            );
            window.addEventListener("resize", debounce(positionDropdown, 150));
          }, 0);
          positionDropdown();
        } else {
          document.removeEventListener("click", handleOutsideClick);
          document.removeEventListener("keyup", handleKeyUp);
          document.removeEventListener(
            "scroll",
            debounce(positionDropdown, 150)
          );
          window.removeEventListener("resize", debounce(positionDropdown, 150));
        }
      }
    );

    return {
      root,
      ...toRefs(state),
      close,
      toggle,
      handleOutsideClick,
      handleKeyUp,
      positionDropdown,
    };
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

.sds-dropdown[right="true"] nav {
  @apply right-0;
}

.fade-scale-enter-active,
.fade-scale-leave-active {
  @apply transition-all duration-75;
}

.fade-scale-enter-from,
.fade-scale-leave-to {
  @apply opacity-0 transform scale-90;
}
</style>
