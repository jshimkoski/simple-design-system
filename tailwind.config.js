const plugin = require("tailwindcss/plugin");

module.exports = {
  purge: false,
  important: true,
  theme: {
    typography: {
      default: {
        css: {
          color: "var(--color-fgcolor)",
          '[class~="lead"]': {
            color: "var(--color-gray-700)",
          },
          a: {
            color: "var(--color-gray-900)",
          },
          strong: {
            color: "var(--color-gray-900)",
          },
          "ol > li::before": {
            color: "var(--color-gray-600)",
          },
          "ul > li::before": {
            backgroundColor: "var(--color-gray-400)",
          },
          hr: {
            borderColor: "var(--color-gray-300)",
          },
          blockquote: {
            color: "var(--color-gray-900)",
            borderLeftColor: "var(--color-gray-300)",
          },
          h1: {
            color: "var(--color-gray-900)",
          },
          h2: {
            color: "var(--color-gray-900)",
          },
          h3: {
            color: "var(--color-gray-900)",
          },
          h4: {
            color: "var(--color-gray-900)",
          },
          "figure figcaption": {
            color: "var(--color-gray-600)",
          },
          code: {
            color: "var(--color-gray-900)",
          },
          pre: {
            color: "var(--color-gray-700)",
            backgroundColor: "var(--color-gray-100)",
          },
          thead: {
            color: "var(--color-gray-900)",
            borderBottomColor: "var(--color-gray-400)",
          },
          "tbody tr": {
            borderBottomColor: "var(--color-gray-300)",
          },
        },
      },
    },
    colors: {
      // Static colors

      white: "var(--color-white)",
      black: "var(--color-black)",
      transparent: "var(--color-transparent)",
      current: "var(--color-current)",

      "static-gray": {
        100: "var(--color-static-gray-100)",
        200: "var(--color-static-gray-200)",
        300: "var(--color-static-gray-300)",
        400: "var(--color-static-gray-400)",
        500: "var(--color-static-gray-500)",
        600: "var(--color-static-gray-600)",
        700: "var(--color-static-gray-700)",
        800: "var(--color-static-gray-800)",
        900: "var(--color-static-gray-900)",
      },

      // Dynamic colors

      fgcolor: "var(--color-fgcolor)",
      bgcolor: "var(--color-bgcolor)",

      border: "var(--color-border)",
      placeholder: "var(--color-placeholder)",

      blue: "var(--color-blue)",
      green: "var(--color-green)",
      indigo: "var(--color-indigo)",
      orange: "var(--color-orange)",
      pink: "var(--color-pink)",
      purple: "var(--color-purple)",
      red: "var(--color-red)",
      teal: "var(--color-teal)",
      yellow: "var(--color-yellow)",

      gray: {
        100: "var(--color-gray-100)",
        200: "var(--color-gray-200)",
        300: "var(--color-gray-300)",
        400: "var(--color-gray-400)",
        500: "var(--color-gray-500)",
        600: "var(--color-gray-600)",
        700: "var(--color-gray-700)",
        800: "var(--color-gray-800)",
        900: "var(--color-gray-900)",
      },
    },
  },
  variants: {},
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwind-css-variables")({
      colors: false,
    }),
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".darken": {
          filter: "var(--darken)",
        },
        ".lighten": {
          filter: "var(--lighten)",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover", "focus"]);
    }),
  ],
};
