const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({ addBase }) {
  addBase({
    /**
     * Static theme variables
     */

    ":root": {
      "--lighten": "brightness(115%)",
      "--darken": "brightness(85%)",

      "--color-white": "#fff",
      "--color-black": "#000",
      "--color-transparent": "transparent",
      "--color-current": "currentColor",

      "--color-static-gray-100": "#F4F4F5",
      "--color-static-gray-200": "#E2E2E6",
      "--color-static-gray-300": "#D1D1D7",
      "--color-static-gray-400": "#AFAFB8",
      "--color-static-gray-500": "#8C8C9A",
      "--color-static-gray-600": "#7E7E8B",
      "--color-static-gray-700": "#54545C",
      "--color-static-gray-800": "#3F3F45",
      "--color-static-gray-900": "#2A2A2E",
    },

    /**
     * With this color palette definition
     * we can have automatic theme switching
     * based on a user's system preferences.
     *
     * We can override the system preference
     * by adding a "light" or "dark" class to
     * the :root element, which most of the time
     * is the <html> element.
     *
     * One drawback to this is we need to define
     * the same dark color palette twice due to
     * media query restrictions.
     **/

    /* Default/light theme */

    ":root, :root.light": {
      "--color-fgcolor": "rgb(28, 28, 30)",
      "--color-bgcolor": "var(--color-white)",

      "--color-border": "var(--color-static-gray-300)",
      "--color-placeholder": "var(--color-static-gray-300)",

      "--color-blue": "rgb(0, 122, 255)",
      "--color-green": "rgb(52, 199, 89)",
      "--color-indigo": "rgb(88, 86, 214)",
      "--color-orange": "rgb(255, 149, 0)",
      "--color-pink": "rgb(255, 45, 85)",
      "--color-purple": "rgb(175, 82, 222)",
      "--color-red": "rgb(255, 59, 48)",
      "--color-teal": "rgb(90, 200, 250)",
      "--color-yellow": "rgb(255, 204, 0)",

      "--color-gray-100": "var(--color-static-gray-100)",
      "--color-gray-200": "var(--color-static-gray-200)",
      "--color-gray-300": "var(--color-static-gray-300)",
      "--color-gray-400": "var(--color-static-gray-400)",
      "--color-gray-500": "var(--color-static-gray-500)",
      "--color-gray-600": "var(--color-static-gray-600)",
      "--color-gray-700": "var(--color-static-gray-700)",
      "--color-gray-800": "var(--color-static-gray-800)",
      "--color-gray-900": "var(--color-static-gray-900)",
    },

    /* Dark theme */

    ":root.dark": {
      "--color-fgcolor": "rgb(242, 242, 247)",
      "--color-bgcolor": "var(--color-black)",

      "--color-border": "var(--color-static-gray-700)",
      "--color-placeholder": "var(--color-static-gray-700)",

      "--color-blue": "rgb(10, 132, 255)",
      "--color-green": "rgb(48, 209, 88)",
      "--color-indigo": "rgb(94, 92, 230)",
      "--color-orange": "rgb(255, 159, 10)",
      "--color-pink": "rgb(255, 55, 95)",
      "--color-purple": "rgb(191, 90, 242)",
      "--color-red": "rgb(255, 69, 58)",
      "--color-teal": "rgb(100, 210, 255)",
      "--color-yellow": "rgb(255, 214, 10)",

      "--color-gray-100": "var(--color-static-gray-900)",
      "--color-gray-200": "var(--color-static-gray-800)",
      "--color-gray-300": "var(--color-static-gray-700)",
      "--color-gray-400": "var(--color-static-gray-600)",
      "--color-gray-500": "var(--color-static-gray-500)",
      "--color-gray-600": "var(--color-static-gray-400)",
      "--color-gray-700": "var(--color-static-gray-300)",
      "--color-gray-800": "var(--color-static-gray-200)",
      "--color-gray-900": "var(--color-static-gray-100)",
    },

    "@media (prefers-color-scheme: dark)": {
      ":root": {
        "--color-fgcolor": "rgb(242, 242, 247)",
        "--color-bgcolor": "var(--color-black)",

        "--color-border": "var(--color-static-gray-700)",
        "--color-placeholder": "var(--color-static-gray-700)",

        "--color-blue": "rgb(10, 132, 255)",
        "--color-green": "rgb(48, 209, 88)",
        "--color-indigo": "rgb(94, 92, 230)",
        "--color-orange": "rgb(255, 159, 10)",
        "--color-pink": "rgb(255, 55, 95)",
        "--color-purple": "rgb(191, 90, 242)",
        "--color-red": "rgb(255, 69, 58)",
        "--color-teal": "rgb(100, 210, 255)",
        "--color-yellow": "rgb(255, 214, 10)",

        "--color-gray-100": "var(--color-static-gray-900)",
        "--color-gray-200": "var(--color-static-gray-800)",
        "--color-gray-300": "var(--color-static-gray-700)",
        "--color-gray-400": "var(--color-static-gray-600)",
        "--color-gray-500": "var(--color-static-gray-500)",
        "--color-gray-600": "var(--color-static-gray-400)",
        "--color-gray-700": "var(--color-static-gray-300)",
        "--color-gray-800": "var(--color-static-gray-200)",
        "--color-gray-900": "var(--color-static-gray-100)",
      },
    },
  });
});