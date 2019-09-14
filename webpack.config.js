const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const pages = require('./src/data/pages.json');

const meta = {
  charset: 'utf-8',
  viewport: 'width=device-width, initial-scale=1.0'
};
const htmlPlugins = Object.keys(pages).map(file => {
  return new HtmlWebpackPlugin({
    filename: `${file}.html`,
    template: './src/layouts/main.html',
    title: pages[file],
    chunks: [file],
    meta
  });
});
const entry = Object.keys(pages).reduce((entries, file) => {
  entries[file] = `./src/${file}.js`;
  return entries;
}, {});

module.exports = {
  mode: 'development',
  entry,
  output: {
    path: __dirname + '/dist',
    filename: '[name].js'
  },
	module: {
		rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', {
          loader: 'sass-loader',
          options: {
            outputStyle: 'compressed'
          }
        }]
      },
      {
        test: /\.(jpg|png|gif)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'img/'
        }
      }
    ]
	},
  plugins: [
    new VueLoaderPlugin()
  ].concat(htmlPlugins),
  devServer: {
    contentBase: __dirname + '/dist',
    open: true
  }
};