/**
 * @file webpack configuration.
 * @author Simon Finney <simonjfinney@gmail.com>
 */

const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const packageName = require('./package.json').name;

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
module.exports = env => ({
  devtool: env && env.development && 'cheap-module-eval-source-map',
  plugins: [
    new CleanWebpackPlugin([paths.dist]),
    new HtmlWebpackPlugin({
      template: path.resolve(paths.src, 'index.html'),
      title: packageName,
    }),
  ],
  output: { filename: `${packageName}.js` },
});
