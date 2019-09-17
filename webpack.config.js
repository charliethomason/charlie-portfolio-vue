const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const { pages, galleries } = require('./src/data/pages.json');

const meta = {
  charset: 'utf-8',
  viewport: 'width=device-width, initial-scale=1.0'
};
const htmlPlugins = pages.map(page => {
  return new HtmlWebpackPlugin({
    filename: `${page.href}.html`,
    template: './src/layouts/main.html',
    title: page.title,
    chunks: [page.href],
    meta
  });
});
const galleryPlugins = galleries.map(gallery => {
  return new HtmlWebpackPlugin({
    filename: `art/${gallery.href}.html`,
    template: './src/layouts/main.html',
    title: gallery.title,
    file: gallery.href,
    chunks: ['gallery'],
    meta
  })
});
let entry = pages.reduce((entries, page) => {
  entries[page.href] = `./src/${page.href}.js`;
  return entries;
}, {});
entry['gallery'] = './src/gallery.js';

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
  ]
    .concat(htmlPlugins)
    .concat(galleryPlugins),
  devServer: {
    contentBase: __dirname + '/dist',
    open: true
  }
};