const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require("vue-loader");
module.exports = {
  mode: "development",
  entry: "./examples/entry.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },
  devServer: {
    port: 8080,
    hot: true,
    open: true,
  },
  resolve: {
    extensions: [".js", ".vue", ".json"],
    alias: {
      main: path.resolve(__dirname, "../src"),
      packages: path.resolve(__dirname, "../packages"),
      examples: path.resolve(__dirname, "../examples"),
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.(scss|css)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /.(png|jpe?g|gif|svg?)$/,
        type: 'asset',
        parser: {
            dataUrlCondition: {
                maxSize: 10 * 1024
            }
        },
        generator: {
            filename: 'img/[hash:10][ext][query]'
        }
      },
      {
      test: /.(avi|mp3|ttf|woff2?)$/,
      type: 'asset/resource',
      generator: {
          filename: 'resources/[hash:10][ext][query]'
        }
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: "./examples/index.html",
      filename: "./index.html",
    }),
  ],
};