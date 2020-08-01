const plugin = require("tailwindcss/plugin");

module.exports = (colors) =>
  plugin(function ({ addBase }) {
    const staticColors = {};
    const dynamicLightColors = {};
    const dynamicDarkColors = {};

    for (let c in colors) {
      for (const [key, value] of Object.entries(colors[c])) {
        staticColors[`--color-static-${c}-${key}`] = value;
        dynamicLightColors[`--color-${c}-${key}`] = value;
        dynamicDarkColors[`--color-${c}-${1000 - parseInt(key)}`] = value;
      }
    }

    addBase({
      /**
       * Static theme variables
       */

      ":root": Object.assign(
        {},
        {
          "--lighten": "brightness(115%)",
          "--darken": "brightness(85%)",

          "--color-white": "#fff",
          "--color-black": "#000",
          "--color-transparent": "transparent",
          "--color-current": "currentColor",
        },
        staticColors
      ),

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

      ":root, :root.light": Object.assign(
        {},
        {
          "--color-fgcolor": "rgb(28, 28, 30)",
          "--color-bgcolor": "var(--color-white)",

          "--color-border": "var(--color-static-gray-300)",
          "--color-placeholder": "var(--color-static-gray-300)",
        },
        dynamicLightColors
      ),

      /* Dark theme */

      ":root.dark": Object.assign(
        {},
        {
          "--color-fgcolor": "rgb(242, 242, 247)",
          "--color-bgcolor": "var(--color-black)",

          "--color-border": "var(--color-static-gray-700)",
          "--color-placeholder": "var(--color-static-gray-700)",
        },
        dynamicDarkColors
      ),

      "@media (prefers-color-scheme: dark)": {
        ":root": Object.assign(
          {},
          {
            "--color-fgcolor": "rgb(242, 242, 247)",
            "--color-bgcolor": "var(--color-black)",

            "--color-border": "var(--color-static-gray-700)",
            "--color-placeholder": "var(--color-static-gray-700)",
          },
          dynamicDarkColors
        ),
      },
    });
  });
