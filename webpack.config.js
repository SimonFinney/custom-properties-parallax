/**
 * @file webpack configuration.
 * @author Simon Finney <simonjfinney@gmail.com>
 * @copyright Simon Finney 2018
 */

const path = require('path');

const packageName = require('./package.json').name;

/**
 * Creates a camel-case string from a string.
 * @param {string} str String to convert to camel-case.
 * @returns {string} Camel-case string.
 */
const toCamelCase = str =>
  str.replace(/(\-\w)/g, matches => matches[1].toUpperCase());

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: `${packageName}.js`,
    library: toCamelCase(packageName),
  },
};
