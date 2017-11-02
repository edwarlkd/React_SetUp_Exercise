// webpack.config.js is where you will put all of the details required to make webpack operate.

/*
 *first thing webpack needs to know is an entry-point, which is the file that Webpack will transform
  (if you make your entry point to the outermost of your app, then the webpack will transform entire app)

 *To specify an entry point, give module.exports a property named entry. entry's value can be a filepath

 *
 *Each loader transformation should be written as an object literal
 *Each "loader" that you add to the loaders array will represent a transformation that your code will go through before reaching the browser.
 *(Each loader transformation should be written as an object literal)
 *Each loader object needs a property called test.  The test property specifies which files will be affected by the loader
 (In addition to "test", each loader transformation can have a property named include or exclude)
 *

 */

// For htmlwebpack
var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  // Configuration object goes here; we tell the plugin what it needs to know

  // value is a filepath to the current html file, one we are trying to copy and move
  template: __dirname + '/app/index.html',
  // name of newly created HTML file. (Ok to name it the same since this one will be stored in 'build' folder)
  filename: 'index.html',

  inject: 'body' // either head or body is fine
}); // we finished configured, so now add the instance to 'module.exports'

// All of webpack's configuration will go inside of this object literal
module.exports = {
  entry: __dirname + '/app/index.js',
  module: {

    //each loader of the array represents a transformation they go thru
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,

        // final property of each loader is transformation that loader should perform
        loader: 'babel-loader'
      }
    ]
  },

  // where the transformed JavaScript go. ( name of output and value of an object)
  output: {
    //output object have two properties; filename and path
    // filename is the new transformed JS file
    filename: 'transformed.js',
    path: __dirname + '/build'
  },
  plugin: [HTMLWebpackPluginConfig];
};
