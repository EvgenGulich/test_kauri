const path = require("path");

module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "~@/styles/app.scss";',
      },
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        "~": path.resolve(__dirname, "src/"),
      },
    },
  },
  chainWebpack: (config) => {
    const svgRule = config.module.rule("svg");

    svgRule.uses.clear();

    svgRule
      .use("babel-loader")
      .loader("babel-loader")
      .end()
      .use("vue-svg-loader")
      .loader("vue-svg-loader");
  },
};
