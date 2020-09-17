<template>
  <a class="sds-external-link" target="_blank" rel="noopener noreferrer">
    <slot />
  </a>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ExternalLink",
});
</script>
