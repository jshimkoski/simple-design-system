<template>
  <sds-container class="guide">
    <sds-card class="p-4 pb-6">
      <h2 slot="title" class="text-4xl">{{ $route.name }}</h2>
      <p slot="subtitle">Examples will exist on this page.</p>
      <sds-container slot="content">
        Woohoo!
      </sds-container>
    </sds-card>
  </sds-container>
</template>

<script>
export default {
  name: "Examples",
  metaInfo() {
    return {
      title: "Examples",
    };
  },
};
</script>
