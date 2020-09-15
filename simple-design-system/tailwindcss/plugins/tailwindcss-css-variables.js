const plugin = require("tailwindcss/plugin");

module.exports = (colors) =>
  plugin(function ({ addBase }) {
    const staticColors = {};
    const dynamicLightColors = {};
    const dynamicDarkColors = {};

    const staticColorsRaw = {};
    const dynamicLightColorsRaw = {};
    const dynamicDarkColorsRaw = {};

    for (let c in colors) {
      for (const [key, value] of Object.entries(colors[c])) {
        staticColors[`--color-static-${c}-${key}`] = `rgb(${value})`;
        dynamicLightColors[`--color-${c}-${key}`] = `rgb(${value})`;
        dynamicDarkColors[
          `--color-${c}-${1000 - parseInt(key)}`
        ] = `rgb(${value})`;

        staticColorsRaw[`--color-static-${c}-${key}-raw`] = value;
        dynamicLightColorsRaw[`--color-${c}-${key}-raw`] = value;
        dynamicDarkColorsRaw[
          `--color-${c}-${1000 - parseInt(key)}-raw`
        ] = value;
      }
    }

    addBase({
      /**
       * Static theme variables
       */

      ":root": Object.assign(
        {},
        {
          "--color-white": "rgb(255, 255, 255)",
          "--color-black": "rgb(0, 0, 0)",
          "--color-white-raw": "255, 255, 255",
          "--color-black-raw": "0, 0, 0",

          "--color-transparent": "transparent",
          "--color-current": "currentColor",
        },
        staticColors,
        staticColorsRaw
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
          "--color-bgcolor": "rgb(255, 255, 255)",

          "--color-border": `rgb(${colors.gray["300"]})`,
          "--color-placeholder": `rgb(${colors.gray["400"]})`,

          "--color-fgcolor-raw": "28, 28, 30",
          "--color-bgcolor-raw": "255, 255, 255",

          "--color-border-raw": colors.gray["300"],
          "--color-placeholder-raw": colors.gray["400"],
        },
        dynamicLightColors,
        dynamicLightColorsRaw
      ),

      /* Dark theme */

      ":root.dark": Object.assign(
        {},
        {
          "--color-fgcolor": "rgb(242, 242, 247)",
          "--color-bgcolor": "rgb(28, 28, 30)",

          "--color-border": `rgb(${colors.gray["700"]})`,
          "--color-placeholder": `rgb(${colors.gray["600"]})`,

          "--color-fgcolor-raw": "242, 242, 247",
          "--color-bgcolor-raw": "28, 28, 30",

          "--color-border-raw": colors.gray["700"],
          "--color-placeholder-raw": colors.gray["600"],
        },
        dynamicDarkColors,
        dynamicDarkColorsRaw
      ),

      "@media (prefers-color-scheme: dark)": {
        ":root": Object.assign(
          {},
          {
            "--color-fgcolor": "rgb(242, 242, 247)",
            "--color-bgcolor": "rgb(28, 28, 30)",

            "--color-border": `rgb(${colors.gray["700"]})`,
            "--color-placeholder": `rgb(${colors.gray["600"]})`,

            "--color-fgcolor-raw": "242, 242, 247",
            "--color-bgcolor-raw": "28, 28, 30",

            "--color-border-raw": colors.gray["700"],
            "--color-placeholder-raw": colors.gray["600"],
          },
          dynamicDarkColors,
          dynamicDarkColorsRaw
        ),
      },
    });
  });
