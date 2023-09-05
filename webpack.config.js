const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      title: 'cryptojs-sandbox',
    }),
    new BundleAnalyzerPlugin(),
  ],
};