<template>
  <div class="w-5/6 mx-auto py-4">
    <sds-card type="raised" class="my-4" nav-class="hidden sm:grid gap-2">
      <template #title> Card title </template>
      <template #subtitle> Card subtitle </template>
      <template #nav>
        <a href="#" class="nav nav-pill nav-red">Option 1</a>
        <a href="#" class="nav nav-pill nav-red active">Option 2</a>
        <a href="#" class="nav nav-pill nav-red">Option 3</a>
      </template>
      <sds-calendar
        variant="red"
        v-model:date="date"
        v-model:end-date="endDate"
        v-model:min="min"
        v-model:max="max"
        multiple
      />

      <button @click="showModal = true" class="btn btn-blue my-4">
        Show Modal
      </button>
      <sds-modal v-model="showModal">
        <template #title>
          <h3>Modal Title</h3>
        </template>
        <sds-card type="accented" class="bg-bgcolor">
          <template #title> Card title </template>
          <template #subtitle> Card subtitle </template>
          <template #nav>
            <sds-dropdown v-model="showDropdownInModal" right class="mr-1">
              <button class="nav nav-pill nav-red">Dropdown</button>
              <template #menu>
                <a href="#" class="nav nav-pill">Option 1</a>
                <a href="#" class="nav nav-pill">Option 2</a>
              </template>
            </sds-dropdown>
          </template>
          <sds-calendar
            variant="red"
            v-model:date="date"
            v-model:end-date="endDate"
            v-model:min="min"
            v-model:max="max"
            multiple
          />
        </sds-card>
        <template #footer>
          <button class="btn" @click="showModal = false">Close</button>
        </template>
      </sds-modal>

      <sds-dropdown v-model="showDropdown" class="ml-2">
        <button class="btn btn-red">Dropdown</button>
        <template #menu>
          <button class="nav nav-pill" @click="showModal = true">
            Show Modal
          </button>
          <a href="#" class="nav nav-pill">Option 2</a>
          <a href="#" class="nav nav-pill">Option 3</a>
        </template>
      </sds-dropdown>
    </sds-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Examples",
  data() {
    return {
      date: "2020-02-07",
      endDate: null,
      min: "2020-01-26",
      max: "2020-03-19",
      showModal: false,
      showDropdown: false,
      showDropdownInModal: false,
    };
  },
  metaInfo() {
    return {
      title: "Examples",
    };
  },
});
</script>
