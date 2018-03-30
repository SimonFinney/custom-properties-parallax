/**
 * @file webpack configuration.
 * @author Simon Finney <simonjfinney@gmail.com>
 */

const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const { name } = require('./package.json');

/**
 * Creates an object for maintaining paths throughout the webpack configuration.
 */
const paths = new function paths() {
  this.src = path.resolve(__dirname, 'src');
  this.dist = path.resolve(__dirname, 'dist');
}();

/**
 * Exports the webpack configuration for the library.
 * @param {Object.<string, boolean>} env Environment variables defined in the package manifest.
 */
module.exports = ({ development } = false) => ({
  devtool: development && 'cheap-module-eval-source-map',
  plugins: [
    new CleanWebpackPlugin([paths.dist]),
    development &&
      new HtmlWebpackPlugin({
        template: path.resolve(paths.src, 'index.html'),
        title: name,
      }),
  ].filter(Boolean),
  output: {
    filename: `${name}.js`,
    library: name
      .split('-')
      .map(str => `${str.charAt(0).toUpperCase()}${str.slice(1)}`)
      .join(''), // Converts the package name to uppercase to expose the public methods to.
  },
});
