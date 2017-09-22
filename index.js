const webpack = require('webpack')

/**
 * @param {object} config
 * @param {any[]} config.plugins
 */
function rewireDefinePlugin(config, env, definePluginOptions = {}) {
  // Add the define plugin to the list of plugins
  config.plugins = (config.plugins || [])
    .concat([new webpack.DefinePlugin(definePluginOptions)])

  return config
}

module.exports = rewireDefinePlugin
