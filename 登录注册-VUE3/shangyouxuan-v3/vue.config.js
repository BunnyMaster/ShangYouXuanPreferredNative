const { defineConfig } = require("@vue/cli-service");
const AutoImport = require("unplugin-auto-import/webpack");
const Components = require("unplugin-vue-components/webpack");
const { ElementPlusResolver } = require("unplugin-vue-components/resolvers");
const WebpackBar = require("webpackbar");
const path = require("path");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [path.join(__dirname, "src\\assets\\mixins\\clear.less")],
    },
  },
  configureWebpack: {
    plugins: [
      new WebpackBar(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
  },
});
