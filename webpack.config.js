const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const pages = {
  index: 'Charlie Thomason - Artist & Software Engineer from Chicago',
  about: 'About - Charlie Thomason'
};

const meta = {
  charset: 'utf-8',
  viewport: 'width=device-width, initial-scale=1.0'
};

function generateHtmlPlugins() {
  return Object.keys(pages).map(file => {
    return new HtmlWebpackPlugin({
      filename: `${file}.html`,
      template: './src/layouts/main.html',
      title: pages[file],
      file,
      meta
    });
  });
}
const htmlPlugins = generateHtmlPlugins();

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
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
      }
    ]
	},
  plugins: [
    new VueLoaderPlugin()
  ].concat(htmlPlugins)
};