const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  mode: "production",
  entry: {
    data: path.resolve(__dirname, "src-main/assets/scripts/data.js"),
    index: path.resolve(__dirname, "src-main/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    clean: true,
    assetModuleFilename: "[name][ext]",
  },
  devtool: "source-map",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader", // Creates `style` nodes from JS strings
          "css-loader", // Translates CSS into CommonJS
          "sass-loader", // Compiles Sass to CSS
        ],
      },
      {
        test: /\.css$/i,
        use: [
          "style-loader", // Creates `style` nodes from JS strings
          "css-loader", // Translates CSS into CommonJS
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
            plugins: ["@babel/plugin-proposal-class-properties"],
          },
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "src-main/assets/img", to: "assets/img" },
        { from: "src-main/assets/scripts/w3.js", to: "assets/scripts/w3.js" },
      ],
    }),
    new HtmlPlugin({
      title: "Musto's Portfolio Website",
      filename: "index.html",
      template: "src-main/index.html",
    }),
    new HtmlPlugin({
      title: "Musto's Portfolio Website",
      filename: "thanks.html",
      template: "src-main/thanks.html",
    }),
    // new BundleAnalyzerPlugin(),
  ],
};
