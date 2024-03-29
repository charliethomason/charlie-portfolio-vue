const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/js/index.js",
  output: {
    path: __dirname + "/dist",
    filename: "[name].js",
    publicPath: "/"
  },
	module: {
		rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "postcss-loader" },
          {
            loader: "sass-loader",
            options: {
              sassOptions: {
                outputStyle: "compressed"
              }
            }
          }
        ]
      },
      {
        test: /\.(jpg|png|gif)$/,
        type: "asset/resource",
        generator: {
          filename: "img/[name]-[hash][ext][query]"
        }
      }
    ]
	},
  plugins: [
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/layouts/main.html",
      title: "Charlie Thomason",
      meta: {
        charset: "utf-8",
        viewport: "width=device-width, initial-scale=1, minimum-scale=1"
      },
      favicon: "./src/img/favicon.ico"
    }),
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false
    })
  ],
  devServer: {
    static: {
      directory:__dirname + "/public",
    },
    host: "0.0.0.0",
    port: "9100",
    open: true,
    https: true
  },
  resolve: {
    alias: {
      "img": path.join(__dirname, "src/img")
    }
  }
};