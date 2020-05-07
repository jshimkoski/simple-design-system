<template>
  <section class="guide">
    <sds-layout-sidebar>
      <aside slot="sidebar" class="hidden md:block">
        <div class="sticky top-0 pt-10 -mt-10">
          <nav class="p-8 pb-4 text-sm space-y-2">
            <a
              href="#introduction"
              class="block text-gray-600 hover:text-red focus:text-red focus:outline-none"
              >Introduction</a
            >
            <a
              href="#installation"
              class="block text-gray-600 hover:text-red focus:text-red focus:outline-none"
              >Installation</a
            >
            <a
              href="#controlling-file-size"
              class="block text-gray-600 hover:text-red focus:text-red focus:outline-none"
              >Controlling File Size</a
            >
            <a
              href="#browser-support"
              class="block text-gray-600 hover:text-red focus:text-red focus:outline-none"
              >Browser Support</a
            >
            <a
              href="#core-concepts"
              class="block text-gray-600 hover:text-red focus:text-red focus:outline-none"
              >Core Concepts</a
            >
            <a
              href="#overriding-colors"
              class="block text-gray-600 hover:text-red focus:text-red focus:outline-none"
              >Overriding Colors</a
            >
            <a
              href="#static-color-palette"
              class="block text-gray-600 hover:text-red focus:text-red focus:outline-none"
              >Static Color Palette</a
            >
            <a
              href="#dynamic-color-palette"
              class="block text-gray-600 hover:text-red focus:text-red focus:outline-none"
              >Dynamic Color Palette</a
            >
          </nav>
        </div>
      </aside>
      <section slot="content" class="space-y-6 p-4 md:py-6 md:px-8 lg:w-10/12">
        <h2 class="text-4xl mb-4">Guide</h2>
        <h3 id="introduction" class="text-3xl font-semibold mb-2">
          Introduction
        </h3>
        <h4 class="text-2xl">Features</h4>
        <ul class="list-disc ml-8">
          <li class="my-2">
            Light and dark theme switching based on a user's system preference
            that can be overridden with a ".light" or ".dark" class on the HTML
            element.
          </li>
          <li class="my-2">
            Traditional layouts that include sidebars, headers, and footers.
          </li>
          <li class="my-2">
            Compatibility with all frontend libraries (React, Vue, Angular,
            jQuery, doesn't matter).
          </li>
          <li class="my-2">
            Utility classes provided by
            <external-link
              href="https://tailwindcss.com/"
              class="text-red hover:underline hover:darken"
              >Tailwind CSS</external-link
            >
            control styling so no custom CSS is ever required.
          </li>
          <li class="my-2">
            Complex nested element trees for common components such as navbars
            are a thing of the past.
          </li>
          <li class="my-2">
            You can take full advantage of
            <external-link
              href="https://purgecss.com/"
              class="text-red hover:underline hover:darken"
              >PurgeCSS</external-link
            >
            so the size of your CSS files are ridiculously small.
          </li>
        </ul>
        <h3 id="installation" class="text-3xl font-semibold mt-12 mb-2">
          Installation
        </h3>
        <h4 class="block text-xl mb-2">
          Install via npm
        </h4>
        <code class="block bg-gray-100 border text-gray-900 rounded p-8 mb-4">
          $ npm i simple-design-system --save-dev
        </code>
        <h4 class="block text-xl mb-2">
          Add it to your entry file
        </h4>
        <code class="block bg-gray-100 border text-gray-900 rounded p-8">
          <p class="text-green darken">// import all web components</p>
          <p>import "simple-design-system";</p>
          <p class="text-green darken mt-4">
            // or, import individual web components
          </p>
          <p class="text-green darken">
            // import "simple-design-system/dist/wc/navbar";
          </p>
          <p class="text-green darken mt-4">
            // import purgecss compatible css
          </p>
          <p>import "simple-design-system/dist/index.css";</p>
          <p class="text-green darken mt-4">
            // or, import pre-minified css (not compatible with purgecss)
          </p>
          <p class="text-green darken">
            // import "simple-design-system/dist/index.min.css";
          </p>
        </code>
        <h3
          id="controlling-file-size"
          class="text-3xl font-semibold mt-12 mb-4"
        >
          Controlling File Size
        </h3>
        <p>
          After gzip compression, the entry CSS file weighs around 80kb. Feel
          free to add
          <external-link
            href="https://purgecss.com/"
            class="text-red hover:underline hover:darken"
            >PurgeCSS</external-link
          >
          to your project to drastically reduce this filesize. Our CSS comes
          pre-wrapped with special identifiers so you can be sure that PurgeCSS
          will function as expected.
        </p>
        <h3 id="browser-support" class="text-3xl font-semibold mt-12 mb-4">
          Browser Support
        </h3>
        <p>
          We target the latest version of all modern browsers like Chrome,
          Firefox, Safari, and Edge. IE11 is not supported.
        </p>

        <h3 id="core-concepts" class="text-3xl font-semibold mt-12 mb-4">
          Core Concepts
        </h3>
        <h4 class="text-2xl mb-4">Utility-First</h4>
        <p>
          The {{ appName }} is built on top of
          <external-link
            href="https://tailwindcss.com/"
            class="text-red hover:underline hover:darken"
            >Tailwind CSS</external-link
          >. Please refer to their documentation for a complete list of all of
          the utility classes for which you can take advantage.
        </p>
        <h4 class="text-2xl my-4">Responsive</h4>
        <p>
          All components respond to screen size to ensure they are always
          functional and aesthetically pleasing. If for any reason a component
          doesn't respond in an appropriate way, you have full access to
          thousands of utility functions that will get you where you need to be.
        </p>
        <h4 class="text-2xl my-4">Color</h4>
        <h5 class="text-xl font-light my-4">
          Theme Switching
        </h5>
        <p>
          Light and dark theme switching is based on either a user's system
          preference or via a ".light" or ".dark" class applied to the HTML
          element. The core principle of this magic is based on the way iOS and
          macOS handles this same functionality.
        </p>
        <h5 class="text-xl font-light mt-8 mb-4">
          Color Design Principles
        </h5>
        <p class="my-4">
          <strong class="font-semibold">Be Flexible</strong>. Choose color
          variations that look good in both theme variants within their current
          context and scope. There must be some flexibility in order to allow
          the magic of dynamic theme switching to work properly.
        </p>
        <p class="my-4">
          <strong class="font-semibold">Make Interactive Elements Pop</strong>.
          Avoid using the same color for interactive and non-interactive
          elements. If they have the same color, the user doesn't know what
          elements they can interact with. It is recommended to keep
          non-interactive elements grayscale or muted in some capacity.
        </p>
        <p class="my-4">
          <strong class="font-semibold">Its All About Continuity</strong>.
          Variations in surrounding elements will sometimes warrant changes to
          nearby colors in order to maintain visual continuity. Prevent
          interface elements from becoming overpowering or underwhelming by
          using common sense color choices.
        </p>
        <p class="my-4">
          <strong class="font-semibold">Be Mindful of Contrast</strong>. For
          certain users, it is difficult to distinguish colors due to certain
          limitations or disabilities. Practice due diligence to ensure your
          application is accessible to them.
        </p>
        <h3 id="overriding-colors" class="text-3xl font-semibold mt-8 mb-4">
          Overriding Colors
        </h3>
        <p>
          Every color found in both the static and the dynamic color palette can
          be overridden by replacing the value for its CSS variable. Just be
          certain that your override come after the included CSS file.
        </p>
        <h3 id="static-color-palette" class="text-3xl font-semibold mt-8 mb-4">
          Static Color Palette
        </h3>
        <p>
          The static color palette uses specific colors no matter if in dark or
          light mode. You can be sure that if you use a static color, it will
          always remain the same.
        </p>
        <table class="my-8 w-full">
          <thead class="border-b">
            <tr>
              <th>Color</th>
              <th>CSS Variable</th>
              <th>Utility Class</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>White</td>
              <td>--color-white</td>
              <td>*-white</td>
              <td><div class="p-4 bg-white border" /></td>
            </tr>
            <tr>
              <td>Black</td>
              <td>--color-black</td>
              <td>*-black</td>
              <td><div class="p-4 bg-black border" /></td>
            </tr>
            <tr>
              <td>Transparent</td>
              <td>--color-transparent</td>
              <td>*-transparent</td>
              <td><div class="p-4 bg-transparent border" /></td>
            </tr>
            <tr>
              <td>Current Color</td>
              <td>--color-current</td>
              <td>*-current</td>
              <td><div class="p-4 bg-current border" /></td>
            </tr>
            <tr>
              <td>Static Gray 100</td>
              <td>--color-static-gray-100</td>
              <td>*-static-gray-100</td>
              <td><div class="p-4 bg-static-gray-100 border" /></td>
            </tr>
            <tr>
              <td>Static Gray 200</td>
              <td>--color-static-gray-200</td>
              <td>*-static-gray-200</td>
              <td><div class="p-4 bg-static-gray-200 border" /></td>
            </tr>
            <tr>
              <td>Static Gray 300</td>
              <td>--color-static-gray-300</td>
              <td>*-static-gray-300</td>
              <td><div class="p-4 bg-static-gray-300 border" /></td>
            </tr>
            <tr>
              <td>Static Gray 400</td>
              <td>--color-static-gray-400</td>
              <td>*-static-gray-400</td>
              <td><div class="p-4 bg-static-gray-400 border" /></td>
            </tr>
            <tr>
              <td>Static Gray 500</td>
              <td>--color-static-gray-500</td>
              <td>*-static-gray-500</td>
              <td><div class="p-4 bg-static-gray-500 border" /></td>
            </tr>
            <tr>
              <td>Static Gray 600</td>
              <td>--color-static-gray-600</td>
              <td>*-static-gray-600</td>
              <td><div class="p-4 bg-static-gray-600 border" /></td>
            </tr>
            <tr>
              <td>Static Gray 700</td>
              <td>--color-static-gray-700</td>
              <td>*-static-gray-700</td>
              <td><div class="p-4 bg-static-gray-700 border" /></td>
            </tr>
            <tr>
              <td>Static Gray 800</td>
              <td>--color-static-gray-800</td>
              <td>*-static-gray-800</td>
              <td><div class="p-4 bg-static-gray-800 border" /></td>
            </tr>
            <tr>
              <td>Static Gray 900</td>
              <td>--color-static-gray-900</td>
              <td>*-static-gray-900</td>
              <td><div class="p-4 bg-static-gray-900 border" /></td>
            </tr>
          </tbody>
        </table>
        <h3 id="dynamic-color-palette" class="text-3xl font-semibold mt-8 mb-4">
          Dynamic Color Palette
        </h3>
        <p>
          The dynamic color palette automatically adjusts to the current theme.
          Typically, you can design your apps against either theme and it'll
          just look good whether in light or dark mode. That said, be sure to
          toggle between the two during development just to ensure all
          expectations are met.
        </p>
        <table class="my-8 w-full">
          <thead class="border-b">
            <tr>
              <th>Color</th>
              <th>CSS Variable</th>
              <th>Utility Class</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Foreground Color</td>
              <td>--color-fgcolor</td>
              <td>*-fgcolor</td>
              <td><div class="p-4 bg-fgcolor border" /></td>
            </tr>
            <tr>
              <td>Background Color</td>
              <td>--color-bgcolor</td>
              <td>*-bgcolor</td>
              <td><div class="p-4 bg-bgcolor border" /></td>
            </tr>
            <tr>
              <td>Border Color</td>
              <td>--color-border</td>
              <td>*-border</td>
              <td><div class="p-4 bg-border border" /></td>
            </tr>
            <tr>
              <td>Placeholder Color</td>
              <td>--color-placeholder</td>
              <td>*-placeholder</td>
              <td><div class="p-4 bg-placeholder border" /></td>
            </tr>
            <tr>
              <td>Gray 100</td>
              <td>--color-gray-100</td>
              <td>*-gray-100</td>
              <td><div class="p-4 bg-gray-100 border" /></td>
            </tr>
            <tr>
              <td>Gray 200</td>
              <td>--color-gray-200</td>
              <td>*-gray-200</td>
              <td><div class="p-4 bg-gray-200 border" /></td>
            </tr>
            <tr>
              <td>Gray 300</td>
              <td>--color-gray-300</td>
              <td>*-gray-300</td>
              <td><div class="p-4 bg-gray-300 border" /></td>
            </tr>
            <tr>
              <td>Gray 400</td>
              <td>--color-gray-400</td>
              <td>*-gray-400</td>
              <td><div class="p-4 bg-gray-400 border" /></td>
            </tr>
            <tr>
              <td>Gray 500</td>
              <td>--color-gray-500</td>
              <td>*-gray-500</td>
              <td><div class="p-4 bg-gray-500 border" /></td>
            </tr>
            <tr>
              <td>Gray 600</td>
              <td>--color-gray-600</td>
              <td>*-gray-600</td>
              <td><div class="p-4 bg-gray-600 border" /></td>
            </tr>
            <tr>
              <td>Gray 700</td>
              <td>--color-gray-700</td>
              <td>*-gray-700</td>
              <td><div class="p-4 bg-gray-700 border" /></td>
            </tr>
            <tr>
              <td>Gray 800</td>
              <td>--color-gray-800</td>
              <td>*-gray-800</td>
              <td><div class="p-4 bg-gray-800 border" /></td>
            </tr>
            <tr>
              <td>Gray 900</td>
              <td>--color-gray-900</td>
              <td>*-gray-900</td>
              <td><div class="p-4 bg-gray-900 border" /></td>
            </tr>
            <tr>
              <td>Blue</td>
              <td>--color-blue</td>
              <td>*-blue</td>
              <td><div class="p-4 bg-blue border" /></td>
            </tr>
            <tr>
              <td>Green</td>
              <td>--color-green</td>
              <td>*-green</td>
              <td><div class="p-4 bg-green border" /></td>
            </tr>
            <tr>
              <td>Indigo</td>
              <td>--color-indigo</td>
              <td>*-indigo</td>
              <td><div class="p-4 bg-indigo border" /></td>
            </tr>
            <tr>
              <td>Orange</td>
              <td>--color-orange</td>
              <td>*-orange</td>
              <td><div class="p-4 bg-orange border" /></td>
            </tr>
            <tr>
              <td>Pink</td>
              <td>--color-pink</td>
              <td>*-pink</td>
              <td><div class="p-4 bg-pink border" /></td>
            </tr>
            <tr>
              <td>Purple</td>
              <td>--color-purple</td>
              <td>*-purple</td>
              <td><div class="p-4 bg-purple border" /></td>
            </tr>
            <tr>
              <td>Red</td>
              <td>--color-red</td>
              <td>*-red</td>
              <td><div class="p-4 bg-red border" /></td>
            </tr>
            <tr>
              <td>Teal</td>
              <td>--color-teal</td>
              <td>*-teal</td>
              <td><div class="p-4 bg-teal border" /></td>
            </tr>
            <tr>
              <td>Yellow</td>
              <td>--color-yellow</td>
              <td>*-yellow</td>
              <td><div class="p-4 bg-yellow border" /></td>
            </tr>
          </tbody>
        </table>
      </section>
    </sds-layout-sidebar>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";
import ExternalLink from "@/components/ExternalLink.vue";

export default Vue.extend({
  name: "Guide",
  components: {
    ExternalLink,
  },
  metaInfo() {
    return {
      title: "Guide",
    };
  },
  computed: {
    ...mapGetters(["appName"]),
  },
});
</script>
