module.exports = {
  entry: './api.js',

  externals: {
    'brainstem-js': 'brainstem-js',
  },

  module: {
    loaders: [{
      exclude: /(node_modules)/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015'],
      },
    }],
  },

  output: {
    filename: 'index.js',
    libraryTarget: 'commonjs2',
    path: './bin',
  },
};
