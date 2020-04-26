<template>
  <sds-card class="guide p-0 md:p-4">
    <h2 slot="title" class="text-3xl">Guide</h2>
    <p slot="subtitle">An in-depth overview of how we do things.</p>
    <section slot="content">
      <h3 class="text-2xl font-semibold mb-4">Introduction</h3>
      <p>Why use the {{ appName }}?</p>
      <ul class="list-disc ml-8 sm:w-2/3">
        <li class="my-2">
          Dynamic light and dark theme switching based on a user's system
          preference that can be overridden with a ".light" or ".dark" class on
          the HTML element.
        </li>
        <li class="my-2">
          Traditional layouts that include sidebars, headers, and footers are
          pre-packaged.
        </li>
        <li class="my-2">
          All components can be used with whatever frontend library you choose
          (React, Vue, Angular, jQuery, doesn't matter).
        </li>
        <li class="my-2">
          Styling is based on simple class declarations so no custom CSS is ever
          required.
        </li>
        <li class="my-2">
          Accessibility requirements are built into the components themselves so
          all you have to do is use the element and you are good to go.
        </li>
        <li class="my-2">
          You can take full advantage of CSSPurge so the size of the CSS files
          created with the SDS are ridiculously small.
        </li>
      </ul>
      <h3 class="text-2xl font-semibold mt-8 mb-4">Installation</h3>
      <h4 class="text-xl font-semibold my-4">
        Via NPM
      </h4>
      <code class="block bg-bgcolor border text-gray-900 rounded p-8">
        npm i sds --save-dev
      </code>
      <h4 class="text-xl font-semibold my-4">
        Via CDN
      </h4>
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
      <h3 class="text-2xl font-semibold mt-8 mb-4">Controlling File Size</h3>
      <h3 class="text-2xl font-semibold mt-8 mb-4">Browser Support</h3>
      <p>
        As a general rule, the SDS targets the latest version of all modern
        browsers like Chrome, Firefox, Safari, and Edge. IE11 is not supported
        and you should be ashamed of yourself and your users if you choose to
        support it.
      </p>

      <h3 class="text-2xl font-semibold mt-8 mb-4">Core Concepts</h3>
      <h4 class="text-xl font-semibold mb-4">Utility-First</h4>
      <p>
        The SDS is built on top of Tailwind CSS, a utility framework for CSS
        that greatly simplifies development. Please refer to their
        <a
          href="https://tailwindcss.com/"
          class="text-blue-500 hover:underline hover:text-blue-700"
          >documentation</a
        >
        for a list of all utility classes for which you can take advantage.
      </p>
      <h4 class="text-xl font-semibold my-4">Responsive</h4>
      <p>
        All components respond to screen size to ensure they are always
        functional and aesthetically pleasing. If for any reason a component
        doesn't respond in an appropriate way, you have full access to thousands
        of utility functions that will get you where you need to be.
      </p>
      <h4 class="text-xl font-semibold my-4">Color</h4>
      <h5 class="text-lg font-semibold text-gray-700 mb-4">
        Theme Switching
      </h5>
      <p>
        The SDS allows for automatic light and dark theme switching based on
        either a user's system preference or via a ".light" or ".dark" class
        applied to the HTML element.
      </p>
      <h5 class="text-lg text-gray-700 font-semibold mt-8 mb-4">
        Color Design Principles
      </h5>
      <h6 class="font-semibold text-gray-500">
        Be Flexible
      </h6>
      <p class="my-4">
        Approach color design as you would responsive development. Pixel
        perfection is unrealistic due to an unlimited assortment of screen sizes
        and resolutions. As a result, we are often forced to make close
        approximations in responsive development to fit the needs of the
        application.
      </p>
      <p class="my-4">
        This concept applies to color design as well. Choose a color variation
        that look good in both theme variants within their current context and
        scope. There must be some flexibility in order to allow the magic of
        dynamic theme switching to work properly.
      </p>
      <h6 class="font-semibold text-gray-500">
        Use Color Judiciously
      </h6>
      <p class="my-4">
        Use color sparingly to enhance and call attention to important
        information or interactive content.
      </p>
      <h6 class="font-semibold text-gray-500">
        Make Interactive Elements Pop
      </h6>
      <p class="my-4">
        Avoid using the same color for interactive and non-interactive elements.
        If they have the same color, the user doesn't know what elements they
        can interact with. It is recommended to keep non-interactive elements
        grayscale or muted in some capacity.
      </p>
      <h6 class="font-semibold text-gray-500">
        Its All About Continuity
      </h6>
      <p class="my-4">
        Variations in surrounding elements will sometimes warrant changes to
        nearby colors in order to maintain visual continuity. Prevent interface
        elements from becoming overpowering or underwhelming by using common
        sense color choices.
      </p>
      <h6 class="font-semibold text-gray-500">
        Be Mindful of Contrast
      </h6>
      <p class="my-4">
        For certain users, it is difficult to distinguish colors due to certain
        limitations or disabilities. Practice due diligence to ensure your
        application is accessible to them.
      </p>
      <h5 class="text-lg text-gray-700 font-semibold mt-8 mb-4">
        Static Color Palette
      </h5>
      <p class="text-gray-500 w-2/3">
        The static color palette uses specific colors no matter if in dark or
        light mode. You can be sure that if you use a static color, it will
        always remain the same.
      </p>
      <table class="mt-8 mb-12 w-full">
        <thead class="border-b">
          <tr>
            <th>Color Name</th>
            <th>CSS Variable Name</th>
            <th>Utility Class Name</th>
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
      <h5 class="text-lg text-gray-700 font-semibold mt-8 mb-4">
        Dynamic Color Palette
      </h5>
      <p class="text-gray-500 w-2/3">
        The dynamic color palette automatically adjusts to the current theme.
        Typically, you can design your apps against either theme and it'll just
        look good whether in light or dark mode. That said, be sure to toggle
        between the two during development just to ensure all expectations are
        met.
      </p>
      <table class="mt-8 mb-12 w-full">
        <thead class="border-b">
          <tr>
            <th>Color Name</th>
            <th>CSS Variable Name</th>
            <th>Utility Class Name</th>
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
  </sds-card>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Guide",
  metaInfo() {
    return {
      title: "Guide",
    };
  },
  computed: {
    ...mapGetters(["appName"]),
  },
};
</script>
