const { defineConfig } = require("@vue/cli-service");
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
    plugins: [new WebpackBar()],
  },
});
