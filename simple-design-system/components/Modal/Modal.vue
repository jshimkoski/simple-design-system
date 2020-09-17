<template>
  <transition
    name="fade"
    @after-enter="showContent = true"
    @after-leave="$emit('update:modelValue', false)"
  >
    <div v-if="showModal" class="sds-modal backdrop" @click.self="close">
      <transition name="fade-scale" @after-leave="showModal = false">
        <div v-if="showContent" class="modal">
          <header>
            <div v-if="hasTitleSlot" class="title"><slot name="title" /></div>
            <button aria-label="close" class="close-btn" @click="close">
              <svg
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </header>
          <main>
            <slot />
          </main>
          <footer v-if="hasFooterSlot">
            <slot name="footer" />
          </footer>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Modal",
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      showModal: false,
      showContent: false,
    };
  },
  computed: {
    hasTitleSlot(): Boolean {
      return !!this.$slots.title;
    },
    hasFooterSlot(): any {
      return !!this.$slots.footer;
    },
  },
  watch: {
    modelValue() {
      if (this.modelValue) {
        this.showModal = true;
        document.documentElement.style.overflow = "hidden";
        // wait for next pass before listening for events
        // on document
        setTimeout(() => {
          document.addEventListener("keyup", this.handleEscKey);
        }, 0);
        return;
      }

      this.showContent = false;
      document.documentElement.style.overflow = "auto";
      document.removeEventListener("keyup", this.handleEscKey);
    },
  },
  methods: {
    close() {
      this.showContent = false;
    },
    handleEscKey(e: KeyboardEvent) {
      if (e.keyCode === 27) {
        this.close();
      }
    },
  },
});
</script>

<style lang="postcss" scoped>
.sds-modal {
  @apply block;
}

.backdrop {
  @apply block fixed inset-0 h-full py-0 px-6 overflow-auto z-50;
  background-color: rgba(255, 255, 255, 0.7);
  backdrop-filter: saturate(180%) blur(3px);

  :root.dark & {
    background-color: rgba(0, 0, 0, 0.7);
  }

  :root:not(.light) & {
    @media (prefers-color-scheme: dark) {
      background-color: rgba(0, 0, 0, 0.7);
    }
  }
}

.modal {
  @apply z-50 block relative my-12 mx-auto w-full bg-gray-100 shadow-xl rounded border;
}

header {
  @apply flex items-center p-6 pb-0;
}

header button {
  @apply inline-block p-0 text-3xl text-gray-500 ml-auto bg-transparent border-0 cursor-pointer;
}

svg {
  @apply w-6 h-6;
}

header button:hover,
header button:focus {
  @apply text-gray-700 outline-none;
}

header button:active {
  @apply text-gray-500;
}

.title {
  @apply text-xl leading-tight;
}

main {
  @apply p-6;
}

footer {
  @apply p-6 pt-0;
}

@screen md {
  .modal {
    @apply w-3/4 my-10 mx-auto;
  }
}

.fade-enter-active,
.fade-leave-active {
  @apply transition-opacity duration-75;
}

.fade-enter,
.fade-leave-to {
  @apply opacity-0;
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
