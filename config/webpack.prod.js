const path = require('path');
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common.js");

const prodConfig = {
  mode: "production", // Режим сборки

  devServer: {
    hot: false,
  },
};

module.exports = merge(commonConfig, prodConfig);
