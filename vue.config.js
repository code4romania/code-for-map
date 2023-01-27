module.exports = {
  devServer: {
    proxy: {
      '^/strapi-assets': {
        target: 'https://d3nrmb4u1g4f18.cloudfront.net',
        changeOrigin: true,
      }
    }
  },
  lintOnSave: true,
  css: {
    sourceMap: true,
  },
  publicPath: "/",
  outputDir: "dist",
  assetsDir: "",
  runtimeCompiler: false,
  productionSourceMap: false,

  chainWebpack: (config) => {
    const svgRule = config.module.rule("svg");

    svgRule.uses.clear();

    svgRule
      .oneOf("inline")
      .resourceQuery(/inline/)
      .use("babel-loader")
      .loader("babel-loader")
      .end()
      .use("vue-svg-loader")
      .loader("vue-svg-loader")
      .end()
      .end()
      .oneOf("external")
      .use("file-loader")
      .loader("file-loader")
      .options({
        name: "assets/[name].[hash:8].[ext]",
      });
  },
};
