/* eslint-disable */
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin')
const webpack = require('webpack')

module.exports = {
  lintOnSave: true,
  css: {
    sourceMap: true
  },
  publicPath: "/",
  outputDir: "dist",
  assetsDir: "",
  runtimeCompiler: false,
  productionSourceMap: false,
  configureWebpack: config => {
    config.plugins.push(
      new SpriteLoaderPlugin({
        plainSprite: true,
        spriteAttrs: {
          style: 'position: absolute; width: 0; height: 0;'
        }
      })
    )

    config.entry.app.push('./src/injectSVG.js')
  },
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        options.compilerOptions.whitespace = 'condense'
        return options
      })

    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()

    svgRule
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: '[name]',
        extract: true,
        spriteFilename: 'sprite.svg'
      })
  }
};
