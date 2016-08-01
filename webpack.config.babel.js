import path from 'path'
import webpack from 'webpack'

module.exports = {
  context: __dirname,

  // Where are your javascript files located?
  entry: {
    app: path.join(__dirname, 'frontend', 'main.js')
  },

  // Where do you want to place the compiled javascript files, plus
  // what do you want to name the file that all those javascripts are
  // put into?
  output: {
    path: path.join(__dirname, 'app', 'assets', 'javascripts', 'react'),
    filename: "bundle.js"
  },

  // Add loaders that allow us to run our Javascripts through babel to
  // convert them from ES6 to ES5.
  module: {
    loaders: [
      { test: /\.js?$/, exclude: /(node_modules)/, loader: 'babel' }
    ]
  },

  // The root option lets you assume that all your Javascript files are within
  // the frontend folder, and you can include them from this point.

  // The extensions option makes it so that you don't have to include file
  // extensions when you require files. 
  resolve: {
    root: path.resolve('./frontend'),
    extensions: ['', '.js', '.jsx']
  }
}
