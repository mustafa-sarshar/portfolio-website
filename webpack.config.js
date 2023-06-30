const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  mode: "development",
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
        { from: "src-main/assets/images", to: "assets/images" },
        { from: "src-main/assets/styles/w3.css", to: "assets/styles/w3.css" },
        { from: "src-main/assets/scripts/w3.js", to: "assets/scripts/w3.js" },
        {
          from: "src-main/assets/files/Mustafa-Sarshar-Resume_20230630.pdf",
          to: "assets/files/Mustafa-Sarshar-Resume_20230630.pdf",
        },
      ],
    }),
    new HtmlPlugin({
      title: "Musto's Portfolio Website",
      filename: "index.html",
      template: "src-main/index.html",
    }),
    new HtmlPlugin({
      title: "Musto's Portfolio Website - Thanks",
      filename: "thanks.html",
      template: "src-main/thanks.html",
    }),
    new HtmlPlugin({
      title: "Musto's Portfolio Website - Imprint",
      filename: "imprint.html",
      template: "src-main/imprint.html",
    }),
    // new BundleAnalyzerPlugin(),
  ],
};
