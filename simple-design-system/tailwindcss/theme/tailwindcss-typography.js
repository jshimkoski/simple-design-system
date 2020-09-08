module.exports = {
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
      "figure, img, video": {
        maxWidth: "var(--w-full)",
      },
    },
  },
  sm: {
    css: {
      maxWidth: "43ch",
    },
  },
};
