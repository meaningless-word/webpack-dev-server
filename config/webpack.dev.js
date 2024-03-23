const path = require("path");
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common.js");

const devConfig = {
  mode: "development", // Режим сборки

  devServer: {
    static: {
      directory: path.resolve(__dirname, "../dist"), // Каталог для статики
    },
    watchFiles: path.resolve(__dirname, "../src"),
    hot: true,
    open: true,
  },
};

module.exports = merge(commonConfig, devConfig);
