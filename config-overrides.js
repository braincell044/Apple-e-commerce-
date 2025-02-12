// filepath: /Users/apple/iphone-ecommerce/config-overrides.js
const path = require('path');

module.exports = function override(config, env) {
  config.resolve.fallback = {
    buffer: require.resolve('buffer/'),
    crypto: require.resolve('crypto-browserify'),
    stream: require.resolve('stream-browserify'),
    util: require.resolve('util/'),
    process: require.resolve('process/browser'),
  };
  return config;
};