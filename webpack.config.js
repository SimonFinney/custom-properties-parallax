/**
 * @file webpack configuration.
 * @author Simon Finney <simonjfinney@gmail.com>
 */

const path = require('path');

const packageName = require('./package.json').name;

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: `${packageName}.js`,
  },
};
