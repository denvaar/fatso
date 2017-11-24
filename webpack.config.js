const path = require('path');

module.exports = (env) => (
  {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'bundle'),
      publicPath: '/bundle',
      filename: 'fatso.js'
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    module: {
      rules: [
        {
          test: /(\.jsx|\.js)$/,
          loader: 'babel-loader',
          exclude: /node_modules/
        },
        {
          test: /\.css$/,
          loader: 'style-loader!css-loader'
        }
      ]
    }
  }
);
