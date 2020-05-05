<template>
  <sds-container class="guide p-0 md:p-4">
    <!-- Layout Stacked -->
    <sds-card id="layout-stacked">
      <h2 slot="title" class="text-3xl">iOS Mail</h2>
      <p slot="subtitle">
        Apple, is that you?
      </p>
      <section slot="content" class="lg:w-10/12">
        <sds-container class="bg-gray-100">
          <sds-card class="rounded">
            <h2 slot="title" class="text-4xl font-medium">Inbox</h2>
            <div slot="subtitle">
              <input
                type="text"
                placeholder="Search"
                class="form-control border-0 bg-gray-100 shadow-none placeholder-gray-500"
              />
            </div>
            <sds-container slot="content" class="p-0 border-t divide-y">
              <sds-card>
                <h3 slot="title">Tim Cook</h3>
                <div slot="subtitle">
                  <h4 class="text-gray-700">I'm a successful CEO.</h4>
                  <p>
                    This is content of a fake email that a person might receive.
                  </p>
                </div>
              </sds-card>
              <sds-card>
                <h3 slot="title">Steve Jobs</h3>
                <div slot="subtitle">
                  <h4 class="text-gray-700">But I was a revolutionary.</h4>
                  <p>
                    This is content of a fake email that a person might receive.
                  </p>
                </div>
              </sds-card>
            </sds-container>
          </sds-card>
        </sds-container>
      </section>
    </sds-card>
  </sds-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Examples",
  metaInfo() {
    return {
      title: "Examples",
    };
  },
});
</script>
