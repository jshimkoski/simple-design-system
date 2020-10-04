const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({ addComponents }) {
  const components = {
    ".form-control": {
      "@apply appearance-none border shadow-inner text-fgcolor bg-white bg-opacity-50 rounded w-full p-2": {},

      ":root.dark &": {
        "@apply bg-gray-900 bg-opacity-10": {},
      },

      "@media (prefers-color-scheme: dark)": {
        ":root:not(.light) &": {
          "@apply bg-gray-900 bg-opacity-10": {},
        },
      },

      "&:focus": {
        "@apply outline-none shadow-outline": {},
      },

      "&[readonly], &:disabled": {
        "@apply opacity-50 pointer-events-none": {},
      },
    },

    "select.form-control:not([multiple])": {
      "@apply bg-repeat bg-center bg-right bg-no-repeat": {},
      backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' fill='gray' viewBox='0 0 24 24' width='24' height='24'><path class='heroicon-ui' d='M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z'/></svg>")`,
      backgroundOrigin: "content-box",
    },
  };

  addComponents(components);
});
