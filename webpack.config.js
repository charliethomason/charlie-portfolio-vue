const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { pages } = require('./src/data/pages.json');

const meta = {
  charset: 'utf-8',
  viewport: 'width=device-width, initial-scale=1.0'
};
const htmlPlugins = pages.map(page => {
  return new HtmlWebpackPlugin({
    filename: page.filename,
    template: './src/layouts/main.html',
    title: page.title,
    chunks: [page.id],
    meta
  });
});
const entry = pages.reduce((entries, page) => {
  entries[page.id] = `./src/js/${page.id}.js`;
  return entries;
}, {});

module.exports = {
  mode: 'development',
  entry,
  output: {
    path: __dirname + '/dist',
    filename: '[name].js',
    publicPath: '/'
  },
	module: {
		rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loaders: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'postcss-loader' },
          {
            loader: 'sass-loader',
            options: {
              outputStyle: 'compressed'
            }
          }
        ]
      },
      {
        test: /\.(jpg|png|gif)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
          context: 'src/',
          useRelativePath: true
        }
      }
    ]
	},
  plugins: [
    new VueLoaderPlugin(),
    new CleanWebpackPlugin()
  ]
    .concat(htmlPlugins),
  devServer: {
    contentBase: __dirname + '/dist',
    open: true
  },
  resolve: {
    alias: {
      'img': path.join(__dirname, 'src/img')
    }
  }
};