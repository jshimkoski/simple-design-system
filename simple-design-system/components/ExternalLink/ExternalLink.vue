<template>
  <a class="sds-external-link" target="_blank" rel="noopener noreferrer">
    <slot />
  </a>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "ExternalLink",
});
</script>
