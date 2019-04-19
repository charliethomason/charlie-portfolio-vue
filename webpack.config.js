const HtmlwebpackPlugin = require('html-webpack-plugin');

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
        test: /\.hbs$/,
        loader: 'handlebars-loader'
      }
    ]
	},
  plugins: [
    new HtmlwebpackPlugin({
      title: 'Charlie Thomason',
      template: 'src/index.html'
    })
  ]
};