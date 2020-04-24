<template>
  <sds-container class="guide">
    <sds-card class="p-4 pb-6">
      <h2 slot="title" class="text-3xl">Getting Started Guide</h2>
      <section slot="content">
        <h3 class="text-2xl font-semibold mb-4">Introduction</h3>
        <p>Why use the {{ appName }}?</p>
        <ul class="list-disc ml-8 sm:w-2/3">
          <li class="my-2">
            Dynamic light and dark theme switching based on a user's system
            preference that can be overridden with a ".light" or ".dark" class
            on the HTML element.
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
            Styling is based on simple class declarations so no custom CSS is
            ever required.
          </li>
          <li class="my-2">
            Accessibility requirements are built into the components themselves
            so all you have to do is use the element and you are good to go.
          </li>
          <li class="my-2">
            You can take full advantage of CSSPurge so the size of the CSS files
            created with the SDS are ridiculously small.
          </li>
          <li class="my-2">
            There are 9 color variations per color in both dynamic and static
            varieties.
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
          doesn't respond in an appropriate way, you have full access to
          thousands of utility functions that will get you where you need to be.
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
          perfection is unrealistic due to an unlimited assortment of screen
          sizes and resolutions. As a result, we are often forced to make close
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
          Avoid using the same color for interactive and non-interactive
          elements. If they have the same color, the user doesn't know what
          elements they can interact with. It is recommended to keep
          non-interactive elements grayscale or muted in some capacity.
        </p>
        <h6 class="font-semibold text-gray-500">
          Its All About Continuity
        </h6>
        <p class="my-4">
          Variations in surrounding elements will sometimes warrant changes to
          nearby colors in order to maintain visual continuity. Prevent
          interface elements from becoming overpowering or underwhelming by
          using common sense color choices.
        </p>
        <h6 class="font-semibold text-gray-500">
          Be Mindful of Contrast
        </h6>
        <p class="my-4">
          For certain users, it is difficult to distinguish colors due to
          certain limitations or disabilities. Practice due diligence to ensure
          your application is accessible to them.
        </p>
        <h5 class="text-lg text-gray-700 font-semibold mt-8 mb-4">
          Static Color Palette
        </h5>
        <p class="text-gray-500 w-2/3">
          The static color palette uses specific color variant from the light
          theme no matter if in dark or light mode. You can be sure that if you
          use a static color, it will always remain the same.
        </p>
        <table class="mt-8 mb-12 w-full">
          <thead class="border-b">
            <tr>
              <th>Color Name</th>
              <th>CSS Variable Name</th>
              <th>Utility Class Name</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>White</td>
              <td>--color-white</td>
              <td>*-white</td>
            </tr>
            <tr>
              <td>Black</td>
              <td>--color-black</td>
              <td>*-black</td>
            </tr>
            <tr>
              <td>Transparent</td>
              <td>--color-transparent</td>
              <td>*-transparent</td>
            </tr>
            <tr>
              <td>Current Color</td>
              <td>--color-current</td>
              <td>*-current</td>
            </tr>
            <tr>
              <td>Static Gray 100-900</td>
              <td>--color-static-gray-100 through --color-static-gray-900</td>
              <td>*-static-gray-100 through *-static-gray-900</td>
            </tr>
            <tr>
              <td>Static Red 100-900</td>
              <td>--color-static-red-100 through --color-static-red-900</td>
              <td>*-static-red-100 through *-static-red-900</td>
            </tr>
            <tr>
              <td>Static Orange 100-900</td>
              <td>
                --color-static-orange-100 through --color-static-orange-900
              </td>
              <td>*-static-orange-100 through *-static-orange-900</td>
            </tr>
            <tr>
              <td>Static Yellow 100-900</td>
              <td>
                --color-static-yellow-100 through --color-static-yellow-900
              </td>
              <td>*-static-yellow-100 through *-static-yellow-900</td>
            </tr>
            <tr>
              <td>Static Green 100-900</td>
              <td>--color-static-green-100 through --color-static-green-900</td>
              <td>*-static-green-100 through *-static-green-900</td>
            </tr>
            <tr>
              <td>Static Teal 100-900</td>
              <td>--color-static-teal-100 through --color-static-teal-900</td>
              <td>*-static-teal-100 through *-static-teal-900</td>
            </tr>
            <tr>
              <td>Static Blue 100-900</td>
              <td>--color-static-blue-100 through --color-static-blue-900</td>
              <td>*-static-blue-100 through *-static-blue-900</td>
            </tr>
            <tr>
              <td>Static Indigo 100-900</td>
              <td>
                --color-static-indigo-100 through --color-static-indigo-900
              </td>
              <td>*-static-indigo-100 through *-static-indigo-900</td>
            </tr>
            <tr>
              <td>Static Purple 100-900</td>
              <td>
                --color-static-purple-100 through --color-static-purple-900
              </td>
              <td>*-static-purple-100 through *-static-purple-900</td>
            </tr>
            <tr>
              <td>Static Pink 100-900</td>
              <td>--color-static-pink-100 through --color-static-pink-900</td>
              <td>*-static-pink-100 through *-static-pink-900</td>
            </tr>
          </tbody>
        </table>
        <h5 class="text-lg text-gray-700 font-semibold mt-8 mb-4">
          Dynamic Color Palette
        </h5>
        <p class="text-gray-500 w-2/3">
          The dynamic color palette automatically adjusts to the current theme.
          Typically, you can design your apps against either theme and it'll
          just look good whether in light or dark mode. That said, be sure to
          toggle between the two during development just to ensure all
          expectations are met.
        </p>
        <table class="mt-8 mb-12 w-full">
          <thead class="border-b">
            <tr>
              <th>Color Name</th>
              <th>CSS Variable Name</th>
              <th>Utility Class Name</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Foreground Color</td>
              <td>--color-fgcolor</td>
              <td>*-fgcolor</td>
            </tr>
            <tr>
              <td>Background Color</td>
              <td>--color-bgcolor</td>
              <td>*-bgcolor</td>
            </tr>
            <tr>
              <td>Gray 100-900</td>
              <td>--color-gray-100 through --color-gray-900</td>
              <td>*-gray-100 through *-gray-900</td>
            </tr>
            <tr>
              <td>Red 100-900</td>
              <td>--color-red-100 through --color-red-900</td>
              <td>*-red-100 through *-red-900</td>
            </tr>
            <tr>
              <td>Orange 100-900</td>
              <td>
                --color-orange-100 through --color-orange-900
              </td>
              <td>*-orange-100 through *-orange-900</td>
            </tr>
            <tr>
              <td>Yellow 100-900</td>
              <td>--color-yellow-100 through --color-yellow-900</td>
              <td>*-yellow-100 through *-yellow-900</td>
            </tr>
            <tr>
              <td>Green 100-900</td>
              <td>--color-green-100 through --color-green-900</td>
              <td>*-green-100 through *-green-900</td>
            </tr>
            <tr>
              <td>Teal 100-900</td>
              <td>--color-teal-100 through --color-teal-900</td>
              <td>*-teal-100 through *-teal-900</td>
            </tr>
            <tr>
              <td>Blue 100-900</td>
              <td>--color-blue-100 through --color-blue-900</td>
              <td>*-blue-100 through *-blue-900</td>
            </tr>
            <tr>
              <td>Indigo 100-900</td>
              <td>--color-indigo-100 through --color-indigo-900</td>
              <td>*-indigo-100 through *-indigo-900</td>
            </tr>
            <tr>
              <td>Purple 100-900</td>
              <td>--color-purple-100 through --color-purple-900</td>
              <td>*-purple-100 through *-purple-900</td>
            </tr>
            <tr>
              <td>Pink 100-900</td>
              <td>--color-pink-100 through --color-pink-900</td>
              <td>*-pink-100 through *-pink-900</td>
            </tr>
          </tbody>
        </table>
        <h2>Customization</h2>
      </section>
    </sds-card>
  </sds-container>
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
