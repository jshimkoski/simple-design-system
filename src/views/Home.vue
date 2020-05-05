<template>
  <sds-container class="home p-0">
    <sds-container class="block md:grid md:grid-cols-2 md:gap-8 bg-gray-100">
      <div>
        <h2 class="text-gray-900 text-3xl leading-snug">
          A modern design system that is remarkably flexible and easy to use.
        </h2>
        <p class="py-8 text-gray-600 text-lg">
          The {{ appName }} is easy to use, accessible, flexible, and future
          proof. Get the boilerplate out of the way and start coding. Check out
          the
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
        <ul>
          <li class="pb-4">
            <router-link
              to="/guide"
              class="text-red hover:underline hover:darken uppercase text-xl"
              >Getting Started Guide</router-link
            >
          </li>
          <li>
            <router-link
              to="/components"
              class="text-red hover:underline hover:darken uppercase text-xl"
              >Component Documentation</router-link
            >
          </li>
        </ul>
      </div>
      <div class="border p-4 text-gray-500 bg-gray-100 mt-5 md:mt-0">
        Getting Started Video Coming Soon...
      </div>
    </sds-container>
    <sds-container class="bg-bgcolor grid md:grid-cols-3 gap-8">
      <div>
        <h3 class="text-lg mb-2">
          Easy to Use
        </h3>
        <p class="text-gray-600">
          Our components cover the most common layout, user interaction, and
          form field requirements.
        </p>
      </div>
      <div>
        <h3 class="text-lg mb-2">
          Semantic Markup
        </h3>
        <p class="text-gray-600">
          Each component uses modern CSS and a common sense design approach to
          allow for beatifully semantic HTML.
        </p>
      </div>
      <div>
        <h3 class="text-lg mb-2">
          Future Proof
        </h3>
        <p class="text-gray-600">
          Our components are compatible with every JavaScript library and
          framework out of the box.
        </p>
      </div>
      <div>
        <h3 class="text-lg mb-2">
          Accessibility
        </h3>
        <p class="text-gray-600">
          Every component is tested with screen readers to ensure a great
          experience for disabled users.
        </p>
      </div>
      <div>
        <h3 class="text-lg mb-2">
          Customizable Theme
        </h3>
        <p class="text-gray-600">
          Every component include multiple types, variants, built-in support for
          automatic or manual theme switching.
        </p>
      </div>
      <div>
        <h3 class="text-lg mb-2">
          Best Practices
        </h3>
        <p class="text-gray-600">
          Every component is built using recommended usability and development
          practices.
        </p>
      </div>
    </sds-container>
    <sds-container class="bg-gray-100">
      <h2 class="block text-2xl">
        Getting Started
      </h2>
      <h3 class="block text-xl text-gray-700 my-5">
        Install via npm
      </h3>
      <code class="block bg-bgcolor border text-gray-900 rounded p-8">
        $ npm i simple-design-system --save
      </code>
      <h3 class="block text-xl text-gray-700 my-5">
        Add it to your entry file
      </h3>
      <code class="block bg-bgcolor border text-gray-900 rounded p-8">
        <p class="text-green darken">// import all web components</p>
        <p>import "simple-design-system";</p>
        <p class="text-green darken mt-4">// import purgecss compatible css</p>
        <p>import "simple-design-system/dist/index.css";</p>
      </code>
    </sds-container>
  </sds-container>
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
    ...mapGetters(["appName"]),
  },
});
</script>
