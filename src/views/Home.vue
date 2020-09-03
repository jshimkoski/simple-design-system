<template>
  <div class="home">
    <div class="pt-16 pb-20 px-8">
      <div class="md:w-2/3 xl:w-1/2">
        <h2 class="text-gray-900 text-3xl leading-snug">
          {{ appName }}
          <span class="text-base text-gray-700">{{ lastRelease.name }}</span>
        </h2>
        <p class="pt-6 pb-12 text-gray-600 text-lg">
          A modern design system that is remarkably flexible and easy to use.
          Get the boilerplate out of the way and start coding. Check out the
          <router-link to="/guide" class="text-red hover:underline hover:darken"
            >Getting Started Guide</router-link
          >
          or jump right into the
          <router-link
            to="/components"
            class="text-red hover:underline hover:darken"
            >Component Documentation</router-link
          >
          to get started.
        </p>
        <ul class="sm:flex space-y-8 sm:space-y-0 sm:space-x-4">
          <li>
            <router-link
              to="/guide"
              class="text-lg uppercase btn btn-red w-full sm:w-auto"
              >Get Started</router-link
            >
          </li>
          <li>
            <sds-external-link
              href="https://github.com/jshimkoski/simple-design-system"
              class="text-lg uppercase btn btn-white w-full sm:w-auto"
              ><svg
                class="inline-block h-5 fill-current align-middle mr-2"
                alt="GitHub"
                viewBox="0 0 16 16"
                version="1.1"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                ></path></svg
              >Go to GitHub</sds-external-link
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="bg-gray-100 grid md:grid-cols-3 gap-8 p-8">
      <div>
        <h3 class="text-lg mb-2">Easy to Use</h3>
        <p class="text-gray-600">
          Our components cover the most common layout, user interaction, and
          form field requirements.
        </p>
      </div>
      <div>
        <h3 class="text-lg mb-2">Semantic Markup</h3>
        <p class="text-gray-600">
          Modern CSS and a common sense design approach to allow for beatifully
          semantic HTML.
        </p>
      </div>
      <div>
        <h3 class="text-lg mb-2">Future Proof</h3>
        <p class="text-gray-600">
          Our components are developed in Vuejs and Typescript.
        </p>
      </div>
      <div>
        <h3 class="text-lg mb-2">Accessibility</h3>
        <p class="text-gray-600">
          Every component is tested with screen readers to ensure a great
          experience for disabled users.
        </p>
      </div>
      <div>
        <h3 class="text-lg mb-2">Customizable Theme</h3>
        <p class="text-gray-600">
          Includes multiple types, variants, built-in support for automatic or
          manual theme switching.
        </p>
      </div>
      <div>
        <h3 class="text-lg mb-2">Best Practices</h3>
        <p class="text-gray-600">
          Every component is built using recommended usability and development
          practices.
        </p>
      </div>
    </div>
    <div class="prose lg:prose-lg pt-16 pb-20 px-8">
      <h2>Getting Started</h2>
      <h3>Install via npm</h3>
      <pre class="whitespace-pre-line">
        <code>$ npm i simple-design-system --save-dev</code>
      </pre>
      <h3>Add it to your entry file</h3>
      <pre class="whitespace-pre-line">
        <code class="text-green mt-4">// import purgecss compatible css</code>
        <code>import "simple-design-system/dist/index.css";</code>

        <code class="text-green">// import all components</code>
        <code class="text-green">// ensure to import Vue prior to this</code>
        <code>import "simple-design-system";</code>
      </pre>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";

export default Vue.extend({
  name: "Home",
  metaInfo() {
    return {
      title: "Home",
    };
  },
  computed: {
    ...mapGetters(["appName", "lastRelease"]),
  },
});
</script>
