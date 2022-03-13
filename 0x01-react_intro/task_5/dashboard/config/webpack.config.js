const path = require('path');

module.exports = {
  mode: "development",
  entry: '../src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './public'),
  },
  devtool: 'inline-source-map',
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
              },
            }
          },
        ],
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, './public'),
    },
    hot: true,
    compress: true,
  },
};