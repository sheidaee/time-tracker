const rewireCssModules = require("@horacehylee/react-app-rewire-css-modules");
const customProperties = {};

module.exports = function override(config, env) {
  config = rewireCssModules(config, env, customProperties);    

  return config;
};
