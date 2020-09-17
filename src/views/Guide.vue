<template>
  <div class="guide flex">
    <aside class="hidden md:block">
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
    <section
      class="flex-grow prose prose-sm sm:prose lg:prose-lg mx-auto py-8 px-4"
    >
      <h2>Guide</h2>
      <h3 id="introduction">Introduction</h3>
      <h4>Features</h4>
      <ul>
        <li>
          Primary goal is to keep things simple, flexible, and as brainless as
          possible.
        </li>
        <li>
          Light and dark theme switching based on a user's system preference
          that can be overridden with a ".light" or ".dark" class on the HTML
          element.
        </li>
        <li>
          Traditional layouts that include sidebars, headers, and footers.
        </li>
        <li>Components are developed in Vuejs and Typescript.</li>
        <li>
          Utility classes provided by
          <sds-external-link
            href="https://tailwindcss.com/"
            class="text-red hover:darken focus:darken"
            >Tailwind CSS</sds-external-link
          >
          control styling so no custom CSS is ever required.
        </li>
        <li>
          Includes
          <sds-external-link
            href="https://github.com/tailwindcss/typography"
            class="text-red hover:darken focus:darken"
            >Tailwind Typography</sds-external-link
          >, for beautiful typographic defaults you can add to any vanilla HTML
          you don't control (like HTML rendered from Markdown, or pulled from a
          CMS).
        </li>
        <li>
          Complex nested element trees for common components such as navbars are
          a thing of the past.
        </li>
        <li>
          You can take full advantage of
          <sds-external-link
            href="https://purgecss.com/"
            class="text-red hover:darken focus:darken"
            >PurgeCSS</sds-external-link
          >
          so the size of your CSS files are ridiculously small.
        </li>
        <li>
          Able to punch into the Tailwind configuration to setup your own color
          palette or to take advantage of PurgeCSS directly.
        </li>
      </ul>
      <h3 id="installation">Installation</h3>
      <h4>Install via npm</h4>
      <pre><code>$ npm i simple-design-system --save-dev</code></pre>
      <h4>Add it to your entry file</h4>
      <pre>
<code class="text-green mt-4">// import purgecss compatible css</code>
<code>import "simple-design-system/dist/index.css";</code>

<code class="text-green">// import all components</code>
<code class="text-green">// ensure to import Vue prior to this</code>
<code>import "simple-design-system";</code>

<code class="text-green">// or, import individual components</code>
<code class="text-green">// import Vue from "vue";</code>

<code class="text-green">// import Calendar from "simple-design-system/dist/components/Calendar/index.common";</code>
<code class="text-green">// import Card from "simple-design-system/dist/components/Card/index.common";</code>
<code class="text-green">// import Dropdown from "simple-design-system/dist/components/Dropdown/index.common";</code>
<code class="text-green">// import ExternalLink from "simple-design-system/dist/components/ExternalLink/index.common";</code>
<code class="text-green">// import LayoutSidebar from "simple-design-system/dist/components/LayoutSidebar/index.common";</code>
<code class="text-green">// import LayoutStacked from "simple-design-system/dist/components/LayoutStacked/index.common";</code>
<code class="text-green">// import Modal from "simple-design-system/dist/components/Modal/index.common";</code>
<code class="text-green">// import Navbar from "simple-design-system/dist/components/Navbar/index.common";</code>

<code class="text-green">// Vue.component("sds-calendar", Calendar);</code>
<code class="text-green">// Vue.component("sds-card", Card);</code>
<code class="text-green">// Vue.component("sds-dropdown", Dropdown);</code>
<code class="text-green">// Vue.component("sds-external-link", ExternalLink);</code>
<code class="text-green">// Vue.component("sds-layout-sidebar", LayoutSidebar);</code>
<code class="text-green">// Vue.component("sds-layout-stacked", LayoutStacked);</code>
<code class="text-green">// Vue.component("sds-modal", Modal);</code>
<code class="text-green">// Vue.component("sds-navbar", Navbar);</code>
</pre>
      <h3 id="controlling-file-size">Controlling File Size</h3>
      <p>
        Add
        <sds-external-link
          href="https://purgecss.com/"
          class="text-red hover:darken focus:darken"
          >PurgeCSS</sds-external-link
        >
        to your project to generate an incredibly small CSS filesize. Our CSS
        comes pre-wrapped with special identifiers so you can be sure that
        PurgeCSS will function as expected.
      </p>
      <p>
        You may directly access the <code>purge</code> command in the Simple
        Design System's Tailwind configuration as an alternative as well.
      </p>
      <p>Create two files with the following content in your project's root.</p>
      <pre>
<code class="text-green mt-4">// postcss.config.js</code>
<code>module.exports = {
  plugins: [
    require('tailwindcss')('./tailwind.config.js'),
    require('autoprefixer'),
  ],
};</code>
</pre>
      <pre>
<code class="text-green mt-4">// tailwind.config.js</code>
<code>const sdsConfig = require("simple-design-system/dist/src/tailwindcss/tailwind.config");

const tailwindConfig = sdsConfig();

tailwindConfig.purge = {
  content: ["./src/**/*.html", "./src/**/*.vue", "./src/**/*.jsx"],
};

module.exports = tailwindConfig;</code>
</pre>
      <p>
        And in your entry file, reference the
        <code>tailwind.css</code> directly:
      </p>
      <pre><code>import "simple-design-system/dist/src/tailwindcss/tailwind.css"</code></pre>
      <p>
        For instructions on getting started with PostCSS, see the
        <sds-external-link
          href="https://github.com/postcss/postcss#usage"
          class="text-red hover:darken focus:darken"
          >PostCSS documentation</sds-external-link
        >.
      </p>
      <h3 id="browser-support">Browser Support</h3>
      <p>
        We target the latest version of all modern browsers like Chrome,
        Firefox, Safari, and Edge. IE11 is not supported.
      </p>

      <h3 id="core-concepts">Core Concepts</h3>
      <h4>Utility-First</h4>
      <p>
        The {{ appName }} is built on top of
        <sds-external-link
          href="https://tailwindcss.com/"
          class="text-red hover:darken focus:darken"
          >Tailwind CSS</sds-external-link
        >. Please refer to their documentation for a complete list of all of the
        utility classes for which you can take advantage.
      </p>
      <h4>Responsive</h4>
      <p>
        All components respond to screen size to ensure they are always
        functional and aesthetically pleasing. If for any reason a component
        doesn't respond in an appropriate way, you have full access to thousands
        of utility functions that will get you where you need to be.
      </p>
      <h4>Color</h4>
      <h5>Theme Switching</h5>
      <p>
        Light and dark theme switching is based on either a user's system
        preference or via a ".light" or ".dark" class applied to the HTML
        element. The core principle of this magic is based on the way iOS and
        macOS handles this same functionality.
      </p>
      <p>
        In addition to automatic theme switching, you may use the "dark" variant
        on any color class to use that color specifically for the dark theme.
        For example, "<span class="dark:bg-green">dark:bg-green</span>" or
        "<span class="dark:text-static-gray-500">dark:text-static-gray-500</span
        >".
      </p>
      <h5>Color Design Principles</h5>
      <p>
        <strong>Make Interactive Elements Pop</strong>. Avoid using the same
        color for interactive and non-interactive elements. If they have the
        same color, the user doesn't know what elements they can interact with.
        It is recommended to keep non-interactive elements grayscale or muted in
        some capacity.
      </p>
      <p>
        <strong>Its All About Continuity</strong>. Variations in surrounding
        elements will sometimes warrant changes to nearby colors in order to
        maintain visual continuity. Prevent interface elements from becoming
        overpowering or underwhelming by using common sense color choices.
      </p>
      <p>
        <strong>Be Mindful of Contrast</strong>. For certain users, it is
        difficult to distinguish colors due to certain limitations or
        disabilities. Practice due diligence to ensure your application is
        accessible to them.
      </p>
      <h3 id="overriding-colors">Overriding Colors</h3>
      <p>
        If you are importing the Simple Design System's CSS file, every color
        found in both the static and the dynamic color palette can be overridden
        by replacing the value for its CSS variable. Just be certain that your
        override come after the included CSS file.
      </p>
      <p>
        If you are overriding the Tailwind config with the Simple Design
        System's config, simply pass your color overrides into the
        <code>tailwindConfig()</code>
        method.
      </p>
      <p>
        <strong>Please note:</strong> You can override the 100-900 variants for
        gray, blue, green, indigo, orange, pink, purple, red, teal, and yellow.
        These overrides will automatically apply to the static and dynamic color
        palette.
      </p>
      <pre>
<code class="text-green mt-4">// tailwind.config.js</code>
<code>const sdsConfig = require("simple-design-system/dist/src/tailwindcss/tailwind.config");

const tailwindConfig = sdsConfig({
  red: {
    500: "#f00",
  },
});

module.exports = tailwindConfig;</code>
</pre>
      <h3 id="static-color-palette">Static Color Palette</h3>
      <p>
        The static color palette uses specific colors no matter if in dark or
        light mode. You can be sure that if you use a static color, it will
        always remain the same.
      </p>
      <table>
        <thead>
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
            <td>
              <div class="p-4 bg-white border" />
            </td>
          </tr>
          <tr>
            <td>Black</td>
            <td>--color-black</td>
            <td>*-black</td>
            <td>
              <div class="p-4 bg-black border" />
            </td>
          </tr>
          <tr>
            <td>Transparent</td>
            <td>--color-transparent</td>
            <td>*-transparent</td>
            <td>
              <div class="p-4 bg-transparent border" />
            </td>
          </tr>
          <tr>
            <td>Current Color</td>
            <td>--color-current</td>
            <td>*-current</td>
            <td>
              <div class="p-4 bg-current border" />
            </td>
          </tr>
          <tr>
            <td>Static Gray 100</td>
            <td>--color-static-gray-100</td>
            <td>*-static-gray-100</td>
            <td>
              <div class="p-4 bg-static-gray-100 border" />
            </td>
          </tr>
          <tr>
            <td>Static Gray 200</td>
            <td>--color-static-gray-200</td>
            <td>*-static-gray-200</td>
            <td>
              <div class="p-4 bg-static-gray-200 border" />
            </td>
          </tr>
          <tr>
            <td>Static Gray 300</td>
            <td>--color-static-gray-300</td>
            <td>*-static-gray-300</td>
            <td>
              <div class="p-4 bg-static-gray-300 border" />
            </td>
          </tr>
          <tr>
            <td>Static Gray 400</td>
            <td>--color-static-gray-400</td>
            <td>*-static-gray-400</td>
            <td>
              <div class="p-4 bg-static-gray-400 border" />
            </td>
          </tr>
          <tr>
            <td>Static Gray 500</td>
            <td>--color-static-gray-500</td>
            <td>*-static-gray-500</td>
            <td>
              <div class="p-4 bg-static-gray-500 border" />
            </td>
          </tr>
          <tr>
            <td>Static Gray 600</td>
            <td>--color-static-gray-600</td>
            <td>*-static-gray-600</td>
            <td>
              <div class="p-4 bg-static-gray-600 border" />
            </td>
          </tr>
          <tr>
            <td>Static Gray 700</td>
            <td>--color-static-gray-700</td>
            <td>*-static-gray-700</td>
            <td>
              <div class="p-4 bg-static-gray-700 border" />
            </td>
          </tr>
          <tr>
            <td>Static Gray 800</td>
            <td>--color-static-gray-800</td>
            <td>*-static-gray-800</td>
            <td>
              <div class="p-4 bg-static-gray-800 border" />
            </td>
          </tr>
          <tr>
            <td>Static Gray 900</td>
            <td>--color-static-gray-900</td>
            <td>*-static-gray-900</td>
            <td>
              <div class="p-4 bg-static-gray-900 border" />
            </td>
          </tr>
          <tr>
            <td>Static Blue 100</td>
            <td>--color-static-blue-100</td>
            <td>*-static-blue-100</td>
            <td>
              <div class="p-4 bg-static-blue-100 border" />
            </td>
          </tr>
          <tr>
            <td>Static Blue 200</td>
            <td>--color-static-blue-200</td>
            <td>*-static-blue-200</td>
            <td>
              <div class="p-4 bg-static-blue-200 border" />
            </td>
          </tr>
          <tr>
            <td>Static Blue 300</td>
            <td>--color-static-blue-300</td>
            <td>*-static-blue-300</td>
            <td>
              <div class="p-4 bg-static-blue-300 border" />
            </td>
          </tr>
          <tr>
            <td>Static Blue 400</td>
            <td>--color-static-blue-400</td>
            <td>*-static-blue-400</td>
            <td>
              <div class="p-4 bg-static-blue-400 border" />
            </td>
          </tr>
          <tr>
            <td>Static Blue 500</td>
            <td>--color-static-blue-500</td>
            <td>*-static-blue-500</td>
            <td>
              <div class="p-4 bg-static-blue-500 border" />
            </td>
          </tr>
          <tr>
            <td>Static Blue 600</td>
            <td>--color-static-blue-600</td>
            <td>*-static-blue-600</td>
            <td>
              <div class="p-4 bg-static-blue-600 border" />
            </td>
          </tr>
          <tr>
            <td>Static Blue 700</td>
            <td>--color-static-blue-700</td>
            <td>*-static-blue-700</td>
            <td>
              <div class="p-4 bg-static-blue-700 border" />
            </td>
          </tr>
          <tr>
            <td>Static Blue 800</td>
            <td>--color-static-blue-800</td>
            <td>*-static-blue-800</td>
            <td>
              <div class="p-4 bg-static-blue-800 border" />
            </td>
          </tr>
          <tr>
            <td>Static Blue 900</td>
            <td>--color-static-blue-900</td>
            <td>*-static-blue-900</td>
            <td>
              <div class="p-4 bg-static-blue-900 border" />
            </td>
          </tr>
          <tr>
            <td>Static Green 100</td>
            <td>--color-static-green-100</td>
            <td>*-static-green-100</td>
            <td>
              <div class="p-4 bg-static-green-100 border" />
            </td>
          </tr>
          <tr>
            <td>Static Green 200</td>
            <td>--color-static-green-200</td>
            <td>*-static-green-200</td>
            <td>
              <div class="p-4 bg-static-green-200 border" />
            </td>
          </tr>
          <tr>
            <td>Static Green 300</td>
            <td>--color-static-green-300</td>
            <td>*-static-green-300</td>
            <td>
              <div class="p-4 bg-static-green-300 border" />
            </td>
          </tr>
          <tr>
            <td>Static Green 400</td>
            <td>--color-static-green-400</td>
            <td>*-static-green-400</td>
            <td>
              <div class="p-4 bg-static-green-400 border" />
            </td>
          </tr>
          <tr>
            <td>Static Green 500</td>
            <td>--color-static-green-500</td>
            <td>*-static-green-500</td>
            <td>
              <div class="p-4 bg-static-green-500 border" />
            </td>
          </tr>
          <tr>
            <td>Static Green 600</td>
            <td>--color-static-green-600</td>
            <td>*-static-green-600</td>
            <td>
              <div class="p-4 bg-static-green-600 border" />
            </td>
          </tr>
          <tr>
            <td>Static Green 700</td>
            <td>--color-static-green-700</td>
            <td>*-static-green-700</td>
            <td>
              <div class="p-4 bg-static-green-700 border" />
            </td>
          </tr>
          <tr>
            <td>Static Green 800</td>
            <td>--color-static-green-800</td>
            <td>*-static-green-800</td>
            <td>
              <div class="p-4 bg-static-green-800 border" />
            </td>
          </tr>
          <tr>
            <td>Static Green 900</td>
            <td>--color-static-green-900</td>
            <td>*-static-green-900</td>
            <td>
              <div class="p-4 bg-static-green-900 border" />
            </td>
          </tr>
          <tr>
            <td>Static Indigo 100</td>
            <td>--color-static-indigo-100</td>
            <td>*-static-indigo-100</td>
            <td>
              <div class="p-4 bg-static-indigo-100 border" />
            </td>
          </tr>
          <tr>
            <td>Static Indigo 200</td>
            <td>--color-static-indigo-200</td>
            <td>*-static-indigo-200</td>
            <td>
              <div class="p-4 bg-static-indigo-200 border" />
            </td>
          </tr>
          <tr>
            <td>Static Indigo 300</td>
            <td>--color-static-indigo-300</td>
            <td>*-static-indigo-300</td>
            <td>
              <div class="p-4 bg-static-indigo-300 border" />
            </td>
          </tr>
          <tr>
            <td>Static Indigo 400</td>
            <td>--color-static-indigo-400</td>
            <td>*-static-indigo-400</td>
            <td>
              <div class="p-4 bg-static-indigo-400 border" />
            </td>
          </tr>
          <tr>
            <td>Static Indigo 500</td>
            <td>--color-static-indigo-500</td>
            <td>*-static-indigo-500</td>
            <td>
              <div class="p-4 bg-static-indigo-500 border" />
            </td>
          </tr>
          <tr>
            <td>Static Indigo 600</td>
            <td>--color-static-indigo-600</td>
            <td>*-static-indigo-600</td>
            <td>
              <div class="p-4 bg-static-indigo-600 border" />
            </td>
          </tr>
          <tr>
            <td>Static Indigo 700</td>
            <td>--color-static-indigo-700</td>
            <td>*-static-indigo-700</td>
            <td>
              <div class="p-4 bg-static-indigo-700 border" />
            </td>
          </tr>
          <tr>
            <td>Static Indigo 800</td>
            <td>--color-static-indigo-800</td>
            <td>*-static-indigo-800</td>
            <td>
              <div class="p-4 bg-static-indigo-800 border" />
            </td>
          </tr>
          <tr>
            <td>Static Indigo 900</td>
            <td>--color-static-indigo-900</td>
            <td>*-static-indigo-900</td>
            <td>
              <div class="p-4 bg-static-indigo-900 border" />
            </td>
          </tr>
          <tr>
            <td>Static Orange 100</td>
            <td>--color-static-orange-100</td>
            <td>*-static-orange-100</td>
            <td>
              <div class="p-4 bg-static-orange-100 border" />
            </td>
          </tr>
          <tr>
            <td>Static Orange 200</td>
            <td>--color-static-orange-200</td>
            <td>*-static-orange-200</td>
            <td>
              <div class="p-4 bg-static-orange-200 border" />
            </td>
          </tr>
          <tr>
            <td>Static Orange 300</td>
            <td>--color-static-orange-300</td>
            <td>*-static-orange-300</td>
            <td>
              <div class="p-4 bg-static-orange-300 border" />
            </td>
          </tr>
          <tr>
            <td>Static Orange 400</td>
            <td>--color-static-orange-400</td>
            <td>*-static-orange-400</td>
            <td>
              <div class="p-4 bg-static-orange-400 border" />
            </td>
          </tr>
          <tr>
            <td>Static Orange 500</td>
            <td>--color-static-orange-500</td>
            <td>*-static-orange-500</td>
            <td>
              <div class="p-4 bg-static-orange-500 border" />
            </td>
          </tr>
          <tr>
            <td>Static Orange 600</td>
            <td>--color-static-orange-600</td>
            <td>*-static-orange-600</td>
            <td>
              <div class="p-4 bg-static-orange-600 border" />
            </td>
          </tr>
          <tr>
            <td>Static Orange 700</td>
            <td>--color-static-orange-700</td>
            <td>*-static-orange-700</td>
            <td>
              <div class="p-4 bg-static-orange-700 border" />
            </td>
          </tr>
          <tr>
            <td>Static Orange 800</td>
            <td>--color-static-orange-800</td>
            <td>*-static-orange-800</td>
            <td>
              <div class="p-4 bg-static-orange-800 border" />
            </td>
          </tr>
          <tr>
            <td>Static Orange 900</td>
            <td>--color-static-orange-900</td>
            <td>*-static-orange-900</td>
            <td>
              <div class="p-4 bg-static-orange-900 border" />
            </td>
          </tr>
          <tr>
            <td>Static Pink 100</td>
            <td>--color-static-pink-100</td>
            <td>*-static-pink-100</td>
            <td>
              <div class="p-4 bg-static-pink-100 border" />
            </td>
          </tr>
          <tr>
            <td>Static Pink 200</td>
            <td>--color-static-pink-200</td>
            <td>*-static-pink-200</td>
            <td>
              <div class="p-4 bg-static-pink-200 border" />
            </td>
          </tr>
          <tr>
            <td>Static Pink 300</td>
            <td>--color-static-pink-300</td>
            <td>*-static-pink-300</td>
            <td>
              <div class="p-4 bg-static-pink-300 border" />
            </td>
          </tr>
          <tr>
            <td>Static Pink 400</td>
            <td>--color-static-pink-400</td>
            <td>*-static-pink-400</td>
            <td>
              <div class="p-4 bg-static-pink-400 border" />
            </td>
          </tr>
          <tr>
            <td>Static Pink 500</td>
            <td>--color-static-pink-500</td>
            <td>*-static-pink-500</td>
            <td>
              <div class="p-4 bg-static-pink-500 border" />
            </td>
          </tr>
          <tr>
            <td>Static Pink 600</td>
            <td>--color-static-pink-600</td>
            <td>*-static-pink-600</td>
            <td>
              <div class="p-4 bg-static-pink-600 border" />
            </td>
          </tr>
          <tr>
            <td>Static Pink 700</td>
            <td>--color-static-pink-700</td>
            <td>*-static-pink-700</td>
            <td>
              <div class="p-4 bg-static-pink-700 border" />
            </td>
          </tr>
          <tr>
            <td>Static Pink 800</td>
            <td>--color-static-pink-800</td>
            <td>*-static-pink-800</td>
            <td>
              <div class="p-4 bg-static-pink-800 border" />
            </td>
          </tr>
          <tr>
            <td>Static Pink 900</td>
            <td>--color-static-pink-900</td>
            <td>*-static-pink-900</td>
            <td>
              <div class="p-4 bg-static-pink-900 border" />
            </td>
          </tr>
          <tr>
            <td>Static Purple 100</td>
            <td>--color-static-purple-100</td>
            <td>*-static-purple-100</td>
            <td>
              <div class="p-4 bg-static-purple-100 border" />
            </td>
          </tr>
          <tr>
            <td>Static Purple 200</td>
            <td>--color-static-purple-200</td>
            <td>*-static-purple-200</td>
            <td>
              <div class="p-4 bg-static-purple-200 border" />
            </td>
          </tr>
          <tr>
            <td>Static Purple 300</td>
            <td>--color-static-purple-300</td>
            <td>*-static-purple-300</td>
            <td>
              <div class="p-4 bg-static-purple-300 border" />
            </td>
          </tr>
          <tr>
            <td>Static Purple 400</td>
            <td>--color-static-purple-400</td>
            <td>*-static-purple-400</td>
            <td>
              <div class="p-4 bg-static-purple-400 border" />
            </td>
          </tr>
          <tr>
            <td>Static Purple 500</td>
            <td>--color-static-purple-500</td>
            <td>*-static-purple-500</td>
            <td>
              <div class="p-4 bg-static-purple-500 border" />
            </td>
          </tr>
          <tr>
            <td>Static Purple 600</td>
            <td>--color-static-purple-600</td>
            <td>*-static-purple-600</td>
            <td>
              <div class="p-4 bg-static-purple-600 border" />
            </td>
          </tr>
          <tr>
            <td>Static Purple 700</td>
            <td>--color-static-purple-700</td>
            <td>*-static-purple-700</td>
            <td>
              <div class="p-4 bg-static-purple-700 border" />
            </td>
          </tr>
          <tr>
            <td>Static Purple 800</td>
            <td>--color-static-purple-800</td>
            <td>*-static-purple-800</td>
            <td>
              <div class="p-4 bg-static-purple-800 border" />
            </td>
          </tr>
          <tr>
            <td>Static Purple 900</td>
            <td>--color-static-purple-900</td>
            <td>*-static-purple-900</td>
            <td>
              <div class="p-4 bg-static-purple-900 border" />
            </td>
          </tr>
          <tr>
            <td>Static Red 100</td>
            <td>--color-static-red-100</td>
            <td>*-static-red-100</td>
            <td>
              <div class="p-4 bg-static-red-100 border" />
            </td>
          </tr>
          <tr>
            <td>Static Red 200</td>
            <td>--color-static-red-200</td>
            <td>*-static-red-200</td>
            <td>
              <div class="p-4 bg-static-red-200 border" />
            </td>
          </tr>
          <tr>
            <td>Static Red 300</td>
            <td>--color-static-red-300</td>
            <td>*-static-red-300</td>
            <td>
              <div class="p-4 bg-static-red-300 border" />
            </td>
          </tr>
          <tr>
            <td>Static Red 400</td>
            <td>--color-static-red-400</td>
            <td>*-static-red-400</td>
            <td>
              <div class="p-4 bg-static-red-400 border" />
            </td>
          </tr>
          <tr>
            <td>Static Red 500</td>
            <td>--color-static-red-500</td>
            <td>*-static-red-500</td>
            <td>
              <div class="p-4 bg-static-red-500 border" />
            </td>
          </tr>
          <tr>
            <td>Static Red 600</td>
            <td>--color-static-red-600</td>
            <td>*-static-red-600</td>
            <td>
              <div class="p-4 bg-static-red-600 border" />
            </td>
          </tr>
          <tr>
            <td>Static Red 700</td>
            <td>--color-static-red-700</td>
            <td>*-static-red-700</td>
            <td>
              <div class="p-4 bg-static-red-700 border" />
            </td>
          </tr>
          <tr>
            <td>Static Red 800</td>
            <td>--color-static-red-800</td>
            <td>*-static-red-800</td>
            <td>
              <div class="p-4 bg-static-red-800 border" />
            </td>
          </tr>
          <tr>
            <td>Static Red 900</td>
            <td>--color-static-red-900</td>
            <td>*-static-red-900</td>
            <td>
              <div class="p-4 bg-static-red-900 border" />
            </td>
          </tr>
          <tr>
            <td>Static Teal 100</td>
            <td>--color-static-teal-100</td>
            <td>*-static-teal-100</td>
            <td>
              <div class="p-4 bg-static-teal-100 border" />
            </td>
          </tr>
          <tr>
            <td>Static Teal 200</td>
            <td>--color-static-teal-200</td>
            <td>*-static-teal-200</td>
            <td>
              <div class="p-4 bg-static-teal-200 border" />
            </td>
          </tr>
          <tr>
            <td>Static Teal 300</td>
            <td>--color-static-teal-300</td>
            <td>*-static-teal-300</td>
            <td>
              <div class="p-4 bg-static-teal-300 border" />
            </td>
          </tr>
          <tr>
            <td>Static Teal 400</td>
            <td>--color-static-teal-400</td>
            <td>*-static-teal-400</td>
            <td>
              <div class="p-4 bg-static-teal-400 border" />
            </td>
          </tr>
          <tr>
            <td>Static Teal 500</td>
            <td>--color-static-teal-500</td>
            <td>*-static-teal-500</td>
            <td>
              <div class="p-4 bg-static-teal-500 border" />
            </td>
          </tr>
          <tr>
            <td>Static Teal 600</td>
            <td>--color-static-teal-600</td>
            <td>*-static-teal-600</td>
            <td>
              <div class="p-4 bg-static-teal-600 border" />
            </td>
          </tr>
          <tr>
            <td>Static Teal 700</td>
            <td>--color-static-teal-700</td>
            <td>*-static-teal-700</td>
            <td>
              <div class="p-4 bg-static-teal-700 border" />
            </td>
          </tr>
          <tr>
            <td>Static Teal 800</td>
            <td>--color-static-teal-800</td>
            <td>*-static-teal-800</td>
            <td>
              <div class="p-4 bg-static-teal-800 border" />
            </td>
          </tr>
          <tr>
            <td>Static Teal 900</td>
            <td>--color-static-teal-900</td>
            <td>*-static-teal-900</td>
            <td>
              <div class="p-4 bg-static-teal-900 border" />
            </td>
          </tr>
          <tr>
            <td>Static Yellow 100</td>
            <td>--color-static-yellow-100</td>
            <td>*-static-yellow-100</td>
            <td>
              <div class="p-4 bg-static-yellow-100 border" />
            </td>
          </tr>
          <tr>
            <td>Static Yellow 200</td>
            <td>--color-static-yellow-200</td>
            <td>*-static-yellow-200</td>
            <td>
              <div class="p-4 bg-static-yellow-200 border" />
            </td>
          </tr>
          <tr>
            <td>Static Yellow 300</td>
            <td>--color-static-yellow-300</td>
            <td>*-static-yellow-300</td>
            <td>
              <div class="p-4 bg-static-yellow-300 border" />
            </td>
          </tr>
          <tr>
            <td>Static Yellow 400</td>
            <td>--color-static-yellow-400</td>
            <td>*-static-yellow-400</td>
            <td>
              <div class="p-4 bg-static-yellow-400 border" />
            </td>
          </tr>
          <tr>
            <td>Static Yellow 500</td>
            <td>--color-static-yellow-500</td>
            <td>*-static-yellow-500</td>
            <td>
              <div class="p-4 bg-static-yellow-500 border" />
            </td>
          </tr>
          <tr>
            <td>Static Yellow 600</td>
            <td>--color-static-yellow-600</td>
            <td>*-static-yellow-600</td>
            <td>
              <div class="p-4 bg-static-yellow-600 border" />
            </td>
          </tr>
          <tr>
            <td>Static Yellow 700</td>
            <td>--color-static-yellow-700</td>
            <td>*-static-yellow-700</td>
            <td>
              <div class="p-4 bg-static-yellow-700 border" />
            </td>
          </tr>
          <tr>
            <td>Static Yellow 800</td>
            <td>--color-static-yellow-800</td>
            <td>*-static-yellow-800</td>
            <td>
              <div class="p-4 bg-static-yellow-800 border" />
            </td>
          </tr>
          <tr>
            <td>Static Yellow 900</td>
            <td>--color-static-yellow-900</td>
            <td>*-static-yellow-900</td>
            <td>
              <div class="p-4 bg-static-yellow-900 border" />
            </td>
          </tr>
        </tbody>
      </table>
      <h3 id="dynamic-color-palette">Dynamic Color Palette</h3>
      <p>
        The dynamic color palette automatically adjusts to the current theme.
        Typically, you can design your apps against either theme and it'll just
        look good whether in light or dark mode. That said, be sure to toggle
        between the two during development just to ensure all expectations are
        met.
      </p>
      <table>
        <thead>
          <tr>
            <th class="p-3">Color</th>
            <th class="p-3">CSS Variable</th>
            <th class="p-3">Utility Class</th>
            <th class="p-3">Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Foreground Color</td>
            <td>--color-fgcolor</td>
            <td>*-fgcolor</td>
            <td>
              <div class="p-4 bg-fgcolor border" />
            </td>
          </tr>
          <tr>
            <td>Background Color</td>
            <td>--color-bgcolor</td>
            <td>*-bgcolor</td>
            <td>
              <div class="p-4 bg-bgcolor border" />
            </td>
          </tr>
          <tr>
            <td>Border Color</td>
            <td>--color-border</td>
            <td>*-border</td>
            <td>
              <div class="p-4 bg-border border" />
            </td>
          </tr>
          <tr>
            <td>Placeholder Color</td>
            <td>--color-placeholder</td>
            <td>*-placeholder</td>
            <td>
              <div class="p-4 bg-placeholder border" />
            </td>
          </tr>
          <tr>
            <td>Gray 100</td>
            <td>--color-gray-100</td>
            <td>*-gray-100</td>
            <td>
              <div class="p-4 bg-gray-100 border" />
            </td>
          </tr>
          <tr>
            <td>Gray 200</td>
            <td>--color-gray-200</td>
            <td>*-gray-200</td>
            <td>
              <div class="p-4 bg-gray-200 border" />
            </td>
          </tr>
          <tr>
            <td>Gray 300</td>
            <td>--color-gray-300</td>
            <td>*-gray-300</td>
            <td>
              <div class="p-4 bg-gray-300 border" />
            </td>
          </tr>
          <tr>
            <td>Gray 400</td>
            <td>--color-gray-400</td>
            <td>*-gray-400</td>
            <td>
              <div class="p-4 bg-gray-400 border" />
            </td>
          </tr>
          <tr>
            <td>Gray 500</td>
            <td>--color-gray-500</td>
            <td>*-gray-500</td>
            <td>
              <div class="p-4 bg-gray-500 border" />
            </td>
          </tr>
          <tr>
            <td>Gray 600</td>
            <td>--color-gray-600</td>
            <td>*-gray-600</td>
            <td>
              <div class="p-4 bg-gray-600 border" />
            </td>
          </tr>
          <tr>
            <td>Gray 700</td>
            <td>--color-gray-700</td>
            <td>*-gray-700</td>
            <td>
              <div class="p-4 bg-gray-700 border" />
            </td>
          </tr>
          <tr>
            <td>Gray 800</td>
            <td>--color-gray-800</td>
            <td>*-gray-800</td>
            <td>
              <div class="p-4 bg-gray-800 border" />
            </td>
          </tr>
          <tr>
            <td>Gray 900</td>
            <td>--color-gray-900</td>
            <td>*-gray-900</td>
            <td>
              <div class="p-4 bg-gray-900 border" />
            </td>
          </tr>
          <tr>
            <td>Blue 100</td>
            <td>--color-blue-100</td>
            <td>*-blue-100</td>
            <td>
              <div class="p-4 bg-blue-100 border" />
            </td>
          </tr>
          <tr>
            <td>Blue 200</td>
            <td>--color-blue-200</td>
            <td>*-blue-200</td>
            <td>
              <div class="p-4 bg-blue-200 border" />
            </td>
          </tr>
          <tr>
            <td>Blue 300</td>
            <td>--color-blue-300</td>
            <td>*-blue-300</td>
            <td>
              <div class="p-4 bg-blue-300 border" />
            </td>
          </tr>
          <tr>
            <td>Blue 400</td>
            <td>--color-blue-400</td>
            <td>*-blue-400</td>
            <td>
              <div class="p-4 bg-blue-400 border" />
            </td>
          </tr>
          <tr>
            <td>Blue 500</td>
            <td>--color-blue-500</td>
            <td>*-blue-500</td>
            <td>
              <div class="p-4 bg-blue-500 border" />
            </td>
          </tr>
          <tr>
            <td>Blue 600</td>
            <td>--color-blue-600</td>
            <td>*-blue-600</td>
            <td>
              <div class="p-4 bg-blue-600 border" />
            </td>
          </tr>
          <tr>
            <td>Blue 700</td>
            <td>--color-blue-700</td>
            <td>*-blue-700</td>
            <td>
              <div class="p-4 bg-blue-700 border" />
            </td>
          </tr>
          <tr>
            <td>Blue 800</td>
            <td>--color-blue-800</td>
            <td>*-blue-800</td>
            <td>
              <div class="p-4 bg-blue-800 border" />
            </td>
          </tr>
          <tr>
            <td>Blue 900</td>
            <td>--color-blue-900</td>
            <td>*-blue-900</td>
            <td>
              <div class="p-4 bg-blue-900 border" />
            </td>
          </tr>
          <tr>
            <td>Green 100</td>
            <td>--color-green-100</td>
            <td>*-green-100</td>
            <td>
              <div class="p-4 bg-green-100 border" />
            </td>
          </tr>
          <tr>
            <td>Green 200</td>
            <td>--color-green-200</td>
            <td>*-green-200</td>
            <td>
              <div class="p-4 bg-green-200 border" />
            </td>
          </tr>
          <tr>
            <td>Green 300</td>
            <td>--color-green-300</td>
            <td>*-green-300</td>
            <td>
              <div class="p-4 bg-green-300 border" />
            </td>
          </tr>
          <tr>
            <td>Green 400</td>
            <td>--color-green-400</td>
            <td>*-green-400</td>
            <td>
              <div class="p-4 bg-green-400 border" />
            </td>
          </tr>
          <tr>
            <td>Green 500</td>
            <td>--color-green-500</td>
            <td>*-green-500</td>
            <td>
              <div class="p-4 bg-green-500 border" />
            </td>
          </tr>
          <tr>
            <td>Green 600</td>
            <td>--color-green-600</td>
            <td>*-green-600</td>
            <td>
              <div class="p-4 bg-green-600 border" />
            </td>
          </tr>
          <tr>
            <td>Green 700</td>
            <td>--color-green-700</td>
            <td>*-green-700</td>
            <td>
              <div class="p-4 bg-green-700 border" />
            </td>
          </tr>
          <tr>
            <td>Green 800</td>
            <td>--color-green-800</td>
            <td>*-green-800</td>
            <td>
              <div class="p-4 bg-green-800 border" />
            </td>
          </tr>
          <tr>
            <td>Green 900</td>
            <td>--color-green-900</td>
            <td>*-green-900</td>
            <td>
              <div class="p-4 bg-green-900 border" />
            </td>
          </tr>
          <tr>
            <td>Indigo 100</td>
            <td>--color-indigo-100</td>
            <td>*-indigo-100</td>
            <td>
              <div class="p-4 bg-indigo-100 border" />
            </td>
          </tr>
          <tr>
            <td>Indigo 200</td>
            <td>--color-indigo-200</td>
            <td>*-indigo-200</td>
            <td>
              <div class="p-4 bg-indigo-200 border" />
            </td>
          </tr>
          <tr>
            <td>Indigo 300</td>
            <td>--color-indigo-300</td>
            <td>*-indigo-300</td>
            <td>
              <div class="p-4 bg-indigo-300 border" />
            </td>
          </tr>
          <tr>
            <td>Indigo 400</td>
            <td>--color-indigo-400</td>
            <td>*-indigo-400</td>
            <td>
              <div class="p-4 bg-indigo-400 border" />
            </td>
          </tr>
          <tr>
            <td>Indigo 500</td>
            <td>--color-indigo-500</td>
            <td>*-indigo-500</td>
            <td>
              <div class="p-4 bg-indigo-500 border" />
            </td>
          </tr>
          <tr>
            <td>Indigo 600</td>
            <td>--color-indigo-600</td>
            <td>*-indigo-600</td>
            <td>
              <div class="p-4 bg-indigo-600 border" />
            </td>
          </tr>
          <tr>
            <td>Indigo 700</td>
            <td>--color-indigo-700</td>
            <td>*-indigo-700</td>
            <td>
              <div class="p-4 bg-indigo-700 border" />
            </td>
          </tr>
          <tr>
            <td>Indigo 800</td>
            <td>--color-indigo-800</td>
            <td>*-indigo-800</td>
            <td>
              <div class="p-4 bg-indigo-800 border" />
            </td>
          </tr>
          <tr>
            <td>Indigo 900</td>
            <td>--color-indigo-900</td>
            <td>*-indigo-900</td>
            <td>
              <div class="p-4 bg-indigo-900 border" />
            </td>
          </tr>
          <tr>
            <td>Orange 100</td>
            <td>--color-orange-100</td>
            <td>*-orange-100</td>
            <td>
              <div class="p-4 bg-orange-100 border" />
            </td>
          </tr>
          <tr>
            <td>Orange 200</td>
            <td>--color-orange-200</td>
            <td>*-orange-200</td>
            <td>
              <div class="p-4 bg-orange-200 border" />
            </td>
          </tr>
          <tr>
            <td>Orange 300</td>
            <td>--color-orange-300</td>
            <td>*-orange-300</td>
            <td>
              <div class="p-4 bg-orange-300 border" />
            </td>
          </tr>
          <tr>
            <td>Orange 400</td>
            <td>--color-orange-400</td>
            <td>*-orange-400</td>
            <td>
              <div class="p-4 bg-orange-400 border" />
            </td>
          </tr>
          <tr>
            <td>Orange 500</td>
            <td>--color-orange-500</td>
            <td>*-orange-500</td>
            <td>
              <div class="p-4 bg-orange-500 border" />
            </td>
          </tr>
          <tr>
            <td>Orange 600</td>
            <td>--color-orange-600</td>
            <td>*-orange-600</td>
            <td>
              <div class="p-4 bg-orange-600 border" />
            </td>
          </tr>
          <tr>
            <td>Orange 700</td>
            <td>--color-orange-700</td>
            <td>*-orange-700</td>
            <td>
              <div class="p-4 bg-orange-700 border" />
            </td>
          </tr>
          <tr>
            <td>Orange 800</td>
            <td>--color-orange-800</td>
            <td>*-orange-800</td>
            <td>
              <div class="p-4 bg-orange-800 border" />
            </td>
          </tr>
          <tr>
            <td>Orange 900</td>
            <td>--color-orange-900</td>
            <td>*-orange-900</td>
            <td>
              <div class="p-4 bg-orange-900 border" />
            </td>
          </tr>
          <tr>
            <td>Pink 100</td>
            <td>--color-pink-100</td>
            <td>*-pink-100</td>
            <td>
              <div class="p-4 bg-pink-100 border" />
            </td>
          </tr>
          <tr>
            <td>Pink 200</td>
            <td>--color-pink-200</td>
            <td>*-pink-200</td>
            <td>
              <div class="p-4 bg-pink-200 border" />
            </td>
          </tr>
          <tr>
            <td>Pink 300</td>
            <td>--color-pink-300</td>
            <td>*-pink-300</td>
            <td>
              <div class="p-4 bg-pink-300 border" />
            </td>
          </tr>
          <tr>
            <td>Pink 400</td>
            <td>--color-pink-400</td>
            <td>*-pink-400</td>
            <td>
              <div class="p-4 bg-pink-400 border" />
            </td>
          </tr>
          <tr>
            <td>Pink 500</td>
            <td>--color-pink-500</td>
            <td>*-pink-500</td>
            <td>
              <div class="p-4 bg-pink-500 border" />
            </td>
          </tr>
          <tr>
            <td>Pink 600</td>
            <td>--color-pink-600</td>
            <td>*-pink-600</td>
            <td>
              <div class="p-4 bg-pink-600 border" />
            </td>
          </tr>
          <tr>
            <td>Pink 700</td>
            <td>--color-pink-700</td>
            <td>*-pink-700</td>
            <td>
              <div class="p-4 bg-pink-700 border" />
            </td>
          </tr>
          <tr>
            <td>Pink 800</td>
            <td>--color-pink-800</td>
            <td>*-pink-800</td>
            <td>
              <div class="p-4 bg-pink-800 border" />
            </td>
          </tr>
          <tr>
            <td>Pink 900</td>
            <td>--color-pink-900</td>
            <td>*-pink-900</td>
            <td>
              <div class="p-4 bg-pink-900 border" />
            </td>
          </tr>
          <tr>
            <td>Purple 100</td>
            <td>--color-purple-100</td>
            <td>*-purple-100</td>
            <td>
              <div class="p-4 bg-purple-100 border" />
            </td>
          </tr>
          <tr>
            <td>Purple 200</td>
            <td>--color-purple-200</td>
            <td>*-purple-200</td>
            <td>
              <div class="p-4 bg-purple-200 border" />
            </td>
          </tr>
          <tr>
            <td>Purple 300</td>
            <td>--color-purple-300</td>
            <td>*-purple-300</td>
            <td>
              <div class="p-4 bg-purple-300 border" />
            </td>
          </tr>
          <tr>
            <td>Purple 400</td>
            <td>--color-purple-400</td>
            <td>*-purple-400</td>
            <td>
              <div class="p-4 bg-purple-400 border" />
            </td>
          </tr>
          <tr>
            <td>Purple 500</td>
            <td>--color-purple-500</td>
            <td>*-purple-500</td>
            <td>
              <div class="p-4 bg-purple-500 border" />
            </td>
          </tr>
          <tr>
            <td>Purple 600</td>
            <td>--color-purple-600</td>
            <td>*-purple-600</td>
            <td>
              <div class="p-4 bg-purple-600 border" />
            </td>
          </tr>
          <tr>
            <td>Purple 700</td>
            <td>--color-purple-700</td>
            <td>*-purple-700</td>
            <td>
              <div class="p-4 bg-purple-700 border" />
            </td>
          </tr>
          <tr>
            <td>Purple 800</td>
            <td>--color-purple-800</td>
            <td>*-purple-800</td>
            <td>
              <div class="p-4 bg-purple-800 border" />
            </td>
          </tr>
          <tr>
            <td>Purple 900</td>
            <td>--color-purple-900</td>
            <td>*-purple-900</td>
            <td>
              <div class="p-4 bg-purple-900 border" />
            </td>
          </tr>
          <tr>
            <td>Red 100</td>
            <td>--color-red-100</td>
            <td>*-red-100</td>
            <td>
              <div class="p-4 bg-red-100 border" />
            </td>
          </tr>
          <tr>
            <td>Red 200</td>
            <td>--color-red-200</td>
            <td>*-red-200</td>
            <td>
              <div class="p-4 bg-red-200 border" />
            </td>
          </tr>
          <tr>
            <td>Red 300</td>
            <td>--color-red-300</td>
            <td>*-red-300</td>
            <td>
              <div class="p-4 bg-red-300 border" />
            </td>
          </tr>
          <tr>
            <td>Red 400</td>
            <td>--color-red-400</td>
            <td>*-red-400</td>
            <td>
              <div class="p-4 bg-red-400 border" />
            </td>
          </tr>
          <tr>
            <td>Red 500</td>
            <td>--color-red-500</td>
            <td>*-red-500</td>
            <td>
              <div class="p-4 bg-red-500 border" />
            </td>
          </tr>
          <tr>
            <td>Red 600</td>
            <td>--color-red-600</td>
            <td>*-red-600</td>
            <td>
              <div class="p-4 bg-red-600 border" />
            </td>
          </tr>
          <tr>
            <td>Red 700</td>
            <td>--color-red-700</td>
            <td>*-red-700</td>
            <td>
              <div class="p-4 bg-red-700 border" />
            </td>
          </tr>
          <tr>
            <td>Red 800</td>
            <td>--color-red-800</td>
            <td>*-red-800</td>
            <td>
              <div class="p-4 bg-red-800 border" />
            </td>
          </tr>
          <tr>
            <td>Red 900</td>
            <td>--color-red-900</td>
            <td>*-red-900</td>
            <td>
              <div class="p-4 bg-red-900 border" />
            </td>
          </tr>
          <tr>
            <td>Teal 100</td>
            <td>--color-teal-100</td>
            <td>*-teal-100</td>
            <td>
              <div class="p-4 bg-teal-100 border" />
            </td>
          </tr>
          <tr>
            <td>Teal 200</td>
            <td>--color-teal-200</td>
            <td>*-teal-200</td>
            <td>
              <div class="p-4 bg-teal-200 border" />
            </td>
          </tr>
          <tr>
            <td>Teal 300</td>
            <td>--color-teal-300</td>
            <td>*-teal-300</td>
            <td>
              <div class="p-4 bg-teal-300 border" />
            </td>
          </tr>
          <tr>
            <td>Teal 400</td>
            <td>--color-teal-400</td>
            <td>*-teal-400</td>
            <td>
              <div class="p-4 bg-teal-400 border" />
            </td>
          </tr>
          <tr>
            <td>Teal 500</td>
            <td>--color-teal-500</td>
            <td>*-teal-500</td>
            <td>
              <div class="p-4 bg-teal-500 border" />
            </td>
          </tr>
          <tr>
            <td>Teal 600</td>
            <td>--color-teal-600</td>
            <td>*-teal-600</td>
            <td>
              <div class="p-4 bg-teal-600 border" />
            </td>
          </tr>
          <tr>
            <td>Teal 700</td>
            <td>--color-teal-700</td>
            <td>*-teal-700</td>
            <td>
              <div class="p-4 bg-teal-700 border" />
            </td>
          </tr>
          <tr>
            <td>Teal 800</td>
            <td>--color-teal-800</td>
            <td>*-teal-800</td>
            <td>
              <div class="p-4 bg-teal-800 border" />
            </td>
          </tr>
          <tr>
            <td>Teal 900</td>
            <td>--color-teal-900</td>
            <td>*-teal-900</td>
            <td>
              <div class="p-4 bg-teal-900 border" />
            </td>
          </tr>
          <tr>
            <td>Yellow 100</td>
            <td>--color-yellow-100</td>
            <td>*-yellow-100</td>
            <td>
              <div class="p-4 bg-yellow-100 border" />
            </td>
          </tr>
          <tr>
            <td>Yellow 200</td>
            <td>--color-yellow-200</td>
            <td>*-yellow-200</td>
            <td>
              <div class="p-4 bg-yellow-200 border" />
            </td>
          </tr>
          <tr>
            <td>Yellow 300</td>
            <td>--color-yellow-300</td>
            <td>*-yellow-300</td>
            <td>
              <div class="p-4 bg-yellow-300 border" />
            </td>
          </tr>
          <tr>
            <td>Yellow 400</td>
            <td>--color-yellow-400</td>
            <td>*-yellow-400</td>
            <td>
              <div class="p-4 bg-yellow-400 border" />
            </td>
          </tr>
          <tr>
            <td>Yellow 500</td>
            <td>--color-yellow-500</td>
            <td>*-yellow-500</td>
            <td>
              <div class="p-4 bg-yellow-500 border" />
            </td>
          </tr>
          <tr>
            <td>Yellow 600</td>
            <td>--color-yellow-600</td>
            <td>*-yellow-600</td>
            <td>
              <div class="p-4 bg-yellow-600 border" />
            </td>
          </tr>
          <tr>
            <td>Yellow 700</td>
            <td>--color-yellow-700</td>
            <td>*-yellow-700</td>
            <td>
              <div class="p-4 bg-yellow-700 border" />
            </td>
          </tr>
          <tr>
            <td>Yellow 800</td>
            <td>--color-yellow-800</td>
            <td>*-yellow-800</td>
            <td>
              <div class="p-4 bg-yellow-800 border" />
            </td>
          </tr>
          <tr>
            <td>Yellow 900</td>
            <td>--color-yellow-900</td>
            <td>*-yellow-900</td>
            <td>
              <div class="p-4 bg-yellow-900 border" />
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "vuex";

export default defineComponent({
  name: "Guide",
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
