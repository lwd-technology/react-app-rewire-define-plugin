# react-app-rewire-define-plugin

Add `webpack.DefinePlugin` to a [`react-app-rewired`](https://github.com/timarney/react-app-rewired) config.

```js
const rewireDefinePlugin = require('react-app-rewire-define-plugin')

// Use `webpack.DefinePlugin` to add the version number from package.json
config = rewireDefinePlugin(config, env, {
  'process.env.VERSION': JSON.stringify(require('package.json').version)
})
```
