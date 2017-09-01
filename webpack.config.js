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
        plugins: [
          ['transform-object-rest-spread', { useBuiltIns: true }],
        ],
      },
    }],
  },

  output: {
    filename: 'index.js',
    libraryTarget: 'commonjs2',
    path: './bin',
  },
};
