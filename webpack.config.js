const WebpackStatsViewerPlugin = require('webpack-stats-viewer-plugin').WebpackStatsViewerPlugin;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  entry: "./src/index.js",
  plugins: [
    new HtmlWebpackPlugin({
      title: "cryptojs-sandbox",
    }),
    // new BundleAnalyzerPlugin(),
    new WebpackStatsViewerPlugin(
      {
        stats: './dist/stats.json',
        open: true,
      }
    ),
  ],
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "./dist"),
    clean: true,
  },
};
