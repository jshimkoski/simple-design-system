const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({ addComponents, config }) {
  const components = {
    ".form-control": {
      appearance: "none",
      borderWidth: config("theme.borderWidth.default"),
      boxShadow: config("theme.boxShadow.inner"),
      color: config("theme.colors.fgcolor"),
      backgroundColor: config("theme.colors.bgcolor"),
      borderRadius: config("theme.borderRadius.default"),
      width: config("theme.width.full"),
      padding: config("theme.padding.2"),

      ":root.dark &": {
        backgroundColor: "rgba(175, 175, 184, 0.1)",
        borderColor: "rgba(175, 175, 184, 0.6)",
        "--color-placeholder": "rgba(175, 175, 184, 0.6)",
      },

      "@media (prefers-color-scheme: dark)": {
        ":root:not(.light) &": {
          backgroundColor: "rgba(175, 175, 184, 0.1)",
          borderColor: "rgba(175, 175, 184, 0.6)",
          "--color-placeholder": "rgba(175, 175, 184, 0.6)",
        },
      },

      "&:focus": {
        outline: "none",
        boxShadow: config("theme.boxShadow.outline"),
      },

      "&[readonly], &:disabled": {
        opacity: config("theme.opacity.50"),
        pointerEvents: "none",
      },
    },

    "select.form-control:not([multiple])": {
      backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' fill='gray' viewBox='0 0 24 24' width='24' height='24'><path class='heroicon-ui' d='M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z'/></svg>")`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center right",
      backgroundOrigin: "content-box",
    },
  };

  addComponents(components);
});
