const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const fs = require('fs')

const pagenames = {
  index: 'Homepage',
  about: 'About Page'
};

function generateHtmlPlugins(templatesDir) {
  const templateFiles = fs.readdirSync(path.resolve(__dirname, templatesDir));
  return templateFiles.map(file => {
    return new HtmlWebpackPlugin({
      filename: `${file}`,
      template: `${templatesDir}/${file}`,
      title: pagenames[file.split('.')[0]]
    });
  });
}

const htmlPlugins = generateHtmlPlugins('./src/views');

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