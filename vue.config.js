module.exports = {
  // pluginOptions: {
  //   prerenderSpa: {
  //     registry: undefined,
  //     renderRoutes: ["/", "/guide", "/examples", "/components"],
  //     useRenderEvent: true,
  //     headless: true,
  //     onlyProduction: true,
  //   },
  // },
  chainWebpack: (config) => {
    config.module
      .rule("html-templates")
      .test(/template\.html$/)
      .use("html-loader")
      .loader("html-loader")
      .end()
      .use("postcss-html-loader")
      .loader("postcss-html-loader")
      .end();
  },
};
