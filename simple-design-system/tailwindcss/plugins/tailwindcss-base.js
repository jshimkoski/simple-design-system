const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({ addBase }) {
  addBase({
    "*, *::before, *::after": {
      boxSizing: "border-box",
      borderWidth: "var(--border-0)",
      borderStyle: "solid",
      borderColor: "var(--color-border)",
    },

    "html, body, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, blockquote, pre, a, abbr, acronym, address, big, button, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, select, textarea, input, optgroup, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, main, menu, nav, output, progress, ruby, section, summary, time, mark, audio, video": {
      fontFamily: "inherit",
      fontSize: "inherit",
      fontWeight: "inherit",
      color: "inherit",
      verticalAlign: "baseline",
      margin: "var(--m-0)",
      lineHeight: "inherit",
      background: "0",
    },

    "html, body": {
      height: "var(--h-full)",
      width: "var(--w-full)",
    },

    body: {
      lineHeight: "var(--leading-normal)",
      fontFamily: "var(--font-sans)",
      backgroundColor: "var(--color-bgcolor)",
      color: "var(--color-fgcolor)",
    },

    "input::placeholder, textarea::placeholder": {
      color: "var(--color-placeholder)",
      fontStyle: "italic",
    },

    p: {
      margin: "var(--m-0)",
    },

    "pre, code, kbd, samp": {
      fontFamily: "var(--font-mono)",
    },

    "button, [type=button], [type=submit], [role=button]": {
      cursor: "pointer",
    },

    a: {
      textDecoration: "none",
    },

    "ol, ul": {
      padding: "var(--p-0)",
      listStyle: "none",
    },

    "blockquote, q": {
      quotes: "none",
    },

    "blockquote::before, blockquote::after, q::before, q::after": {
      content: "none",
    },

    table: {
      borderCollapse: "collapse",
      borderSpacing: "0",
    },

    "img, svg, video, canvas, audio, iframe, embed, object, article, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, progress, section": {
      display: "block",
    },

    "*:not(:defined)": {
      visibility: "hidden",
    },
  });
});
