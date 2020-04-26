<template>
  <sds-container class="home p-0">
    <sds-container class="block md:grid md:grid-cols-2 md:gap-8 bg-gray-100">
      <div>
        <h2 class="text-gray-900 text-3xl leading-snug">
          A modern design system that is remarkably flexible and easy to use.
        </h2>
        <p class="py-8 text-gray-600 text-lg">
          The SDS is built with UX best practices, accessibility, and ease of
          use in mind. Its collection of beautiful native Web Components are
          compatible with any JavaScript library or CSS framework out of the
          box. Check out the
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
        Getting Started Video
      </div>
    </sds-container>
    <sds-container class="bg-bgcolor grid md:grid-cols-3 gap-8">
      <div>
        <h3 class="text-lg mb-2">
          Clean Semantic Markup
        </h3>
        <p class="text-gray-600">
          Nesting div elements is now an annoyance of the past. Our components
          use modern CSS and a common sense design approach to allow for
          beatifully semantic HTML.
        </p>
      </div>
      <div>
        <h3 class="text-lg mb-2">
          Easy to Use
        </h3>
        <p class="text-gray-600">
          Our simple to use components cover the most common layout, user
          interaction, and form field requirements. Its so easy to use you'll be
          amazed.
        </p>
      </div>
      <div>
        <h3 class="text-lg mb-2">
          Future Proof and Library Free
        </h3>
        <p class="text-gray-600">
          Every component is a native Web Component built to w3c specification.
          Compatibility with every JavaScript library and framework comes
          standard out of the box.
        </p>
      </div>
      <div>
        <h3 class="text-lg mb-2">
          Fully Accessible
        </h3>
        <p class="text-gray-600">
          Who has time to memorize all of the rules and complexities of building
          an accessible application? SDS components handle this for you.
        </p>
      </div>
      <div>
        <h3 class="text-lg mb-2">
          Customizable Theme
        </h3>
        <p class="text-gray-600">
          Our components include multiple types, variants, built-in support for
          automatic or manual theme switching, and a color palette fully
          customizable via CSS variables.
        </p>
      </div>
      <div>
        <h3 class="text-lg mb-2">
          Best Practices
        </h3>
        <p class="text-gray-600">
          The SDS is built using recommended usability and development
          practices. You can guarantee your app will function as beautifully as
          it looks.
        </p>
      </div>
    </sds-container>
    <sds-container class="bg-gray-100">
      <h2 class="block text-2xl">
        Getting Started
      </h2>
      <h3 class="block text-xl text-gray-700 my-5">
        Via NPM
      </h3>
      <code class="block bg-bgcolor border text-gray-900 rounded p-8">
        npm i sds --save-dev
      </code>
      <h3 class="block text-xl text-gray-700 my-5">
        Via CDN
      </h3>
      <code class="block bg-bgcolor border text-gray-900 rounded p-8">
        <div>&lt;!-- In head --&gt;</div>
        <div>
          &lt;link rel="stylesheet" type="text/css" href="sds.min.css"&gt;
        </div>
        <div>&lt;!-- At bottom of body --&gt;</div>
        <div>
          &lt;script src="sds.min.js"&gt;
        </div>
      </code>
    </sds-container>
  </sds-container>
</template>

<script>
export default {
  name: "Home",
  metaInfo() {
    return {
      title: "Home",
    };
  },
};
</script>
